import { Component, OnInit, OnDestroy, ViewChild, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { Router } from '@angular/router';
import { Subject, interval, Subscription } from 'rxjs';
import { takeUntil, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

// Interfaces
interface GarcomInfo {
  id: string;
  nome: string;
  foto?: string;
  turno: string;
  inicioTurno: Date;
}

interface Mesa {
  id: string;
  nome: string;
  capacidade: number;
  tipo: 'retangular' | 'circular';
  vip: boolean;
  status: 'LIVRE' | 'OCUPADA' | 'RESERVADA' | 'EM_ATENDIMENTO';
  tempoOcupacao?: string;
  reserva?: {
    id: string;
    cliente: string;
    horario: string;
    telefone?: string;
  };
  garcomsAtendendo?: string[];
}

interface Ambiente {
  id: string;
  nome: string;
  mesas: Mesa[];
}

interface Pedido {
  id: string;
  mesaId: string;
  mesaNome: string;
  status: 'ATIVO' | 'PREPARANDO' | 'PRONTO' | 'ENTREGUE';
  itens: PedidoItem[];
  total: number;
  dataCriacao: Date;
  garcomId: string;
}

interface PedidoItem {
  id: string;
  nome: string;
  quantidade: number;
  preco: number;
  observacoes?: string;
  status: 'PENDENTE' | 'PREPARANDO' | 'PRONTO' | 'ENTREGUE';
}

interface CardapioCategoria {
  id: string;
  nome: string;
  itens: CardapioItem[];
}

interface CardapioItem {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  disponivel: boolean;
}

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
    NzEmptyModule,
    NzAvatarModule,
    NzIconModule,
    NzImageModule,
    NzModalModule,
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

  // Dados das mesas e ambientes
  ambientes: Ambiente[] = [];
  ambienteAtivo: Ambiente | null = null;
  mesasAtendidas = 0;
  tempoTrabalho = '0h 0m';

  // Visualização
  visualizacaoAtiva: 'mapa' | 'pedidos' = 'mapa';
  isMobile = false;

  // Navegação de ambientes
  mostrarSetaEsquerda = false;
  mostrarSetaDireita = false;

  // Mesa selecionada
  mesaSelecionada: Mesa | null = null;

  // Pedidos
  pedidosAtivos: Pedido[] = [];

  // Cardápio
  mostrarCardapio = false;
  cardapioCategorias: CardapioCategoria[] = [];

  // Controle de tempo
  private tempoInterval?: Subscription;
  private destroy$ = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkMobile();
    this.carregarDadosIniciais();
    this.iniciarAtualizacaoTempo();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.tempoInterval) {
      this.tempoInterval.unsubscribe();
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
    this.carregarAmbientes();
    this.carregarPedidosAtivos();
    this.carregarCardapio();
  }

  private carregarAmbientes(): void {
    this.isLoading.ambientes = true;
    
    // Simulação de dados - substituir por chamada real da API
    setTimeout(() => {
      this.ambientes = [
        {
          id: '1',
          nome: 'Salão Principal',
          mesas: this.gerarMesas('Salão', 12)
        },
        {
          id: '2',
          nome: 'Varanda',
          mesas: this.gerarMesas('Varanda', 8)
        },
        {
          id: '3',
          nome: 'Área VIP',
          mesas: this.gerarMesas('VIP', 4)
        }
      ];
      
      if (this.ambientes.length > 0) {
        this.ambienteAtivo = this.ambientes[0];
      }
      
      this.isLoading.ambientes = false;
      this.verificarVisibilidadeSetas();
    }, 1000);
  }

  private gerarMesas(prefixo: string, quantidade: number): Mesa[] {
    const mesas: Mesa[] = [];
    const statuses: Mesa['status'][] = ['LIVRE', 'OCUPADA', 'RESERVADA', 'EM_ATENDIMENTO'];
    
    for (let i = 1; i <= quantidade; i++) {
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      const mesa: Mesa = {
        id: `${prefixo.toLowerCase()}-${i}`,
        nome: `${prefixo} ${i}`,
        capacidade: Math.floor(Math.random() * 6) + 2,
        tipo: Math.random() > 0.7 ? 'circular' : 'retangular',
        vip: prefixo === 'VIP' || Math.random() > 0.8,
        status,
        tempoOcupacao: status === 'OCUPADA' || status === 'EM_ATENDIMENTO' ? 
          `${Math.floor(Math.random() * 2)}h ${Math.floor(Math.random() * 60)}m` : undefined,
        garcomsAtendendo: status === 'EM_ATENDIMENTO' ? [this.garcomInfo.id] : []
      };

      if (status === 'RESERVADA') {
        mesa.reserva = {
          id: `reserva-${i}`,
          cliente: `Cliente ${i}`,
          horario: `${18 + Math.floor(Math.random() * 4)}:${Math.floor(Math.random() * 2) * 30}`,
          telefone: `(11) 9999-${String(i).padStart(4, '0')}`
        };
      }

      mesas.push(mesa);
    }

    return mesas;
  }

  private carregarPedidosAtivos(): void {
    this.isLoading.pedidos = true;
    
    // Simulação de dados - substituir por chamada real da API
    setTimeout(() => {
      this.pedidosAtivos = [
        {
          id: '1',
          mesaId: 'salao-1',
          mesaNome: 'Salão 1',
          status: 'ATIVO',
          itens: [
            { id: '1', nome: 'Pizza Margherita', quantidade: 1, preco: 45.90, status: 'PENDENTE' },
            { id: '2', nome: 'Coca-Cola 350ml', quantidade: 2, preco: 8.50, status: 'PENDENTE' }
          ],
          total: 62.90,
          dataCriacao: new Date(),
          garcomId: this.garcomInfo.id
        }
      ];
      
      this.isLoading.pedidos = false;
    }, 500);
  }

  private carregarCardapio(): void {
    this.isLoading.cardapio = true;
    
    // Simulação de dados - substituir por chamada real da API
    setTimeout(() => {
      this.cardapioCategorias = [
        {
          id: '1',
          nome: 'Pizzas',
          itens: [
            { id: '1', nome: 'Pizza Margherita', descricao: 'Molho de tomate, mussarela e manjericão', preco: 45.90, categoria: 'Pizzas', disponivel: true },
            { id: '2', nome: 'Pizza Calabresa', descricao: 'Molho de tomate, mussarela e calabresa', preco: 52.90, categoria: 'Pizzas', disponivel: true }
          ]
        },
        {
          id: '2',
          nome: 'Bebidas',
          itens: [
            { id: '3', nome: 'Coca-Cola 350ml', descricao: 'Refrigerante gelado', preco: 8.50, categoria: 'Bebidas', disponivel: true },
            { id: '4', nome: 'Suco de Laranja', descricao: 'Suco natural de laranja', preco: 12.90, categoria: 'Bebidas', disponivel: true }
          ]
        }
      ];
      
      this.isLoading.cardapio = false;
    }, 300);
  }

  private iniciarAtualizacaoTempo(): void {
    this.tempoInterval = interval(60000) // Atualiza a cada minuto
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.atualizarTempoTrabalho();
        this.atualizarTempoOcupacaoMesas();
      });
  }

  private atualizarTempoTrabalho(): void {
    const agora = new Date();
    const diferenca = agora.getTime() - this.garcomInfo.inicioTurno.getTime();
    const horas = Math.floor(diferenca / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    this.tempoTrabalho = `${horas}h ${minutos}m`;
  }

  private atualizarTempoOcupacaoMesas(): void {
    this.ambientes.forEach(ambiente => {
      ambiente.mesas.forEach(mesa => {
        if (mesa.status === 'OCUPADA' || mesa.status === 'EM_ATENDIMENTO') {
          // Simulação de atualização de tempo
          const tempoAtual = mesa.tempoOcupacao || '0h 0m';
          const [h, m] = tempoAtual.split('h ')[0].split('h');
          const horas = parseInt(h) || 0;
          const minutos = parseInt(m.replace('m', '')) || 0;
          const novoMinuto = minutos + 1;
          
          if (novoMinuto >= 60) {
            mesa.tempoOcupacao = `${horas + 1}h 0m`;
          } else {
            mesa.tempoOcupacao = `${horas}h ${novoMinuto}m`;
          }
        }
      });
    });
  }

  // Navegação de ambientes
  selecionarAmbiente(ambiente: Ambiente): void {
    this.ambienteAtivo = ambiente;
    this.verificarVisibilidadeSetas();
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
    this.mesaSelecionada = mesa;
  }

  fecharDetalhesMesa(): void {
    this.mesaSelecionada = null;
  }

  getTooltipMesa(mesa: Mesa): string {
    let tooltip = `Mesa ${mesa.nome} - ${mesa.capacidade} pessoas`;
    
    if (mesa.vip) {
      tooltip += ' (VIP)';
    }
    
    if (mesa.reserva) {
      tooltip += `\nReserva: ${mesa.reserva.cliente} às ${mesa.reserva.horario}`;
    }
    
    if (mesa.tempoOcupacao) {
      tooltip += `\nOcupada há: ${mesa.tempoOcupacao}`;
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
      const eraReservada = mesa.status === 'RESERVADA';
      mesa.status = 'EM_ATENDIMENTO';
      mesa.garcomsAtendendo = [this.garcomInfo.id];
      this.mesasAtendidas++;
      
      if (eraReservada && mesa.reserva) {
        // Atualizar status da reserva para ativa
        console.log('Reserva ativada:', mesa.reserva.id);
      }
      
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
      mesa.status = 'LIVRE';
      mesa.garcomsAtendendo = [];
      mesa.tempoOcupacao = undefined;
      this.mesasAtendidas = Math.max(0, this.mesasAtendidas - 1);
      this.fecharDetalhesMesa();
    }
  }

  removerAtendimento(mesa: Mesa): void {
    if (mesa.garcomsAtendendo?.includes(this.garcomInfo.id)) {
      mesa.garcomsAtendendo = mesa.garcomsAtendendo.filter(id => id !== this.garcomInfo.id);
      this.mesasAtendidas = Math.max(0, this.mesasAtendidas - 1);
      
      if (mesa.garcomsAtendendo.length === 0) {
        mesa.status = 'LIVRE';
        mesa.tempoOcupacao = undefined;
      }
      
      this.fecharDetalhesMesa();
    }
  }

  isGarcomAtendendoMesa(mesaId: string): boolean {
    const mesa = this.ambientes
      .flatMap(a => a.mesas)
      .find(m => m.id === mesaId);
    
    return mesa?.garcomsAtendendo?.includes(this.garcomInfo.id) || false;
  }

  getGarcomAtendendo(mesaId: string): GarcomInfo | null {
    const mesa = this.ambientes
      .flatMap(a => a.mesas)
      .find(m => m.id === mesaId);
    
    if (mesa?.garcomsAtendendo?.length) {
      // Retorna o primeiro garçom (simulação)
      return this.garcomInfo;
    }
    
    return null;
  }

  getGarcomsAtendendoMesa(mesaId: string): GarcomInfo[] {
    const mesa = this.ambientes
      .flatMap(a => a.mesas)
      .find(m => m.id === mesaId);
    
    if (mesa?.garcomsAtendendo?.length) {
      // Simulação - retorna o garçom atual
      return [this.garcomInfo];
    }
    
    return [];
  }

  verDetalhesMesa(mesa: Mesa): void {
    this.mesaSelecionada = mesa;
  }

  // Gestão de pedidos
  atualizarPedidos(): void {
    this.carregarPedidosAtivos();
  }

  adicionarItemPedido(pedido: Pedido): void {
    this.mostrarCardapio = true;
    // Implementar lógica para adicionar item ao pedido
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

  adicionarItemAoCarrinho(item: CardapioItem): void {
    // Implementar lógica para adicionar item ao carrinho
    console.log('Adicionar item ao carrinho:', item);
  }

  // Visualização
  onViewChange(event: any): void {
    this.visualizacaoAtiva = event.value;
  }

  // Finalizar turno
  finalizarTurno(): void {
    if (this.mesasAtendidas > 0) {
      // Mostrar confirmação ou impedir finalização
      console.log('Não é possível finalizar turno com mesas em atendimento');
      return;
    }
    
    // Implementar lógica de finalização do turno
    console.log('Finalizando turno...');
    this.router.navigate(['/home']);
  }
}