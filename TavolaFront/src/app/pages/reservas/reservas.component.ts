import { Component, OnInit, ViewChild, ElementRef, TemplateRef, ChangeDetectorRef, LOCALE_ID } from "@angular/core";
import { CommonModule, registerLocaleData, TitleCasePipe } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import localePt from "@angular/common/locales/pt";

// Angular Material (imports existentes)
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

// NG-Zorro (imports existentes)
import { NzAvatarModule } from "ng-zorro-antd/avatar";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzModalModule, NzModalService } from "ng-zorro-antd/modal";
import { NZ_ICONS } from "ng-zorro-antd/icon";
import { NZ_I18N, pt_BR } from "ng-zorro-antd/i18n";
import type { IconDefinition } from "@ant-design/icons-angular";
import { CarOutline, HomeOutline, EnvironmentOutline, FlagOutline, HeartOutline, HeartFill, LeftOutline, RightOutline, CalendarOutline, ClockCircleOutline, TeamOutline, CheckCircleOutline, ExclamationCircleOutline, FireFill, CopyOutline, CheckOutline, PlusOutline, DeleteOutline, EditOutline } from "@ant-design/icons-angular/icons";

registerLocaleData(localePt);

const antIcons: IconDefinition[] = [ CarOutline, HomeOutline, EnvironmentOutline, FlagOutline, HeartOutline, HeartFill, LeftOutline, RightOutline, CalendarOutline, ClockCircleOutline, TeamOutline, CheckCircleOutline, ExclamationCircleOutline, FireFill, CopyOutline, CheckOutline, PlusOutline, DeleteOutline, EditOutline ];

// Definições de Interface (Mesa, Cliente, Reserva - como no seu código)
interface Mesa {
  id: string;
  numero: string;
  tipo: 'retangular' | 'circular';
  area: string;
  vip: boolean;
  ocupada: boolean;
  reservaId?: string;
  capacidade?: number;
}

interface Cliente {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  avatar: string;
  historico: {
    proximas: number;
    negadas: number;
    canceladas: number;
    naoCompareceu: number;
    gastoMedio: number;
    gastoTotal: number;
  };
}

interface Reserva {
  id: string;
  clienteId: string;
  mesaIds: string[];
  data: Date;
  horario: string;
  periodo: 'Almoço' | 'Jantar';
  pessoas: number;
  status: 'confirmada' | 'pendente' | 'cancelada' | 'finalizada' | 'ausente';
  duracao: string;
  comentarios: string;
  notas: string;
  oferta?: string;
  desconto?: string;
}

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatDividerModule,
    MatTooltipModule,
    MatChipsModule,
    MatSelectModule,
    MatCheckboxModule,
    NzAvatarModule,
    NzTagModule,
    NzIconModule,
    NzButtonModule,
    NzEmptyModule,
    NzModalModule,
    TitleCasePipe
  ],
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss'],
  providers: [
    { provide: NZ_ICONS, useValue: antIcons },
    { provide: NZ_I18N, useValue: pt_BR },
    { provide: LOCALE_ID, useValue: "pt-BR" },
    NzModalService,
  ]
})
export class ReservasComponent implements OnInit {
  @ViewChild('modalMesa') modalMesaTemplate!: TemplateRef<any>;

  dataAtual: Date = new Date();
  reservaSelecionada: Reserva | null = null;
  abaAtiva = 'Reservas';
  areaAtiva = 'Salão Principal';
  pesquisa = '';
  periodoFiltro: 'todos' | 'Almoço' | 'Jantar' = 'todos'; // Garantir que está declarada

