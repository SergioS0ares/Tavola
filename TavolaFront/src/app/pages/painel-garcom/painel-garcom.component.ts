import { Component, OnInit, OnDestroy, ViewChild, ElementRef, HostListener, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CalendarioReservasComponent } from '../reservas/calendario-reservas/calendario-reservas.component';
import { AuthService } from '../../core/services/auth.service';
import { Subject, interval, Subscription, Observable } from 'rxjs';
import { takeUntil, take, finalize } from 'rxjs/operators';
import Swal from 'sweetalert2';

// Importar o serviço e interfaces
import { PainelGarcomService, GarcomInfo, Mesa, Ambiente, Pedido, IReserva } from '../../core/services/painel-garcom.service';
import { DialogMesaAcoesComponent } from './dialog-mesa-acoes/dialog-mesa-acoes.component';
import { DialogCardapioGarcomComponent } from './dialog-cardapio-garcom/dialog-cardapio-garcom.component';

@Component({
  selector: 'app-painel-garcom',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatDialogModule,
    NzEmptyModule,
    NzAvatarModule,
    NzIconModule,
    NzImageModule,
    NzModalModule,
    NzDatePickerModule,
    FormsModule,
    CalendarioReservasComponent,
  ],
  templateUrl: './painel-garcom.component.html',
  styleUrls: ['./painel-garcom.component.scss']
})
export class PainelGarcomComponent implements OnInit, OnDestroy {
  @ViewChild('ambientesScroll', { static: false }) ambientesScroll!: ElementRef;

  // Dados do garçom
  garcomInfo: GarcomInfo = {
    id: '1',
    nome: 'João Silva',
    foto: 'assets/png/avatar-padrao-garcom-tavola.png',
    turno: 'Manhã',
    inicioTurno: new Date()
  };

  // Estados da aplicação
  isLoading = {
    ambientes: false,
    pedidos: false,
    cardapio: false
  };

  // Observables para a UI (ligados ao serviço)
  public ambientes$!: Observable<Ambiente[]>;
  public pedidosAtivos$!: Observable<Pedido[]>;
  
  // Dados das mesas e ambientes
  ambienteAtivo: Ambiente | null = null;
  mesasAtendidas = 0;

  // Visualização
  visualizacaoAtiva: 'mapa' | 'pedidos' = 'mapa';
  isMobile = false;

  // Navegação de ambientes
  mostrarSetaEsquerda = false;
  mostrarSetaDireita = false;

  // Mesa selecionada
  mesaSelecionada: Mesa | null = null;

  // Cardápio
  mostrarCardapio = false;