  // Mock data (como no seu código)
  clientes: Cliente[] = [
    { id: 'c1', nome: 'Ana Silva', email: 'ana.silva@email.com', telefone: '(11) 98765-4321', avatar: 'assets/png/avatar-padrao-tavola-cordeirinho.png', historico: { proximas: 1, negadas: 0, canceladas: 0, naoCompareceu: 0, gastoMedio: 150, gastoTotal: 300 } },
    { id: 'c2', nome: 'Carlos Pereira', email: 'carlos.pereira@email.com', telefone: '(21) 91234-5678', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', historico: { proximas: 2, negadas: 1, canceladas: 0, naoCompareceu: 1, gastoMedio: 120, gastoTotal: 600 } },
    { id: 'c3', nome: 'Beatriz Costa', email: 'beatriz.costa@email.com', telefone: '(31) 95555-5555', avatar: 'https://randomuser.me/api/portraits/women/12.jpg', historico: { proximas: 0, negadas: 0, canceladas: 2, naoCompareceu: 0, gastoMedio: 90, gastoTotal: 180 } }
  ];

  reservas: Reserva[] = [
    { id: 'r1', clienteId: 'c1', mesaIds: ['m1', 'm2'], data: new Date(), horario: '12:30', periodo: 'Almoço', pessoas: 4, status: 'confirmada', duracao: '2h', comentarios: 'Mesa perto da janela, por favor.', notas: 'Aniversário da Ana.' },
    { id: 'r2', clienteId: 'c2', mesaIds: ['m5'], data: new Date(), horario: '20:00', periodo: 'Jantar', pessoas: 2, status: 'pendente', duracao: '1h30', comentarios: 'Sem cebola.', notas: '' },
  ];

  mesas: Mesa[] = [
    { id: 'm1', numero: '01', tipo: 'retangular', area: 'Salão Principal', vip: false, ocupada: false, capacidade: 4 },
    { id: 'm2', numero: '02', tipo: 'retangular', area: 'Salão Principal', vip: false, ocupada: false, capacidade: 4 },
    { id: 'm3', numero: '03', tipo: 'retangular', area: 'Salão Principal', vip: false, ocupada: false, capacidade: 2 },
    { id: 'm4', numero: 'VIP 1', tipo: 'circular', area: 'Salão Principal', vip: true, ocupada: false, capacidade: 6 },
    { id: 'm5', numero: 'A1', tipo: 'retangular', area: 'Área Externa', vip: false, ocupada: false, capacidade: 4 },
    { id: 'm6', numero: 'A2', tipo: 'retangular', area: 'Área Externa', vip: false, ocupada: false, capacidade: 4 },
    { id: 'm7', numero: 'VIP Lounge', tipo: 'circular', area: 'Área Externa', vip: true, ocupada: false, capacidade: 8 },
    { id: 'm8', numero: 'T1', tipo: 'retangular', area: 'Terraço', vip: false, ocupada: false, capacidade: 2 },
  ];
  
  areas = ['Salão Principal', 'Área Externa', 'Terraço'];
  
  reservasVisiveis: Reserva[] = [];
  reservasAlmocoVisiveis: Reserva[] = [];
  reservasJantarVisiveis: Reserva[] = [];
  
  mesaEditando: Mesa = this.criarMesaPadrao();
  
  constructor(
    private modalService: NzModalService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.aplicarFiltros();
  }

  criarMesaPadrao(): Mesa {
    return { id: '', numero: '', tipo: 'retangular', area: this.areaAtiva, vip: false, ocupada: false, capacidade: 2 };
  }

  proximoDia(): void {
    const novaData = new Date(this.dataAtual);
    novaData.setDate(novaData.getDate() + 1);
    this.dataAtual = novaData;
    this.aplicarFiltros();
  }

  diaAnterior(): void {
    const novaData = new Date(this.dataAtual);
    novaData.setDate(novaData.getDate() - 1);
    this.dataAtual = novaData;
    this.aplicarFiltros();
  }

  // CORRIGIDO: Usar as propriedades corretas e adicionar tipo ao parâmetro 'reserva'
  temReservasParaPesquisaNoPeriodo(periodo: 'Almoço' | 'Jantar'): boolean {
    if (!this.pesquisa.trim()) return false;

    const termoBusca = this.pesquisa.toLowerCase().trim();
    // Usar as listas _VISIVEIS_ que já foram filtradas por data e período geral
    const reservasDoPeriodo = periodo === 'Almoço' ? this.reservasAlmocoVisiveis : this.reservasJantarVisiveis;
    
    // Se a lista do período já está vazia, não há como ter resultado para a pesquisa
    if (reservasDoPeriodo.length === 0) return false;

    return reservasDoPeriodo.some((reserva: Reserva) => { // Adicionado tipo Reserva
      const cliente = this.getClientePorId(reserva.clienteId);
      return cliente && cliente.nome.toLowerCase().includes(termoBusca);
    });
  }

  // Este método já existe e parece correto na sua cópia.
  // Apenas garantindo que ele é chamado corretamente e que as listas que ele usa estão corretas.
  temReservasVisiveisParaPesquisaNoPeriodo(periodo: 'Almoço' | 'Jantar'): boolean {
    if (!this.pesquisa.trim()) return false; // Se não há pesquisa, não faz sentido essa verificação
    // Verifica se há itens nas listas já filtradas (por data E pesquisa) para o período
    return periodo === 'Almoço' ? this.reservasAlmocoVisiveis.length > 0 : this.reservasJantarVisiveis.length > 0;
  }


  existemReservasParaDataAtual(): boolean {
    const dataFormatada = this.dataAtual.toLocaleDateString('pt-BR');
    return this.reservas.some((reserva: Reserva) => // Adicionado tipo Reserva
      new Date(reserva.data).toLocaleDateString('pt-BR') === dataFormatada
    );
  }

  aplicarFiltros(): void {
    const dataFormatada = this.dataAtual.toLocaleDateString('pt-BR');
    
    let tempReservas = this.reservas.filter((reserva: Reserva) =>
      new Date(reserva.data).toLocaleDateString('pt-BR') === dataFormatada
    );

    if (this.pesquisa && this.pesquisa.trim() !== '') {
      const termoBusca = this.pesquisa.toLowerCase().trim();
      tempReservas = tempReservas.filter((reserva: Reserva) => { // Adicionado tipo Reserva
        const cliente = this.getClientePorId(reserva.clienteId);
        return cliente && cliente.nome.toLowerCase().includes(termoBusca);
      });
    }
    
    // Filtra por período SE um período específico (Almoço ou Jantar) estiver selecionado.
    // Se 'todos', não aplica filtro de período adicional aqui.
    if (this.periodoFiltro !== 'todos') {
        tempReservas = tempReservas.filter(r => r.periodo === this.periodoFiltro);
    }
    
    this.reservasVisiveis = [...tempReservas];
    
    // As listas por período agora são derivadas da reservasVisiveis (que já foi filtrada por data E pesquisa E períodoFiltro se aplicável)
    this.reservasAlmocoVisiveis = this.reservasVisiveis.filter(r => r.periodo === 'Almoço');
    this.reservasJantarVisiveis = this.reservasVisiveis.filter(r => r.periodo === 'Jantar');

    // Se o filtro for 'Almoço', a lista de jantar visível deve ser vazia, e vice-versa
    if (this.periodoFiltro === 'Almoço') {
        this.reservasJantarVisiveis = [];
    } else if (this.periodoFiltro === 'Jantar') {
        this.reservasAlmocoVisiveis = [];
    }


    if (this.reservaSelecionada && !this.reservasVisiveis.find(r => r.id === this.reservaSelecionada!.id)) {
        this.reservaSelecionada = null;
    }
    this.atualizarStatusMesas();
    this.cdr.detectChanges();
  }

  limparPesquisa(): void {
    this.pesquisa = '';
    this.aplicarFiltros();
  }

  abrirModalAdicionarReserva(): void {
    console.log("Abrir modal para adicionar nova reserva. Payload para backend seria:", {
      idRestaurante: "ID_RESTAURANTE_AQUI", 
      dataReserva: this.dataAtual.toISOString().split('T')[0],
    });
  }

  selecionarReserva(reserva: Reserva): void {
    this.reservaSelecionada = this.reservaSelecionada?.id === reserva.id ? null : reserva;
    if (this.reservaSelecionada && this.reservaSelecionada.mesaIds.length > 0) {
        const primeiraMesa = this.getMesaPorId(this.reservaSelecionada.mesaIds[0]);
        if (primeiraMesa) {
            this.areaAtiva = primeiraMesa.area;
        }
    }
  }

  fecharDetalhes(): void {
    this.reservaSelecionada = null;
  }

  mudarAba(event: any): void {
    this.abaAtiva = event.tab.textLabel;
    // Poderia resetar periodoFiltro ou pesquisa ao mudar de aba principal
    // this.periodoFiltro = 'todos';
    // this.pesquisa = '';
    // this.aplicarFiltros();
  }

  mudarArea(event: any): void {
    this.areaAtiva = event.tab.textLabel;
  }

  formatarData(data: Date): string {
    if (!data) return '';
    return new Date(data).toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: 'short' });
  }

  getMesasPorArea(area: string): Mesa[] {
    return this.mesas.filter(mesa => mesa.area === area);
  }

  isMesaOcupada(mesaId: string): boolean {
    return this.reservasVisiveis.some(reserva => reserva.mesaIds.includes(mesaId));
  }

  isMesaOcupadaPorOutraReserva(mesaId: string): boolean {
    if (this.reservaSelecionada && this.reservaSelecionada.mesaIds.includes(mesaId)) {
      return false;
    }
    const mesa = this.getMesaPorId(mesaId);
    return mesa?.ocupada || false;
  }

  isMesaAtribuidaAReservaAtual(mesaId: string): boolean {
    return !!this.reservaSelecionada && this.reservaSelecionada.mesaIds.includes(mesaId);
  }

  toggleMesaParaReserva(mesa: Mesa): void {
    if (!this.reservaSelecionada) {
      console.log('Nenhuma reserva selecionada para atribuir a mesa:', mesa.numero);
      return;
    }
    if (this.isMesaOcupadaPorOutraReserva(mesa.id)) {
      console.log('Mesa', mesa.numero, 'já está ocupada por outra reserva.');
      return;
    }
    const indexNaReserva = this.reservaSelecionada.mesaIds.indexOf(mesa.id);
    if (indexNaReserva > -1) {
      this.reservaSelecionada.mesaIds.splice(indexNaReserva, 1);
    } else {
      this.reservaSelecionada.mesaIds.push(mesa.id);
    }
    this.atualizarStatusMesas();
  }
  
  atualizarStatusMesas(): void {
    this.mesas.forEach(mesa => {
      const reservaAssociada = this.reservasVisiveis.find(r => r.mesaIds.includes(mesa.id));
      if (reservaAssociada) {
        mesa.ocupada = true;
        mesa.reservaId = reservaAssociada.id;
      } else {
        mesa.ocupada = false;
        mesa.reservaId = undefined;
      }
    });
  }

  getMesaPorId(id: string): Mesa | undefined {
    return this.mesas.find(mesa => mesa.id === id);
  }

  getClientePorId(id: string): Cliente | undefined {
    return this.clientes.find(cliente => cliente.id === id);
  }

  getReservaPorId(id: string | undefined): Reserva | undefined {
    if (!id) return undefined;
    return this.reservas.find(reserva => reserva.id === id);
  }
  
  getMesasFormatadas(reserva: Reserva | null): string {
    if (!reserva || !reserva.mesaIds || reserva.mesaIds.length === 0) {
      return 'N/A';
    }
    return reserva.mesaIds.map(id => this.getMesaPorId(id)?.numero).filter(Boolean).join(', ') || 'N/A';
  }

  removerMesaDaReserva(reservaId: string, mesaId: string): void {
    const reservaOriginal = this.reservas.find(r => r.id === reservaId);
    if (reservaOriginal) {
      reservaOriginal.mesaIds = reservaOriginal.mesaIds.filter(id => id !== mesaId);
      if (this.reservaSelecionada && this.reservaSelecionada.id === reservaId) {
        this.reservaSelecionada.mesaIds = [...reservaOriginal.mesaIds];
      }
      this.atualizarStatusMesas();
    }
  }

  abrirModalAdicionarMesa(mesa?: Mesa): void {
    this.mesaEditando = mesa ? { ...mesa } : this.criarMesaPadrao();
    this.modalService.create({
      nzTitle: this.mesaEditando.id ? 'Editar Mesa' : 'Adicionar Nova Mesa',
      nzContent: this.modalMesaTemplate,
      nzFooter: [
        { label: 'Cancelar', onClick: () => this.fecharModalMesa(true) },
        { label: 'Salvar', type: 'primary', onClick: () => this.salvarMesa() }
      ],
      nzOnCancel: () => this.fecharModalMesa(true)
    });
  }

  salvarMesa(): void {
    if (!this.mesaEditando.numero.trim() || !this.mesaEditando.area) {
      console.error("Número/Nome e Área da mesa são obrigatórios.");
      return;
    }
    if (this.mesaEditando.id) {
      const index = this.mesas.findIndex(m => m.id === this.mesaEditando.id);
      if (index !== -1) {
        this.mesas[index] = { ...this.mesaEditando };
      }
    } else {
      this.mesaEditando.id = `m${Date.now()}`;
      this.mesas.push({ ...this.mesaEditando });
    }
    this.atualizarStatusMesas();
    this.fecharModalMesa(true);
  }

  excluirMesa(mesaId: string): void {
    this.mesas = this.mesas.filter(m => m.id !== mesaId);
    this.reservas.forEach(reserva => {
      reserva.mesaIds = reserva.mesaIds.filter(id => id !== mesaId);
    });
    if (this.reservaSelecionada && this.reservaSelecionada.mesaIds.includes(mesaId)) {
        this.removerMesaDaReserva(this.reservaSelecionada.id, mesaId);
    }
    this.atualizarStatusMesas();
    this.fecharModalMesa(true);
  }

  fecharModalMesa(isFromModalService: boolean = false): void {
    if (isFromModalService) {
      this.modalService.closeAll();
    }
    this.mesaEditando = this.criarMesaPadrao();
  }
}