  // Navegação de data
  dataAtual = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()); // Inicializa com a data atual (sem hora)
  
  // Calendário
  reservasParaCalendario: IReserva[] = [];
  isLoadingCalendario = false;
  
  // Filtro de mesas por status
  statusFiltroAtivo: string | null = null; // null = todos, ou 'LIVRE', 'OCUPADA', etc.
  
  // Controle de tempo
  private timerSubscription?: Subscription;
  private destroy$ = new Subject<void>();

  constructor(
    private router: Router, 
    private authService: AuthService,
    private dialog: MatDialog,
    private painelGarcomService: PainelGarcomService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.checkMobile();
    this.carregarDadosIniciais();
    this.iniciarAtualizacaoTempo();
    this.carregarDadosGarcom();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.checkMobile();
  }

  private checkMobile(): void {
    this.isMobile = window.innerWidth <= 700;
  }

  private carregarDadosIniciais(): void {
    // Em vez de carregar mocks, subscrevemos aos observables do serviço
    this.ambientes$ = this.painelGarcomService.ambientes$;
    this.pedidosAtivos$ = this.painelGarcomService.pedidosAtivos$;
    
    // Carrega os dados reais da API
    this.isLoading.ambientes = true;
    this.painelGarcomService.carregarAmbientes(this.dataAtual)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (ambientes) => {
          this.isLoading.ambientes = false;
          // Define o ambiente ativo se não houver um selecionado
          if (ambientes.length > 0 && !this.ambienteAtivo) {
            this.ambienteAtivo = ambientes[0];
            this.verificarVisibilidadeSetas();
          } else if (this.ambienteAtivo) {
            // Atualiza o ambiente ativo se já houver um selecionado
            const ambienteEncontrado = ambientes.find(a => a.id === this.ambienteAtivo?.id);
            if (ambienteEncontrado) {
              this.ambienteAtivo = ambienteEncontrado;
            } else if (ambientes.length > 0) {
              this.ambienteAtivo = ambientes[0];
            }
          }
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('[PainelGarcom] Erro ao carregar ambientes:', error);
          this.isLoading.ambientes = false;
          this.cdr.detectChanges();
        }
      });
  }

  private carregarDadosGarcom(): void {
    const perfil = this.authService.perfil;
    if (perfil) {
      this.garcomInfo.id = perfil.id || '1';
      this.garcomInfo.nome = perfil.nome;
      
      // Usa a mesma lógica do layout-principal para obter a imagem
      if (perfil.imagem) {
        this.garcomInfo.foto = this.authService.getAbsoluteImageUrl(perfil.imagem);
      } else {
        // Se não tem imagem, usa o avatar padrão do garçom
        this.garcomInfo.foto = 'assets/png/avatar-padrao-garcom-tavola.png';
      }
      
      // Determina o turno baseado na hora atual
      const hora = new Date().getHours();
      if (hora >= 6 && hora < 12) {
        this.garcomInfo.turno = 'Manhã';
      } else if (hora >= 12 && hora < 18) {
        this.garcomInfo.turno = 'Tarde';
      } else {
        this.garcomInfo.turno = 'Noite';
      }
      
      this.garcomInfo.inicioTurno = new Date();
    }
  }

  private iniciarAtualizacaoTempo(): void {
    // Timer removido conforme solicitado - deixar por enquanto
    // Pode ser reativado depois se necessário
    // this.timerSubscription = interval(300000) // Atualiza a cada 5 minutos
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe(() => {
    //     this.atualizarTempoOcupacaoMesas();
    //   });
  }

  

  private atualizarTempoOcupacaoMesas(): void {
    // Atualiza o display de tempo das mesas
    const ambientesAtuais = this.painelGarcomService.getAmbientesAtuais();
    let precisaAtualizar = false;

    const novosAmbientes = ambientesAtuais.map(ambiente => ({
      ...ambiente,
      mesas: ambiente.mesas.map(mesa => {
        let tempoFormatado = mesa.tempoOcupacaoDisplay; // Mantém o valor anterior por padrão
        if (mesa.inicioOcupacao && (mesa.status === 'OCUPADA' || mesa.status === 'EM_ATENDIMENTO')) {
          tempoFormatado = this.formatarTempoOcupacaoMinutos(mesa.inicioOcupacao); // Usa a nova função de minutos
        } else {
          tempoFormatado = undefined; // Limpa se não estiver ocupada/atendida
        }

        if (mesa.tempoOcupacaoDisplay !== tempoFormatado) {
          precisaAtualizar = true;
          return { ...mesa, tempoOcupacaoDisplay: tempoFormatado };
        }
        return mesa; // Retorna a mesa sem modificação se o tempo não mudou
      })
    }));

    // Atualiza o BehaviorSubject SÓ SE houver mudanças nos displays de tempo
    if (precisaAtualizar) {
      this.painelGarcomService.atualizarAmbientes(novosAmbientes);
    }
  }
  

  // Navegação de ambientes
  selecionarAmbiente(ambiente: Ambiente): void {
    // Busca o ambiente atualizado dos observables para garantir que está sincronizado
    const ambientesAtuais = this.painelGarcomService.getAmbientesAtuais();
    const ambienteAtualizado = ambientesAtuais.find(a => a.id === ambiente.id);
    this.ambienteAtivo = ambienteAtualizado || ambiente;
    this.verificarVisibilidadeSetas();
    this.cdr.detectChanges();
  }

  scrollAmbientes(direcao: 'left' | 'right'): void {
    if (!this.ambientesScroll) return;
    
    const scrollContainer = this.ambientesScroll.nativeElement;
    const scrollAmount = 200;
    
    if (direcao === 'left') {
      scrollContainer.scrollLeft -= scrollAmount;
    } else {
      scrollContainer.scrollLeft += scrollAmount;
    }
    
    setTimeout(() => this.verificarVisibilidadeSetas(), 100);
  }

  verificarVisibilidadeSetas(): void {
    if (!this.ambientesScroll) return;
    
    const scrollContainer = this.ambientesScroll.nativeElement;
    this.mostrarSetaEsquerda = scrollContainer.scrollLeft > 0;
    this.mostrarSetaDireita = scrollContainer.scrollLeft < (scrollContainer.scrollWidth - scrollContainer.clientWidth);
  }

  // Gestão de mesas
  selecionarMesa(mesa: Mesa): void {
    console.log('Abrindo dialog para:', mesa);
    const todosGarcons = this.painelGarcomService.getGarconsDisponiveis();
    
    // Abre o novo Dialog
    const dialogRef = this.dialog.open(DialogMesaAcoesComponent, {
      width: '500px',
      data: { 
        mesa: mesa,
        garcom: this.garcomInfo, // Passa o garçom atual
        garconsDisponiveis: todosGarcons // Lista de garçons disponíveis
      },
      panelClass: 'tavola-dialog-wrapper' // Classe para styling global
    });

    // Ouve o resultado do dialog
    dialogRef.afterClosed().subscribe(resultado => {
      if (!resultado || !resultado.acao) return; // Fechou sem ação
      
      const mesaId = mesa.id;
      const garcomId = this.garcomInfo.id;

      switch (resultado.acao) {
        case 'ocupar_mesa':
          this.painelGarcomService.ocuparMesa(mesaId);
          break;
        case 'iniciar_atendimento':
          this.painelGarcomService.iniciarAtendimento(mesaId, garcomId);
          this.mesasAtendidas++;
          break;
        case 'liberar_mesa':
          this.painelGarcomService.liberarMesa(mesaId);
          this.mesasAtendidas = Math.max(0, this.mesasAtendidas - 1);
          break;
        case 'ver_cardapio':
          this.abrirDialogCardapio(mesaId);
          break;
        case 'fazer_pedido':
          this.abrirDialogCardapio(mesaId);
          break;
        case 'adicionar_garcom_especifico':
          this.painelGarcomService.adicionarGarcomAMesa(mesaId, resultado.garcomId);
          break;
        case 'remover_garcom':
          this.painelGarcomService.removerGarcomDaMesa(mesaId, resultado.garcomId);
          break;
      }
    });
  }

  fecharDetalhesMesa(): void {
    this.mesaSelecionada = null;
  }


  // NOVA FUNÇÃO HELPER: Formata apenas em minutos
  private formatarTempoOcupacaoMinutos(inicio?: Date): string {
    if (!inicio) return '';
    const agora = Date.now();
    const diffMs = agora - new Date(inicio).getTime();
    const diffMin = Math.floor(diffMs / 60000); // Apenas minutos totais

    if (diffMin < 1) return '< 1m';
    if (diffMin < 60) return `${diffMin}m`;

    const horas = Math.floor(diffMin / 60);
    const minutos = diffMin % 60;
    return `${horas}h ${minutos}m`;
  }

  getTooltipMesa(mesa: Mesa): string {
    let tooltip = `Mesa ${mesa.nome} - ${mesa.capacidade} pessoas`;
    
    if (mesa.vip) {
      tooltip += ' (VIP)';
    }
    
    if (mesa.reserva) {
      tooltip += `\nReserva: ${mesa.reserva.cliente} às ${mesa.reserva.horario}`;
    }
    
    if (mesa.tempoOcupacaoDisplay) {
      tooltip += `\nOcupada há: ${mesa.tempoOcupacaoDisplay}`;
    }
    
    return tooltip;
  }

  getStatusIcon(status: string): string {
    const icons: { [key: string]: string } = {
      'LIVRE': 'event_available',
      'OCUPADA': 'person',
      'RESERVADA': 'event',
      'EM_ATENDIMENTO': 'restaurant'
    };
    return icons[status] || 'help';
  }

  getStatusText(status: string): string {
    const texts: { [key: string]: string } = {
      'LIVRE': 'Livre',
      'OCUPADA': 'Ocupada',
      'RESERVADA': 'Reservada',
      'EM_ATENDIMENTO': 'Em Atendimento'
    };
    return texts[status] || status;
  }

  // Funcionalidades de atendimento
  iniciarAtendimento(mesa: Mesa): void {
    if (mesa.status === 'LIVRE' || mesa.status === 'RESERVADA') {
      this.painelGarcomService.iniciarAtendimento(mesa.id, this.garcomInfo.id);
      this.mesasAtendidas++;
      this.fecharDetalhesMesa();
    }
  }

  colaborarAtendimento(mesa: Mesa): void {
    if (mesa.status === 'EM_ATENDIMENTO' && mesa.garcomsAtendendo) {
      if (!mesa.garcomsAtendendo.includes(this.garcomInfo.id)) {
        mesa.garcomsAtendendo.push(this.garcomInfo.id);
        this.mesasAtendidas++;
      }
      this.fecharDetalhesMesa();
    }
  }

  liberarMesa(mesa: Mesa): void {
    if (mesa.status === 'EM_ATENDIMENTO' || mesa.status === 'OCUPADA') {
      this.painelGarcomService.liberarMesa(mesa.id);
      this.mesasAtendidas = Math.max(0, this.mesasAtendidas - 1);
      this.fecharDetalhesMesa();
    }
  }

  removerAtendimento(mesa: Mesa): void {
    if (mesa.garcomsAtendendo?.includes(this.garcomInfo.id)) {
      mesa.garcomsAtendendo = mesa.garcomsAtendendo.filter(id => id !== this.garcomInfo.id);
      this.mesasAtendidas = Math.max(0, this.mesasAtendidas - 1);
      
      if (mesa.garcomsAtendendo.length === 0) {
        this.painelGarcomService.liberarMesa(mesa.id);
      }
      
      this.fecharDetalhesMesa();
    }
  }

  isGarcomAtendendoMesa(mesaId: string): boolean {
    const mesa = this.ambienteAtivo?.mesas.find((m: Mesa) => m.id === mesaId);
    return mesa?.garcomsAtendendo?.includes(this.garcomInfo.id) || false;
  }

  getGarcomAtendendo(mesaId: string): GarcomInfo | null {
    const mesa = this.ambienteAtivo?.mesas.find((m: Mesa) => m.id === mesaId);
    
    if (mesa?.garcomsAtendendo?.length) {
      // Retorna o primeiro garçom (simulação)
      return this.garcomInfo;
    }
    
    return null;
  }

  getGarcomsAtendendoMesa(mesaId: string): GarcomInfo[] {
    // 1. Pega os ambientes MAIS ATUAIS do serviço
    const ambientes = this.painelGarcomService.getAmbientesAtuais(); 
    const ambienteDaMesa = ambientes.find(amb => amb.mesas.some(m => m.id === mesaId));
    const mesa = ambienteDaMesa?.mesas.find((m: Mesa) => m.id === mesaId);

    if (mesa?.garcomsAtendendo?.length) {
      // 2. Pega a lista COMPLETA de garçons disponíveis
      const todosGarcons = this.painelGarcomService.getGarconsDisponiveis();

      // 3. Mapeia os IDs para os OBJETOS GarcomInfo
      return mesa.garcomsAtendendo
        .map(id => todosGarcons.find(g => g.id === id)) // Encontra o objeto GarcomInfo
        .filter((g): g is GarcomInfo => !!g); // Filtra caso algum ID não seja encontrado
    }

    return []; // Retorna array vazio se não houver garçons
  }

  verDetalhesMesa(mesa: Mesa): void {
    this.mesaSelecionada = mesa;
  }

  // Gestão de pedidos
  atualizarPedidos(): void {
    // Os pedidos são atualizados automaticamente via observable
    console.log('Pedidos atualizados via observable');
  }

  editarPedido(pedido: Pedido): void {
    this.abrirDialogCardapio(pedido.mesaId, pedido.id);
  }

  async removerPedido(pedido: Pedido): Promise<void> {
    const result = await Swal.fire({
      title: 'Remover Pedido',
      text: `Tem certeza que deseja remover o pedido da Mesa ${pedido.mesaNome}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#F44336',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Sim, remover!',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    });

    if (result.isConfirmed) {
      this.painelGarcomService.removerPedido(pedido.id);
      
      Swal.fire({
        title: 'Removido!',
        text: 'O pedido foi removido com sucesso.',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false
      });
    }
  }

  calcularTotalPedido(pedido: Pedido): number {
    return pedido.itens.reduce((total, item) => total + (item.preco * item.quantidade), 0);
  }

  verPedidoCompleto(pedido: Pedido): void {
    // Implementar visualização completa do pedido
    console.log('Ver pedido completo:', pedido);
  }

  // Cardápio
  verCardapio(): void {
    this.mostrarCardapio = true;
  }

  fecharCardapio(): void {
    this.mostrarCardapio = false;
  }

  adicionarItemAoCarrinho(item: any): void {
    // Implementar lógica para adicionar item ao carrinho
    console.log('Adicionar item ao carrinho:', item);
  }

  // Abrir dialog do cardápio
  abrirDialogCardapio(mesaId: string, pedidoId?: string): void {
    const dialogRef = this.dialog.open(DialogCardapioGarcomComponent, {
      width: '700px',
      data: { 
        mesaId: mesaId,
        pedidoId: pedidoId
      },
      panelClass: 'tavola-dialog-wrapper'
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) {
        console.log('Cardápio fechado com sucesso');
      }
    });
  }

  // Visualização
  onViewChange(event: any): void {
    this.visualizacaoAtiva = event.value;
  }


  // Navegação de data
  diaAnterior(): void {
    const dataAnterior = new Date(this.dataAtual);
    dataAnterior.setDate(dataAnterior.getDate() - 1);
    // Cria um novo objeto Date para garantir que a data seja o início do dia
    this.dataAtual = new Date(dataAnterior.getFullYear(), dataAnterior.getMonth(), dataAnterior.getDate());
    this.carregarDadosIniciais();
  }

  proximoDia(): void {
    const proximaData = new Date(this.dataAtual);
    proximaData.setDate(proximaData.getDate() + 1);
    // Cria um novo objeto Date para garantir que a data seja o início do dia
    this.dataAtual = new Date(proximaData.getFullYear(), proximaData.getMonth(), proximaData.getDate());
    this.carregarDadosIniciais();
  }

  nzDatePickerChange(data: Date): void {
    if (data) {
      // Cria um novo objeto Date para garantir que a data seja o início do dia
      this.dataAtual = new Date(data.getFullYear(), data.getMonth(), data.getDate());
      console.log('[PainelGarcom] Nova data selecionada:', this.dataAtual.toLocaleDateString());
      this.carregarDadosIniciais(); // Recarrega os dados principais (ambientes, pedidos)
      this.cdr.detectChanges(); // Garante atualização da UI para a nova data
    }
  }

  abrirCalendario(): void {
    // 1. CARREGA os dados ANTES de abrir o dialog
    this.carregarReservasParaCalendario(this.dataAtual, () => {
      // 2. ABRE o dialog APÓS os dados serem carregados (dentro do callback)
      const dialogRef = this.dialog.open(CalendarioReservasComponent, {
        width: '80vw',
        maxWidth: '900px',
        maxHeight: '90vh',
        panelClass: 'tavola-dialog-wrapper', // Tua classe global
        data: { 
          // Passa a data inicial e as reservas carregadas
          initialDate: this.dataAtual, 
          reservas: this.reservasParaCalendario 
        }
      });

      // 3. Lida com o resultado (data selecionada)
      dialogRef.afterClosed().subscribe(dataSelecionada => {
        if (dataSelecionada instanceof Date) {
          // Chama a MESMA função que o nzDatePicker usa para atualizar
          this.nzDatePickerChange(dataSelecionada); 
        } else {
          console.log('Calendário fechado sem selecionar data.');
        }
      });
    });
  }

  carregarReservasParaCalendario(data: Date, callback: () => void): void {
    // Simulação: Assume que o PainelGarcomService tem um método similar
    // ou que você busca de outra forma. Adapte conforme necessário.
    console.log(`[PainelGarcom] Carregando reservas para calendário em ${data.toLocaleDateString()}`);
    this.isLoadingCalendario = true; 
    
    // ----- SUBSTITUA PELA TUA LÓGICA REAL DE BUSCA -----
    // Exemplo usando MOCK do serviço (adapte se for API real)
    this.reservasParaCalendario = this.painelGarcomService.getReservasParaCalendarioMock(data); 
    console.log('[PainelGarcom] Reservas para calendário (mock):', this.reservasParaCalendario);
    this.isLoadingCalendario = false;
    callback(); 
  }

  getReservasParaCalendario(): any[] {
    // Simulação de reservas para o calendário
    // Em uma implementação real, isso viria de um serviço
    return [
      {
        id: '1',
        cliente: 'João Silva',
        pessoas: 4,
        data: new Date(),
        horario: '19:30',
        status: 'CONFIRMADA'
      },
      {
        id: '2',
        cliente: 'Maria Santos',
        pessoas: 2,
        data: new Date(Date.now() + 24 * 60 * 60 * 1000),
        horario: '20:00',
        status: 'PENDENTE'
      }
    ];
  }

  // Função para tooltip do indicador "+N" dos garçons
  getNomesGarconsExtras(mesaId: string): string {
    const garcons = this.getGarcomsAtendendoMesa(mesaId);
    if (!garcons || garcons.length <= 2) return '';
    return 'Mais: ' + garcons.slice(2).map((g: GarcomInfo) => g.nome).join(', ');
  }

  // Função para formatar o tempo (ajustada para mais concisão)
  calcularTempoOcupacao(timestamp?: number | Date): string {
    if (!timestamp) return '';
    const inicio = timestamp instanceof Date ? timestamp.getTime() : timestamp;
    const agora = Date.now();
    const diffMs = agora - inicio;
    const diffMin = Math.floor(diffMs / 60000); // Usar floor para minutos completos

    if (diffMin < 1) return '< 1m';
    return `${diffMin}m`;
  }

  // === MÉTODOS PARA FILTRO DE MESAS POR STATUS ===

  // Método para filtrar mesas por status
  filtrarMesasPorStatus(status: string | null): void {
    this.statusFiltroAtivo = status;
    console.log('[PainelGarcom] Filtro de status alterado para:', status);
  }

  // Método para verificar se uma mesa deve ser exibida baseada no filtro
  deveExibirMesa(mesa: Mesa): boolean {
    if (!this.statusFiltroAtivo) {
      return true; // Mostra todas as mesas se não há filtro
    }
    return mesa.status === this.statusFiltroAtivo;
  }

  // Método para obter a classe CSS do filtro ativo
  getClasseFiltroStatus(status: string | null): string {
    return this.statusFiltroAtivo === status ? 'filtro-ativo' : '';
  }

  // Método para limpar o filtro (mostrar todas as mesas)
  limparFiltroStatus(): void {
    this.statusFiltroAtivo = null;
  }
}