import { Component, OnInit, ViewChild, ElementRef, type AfterViewInit, HostListener, LOCALE_ID, OnDestroy } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { RestauranteService } from "../../core/services/restaurante.service"
import { MapsService } from "../../core/services/maps.service"
import { CommonModule, registerLocaleData } from "@angular/common"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { RouterLink } from "@angular/router"
// import { GoogleMapsModule } from "@angular/google-maps"
// import { GoogleMap } from "@angular/google-maps"
import localePt from "@angular/common/locales/pt"
// import { GlobalSpinnerService } from "../../../core/services/global-spinner.service"
// import { forkJoin, fromEvent, Subscription } from 'rxjs'
// import { MatTabGroup } from '@angular/material/tabs'
// import { MapMarker } from '@angular/google-maps'

// Registrar locale português
registerLocaleData(localePt)

// Angular Material
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
import { MatDialogModule } from '@angular/material/dialog';

// NG-Zorro
import { NzLayoutModule } from "ng-zorro-antd/layout"
import { NzGridModule } from "ng-zorro-antd/grid"
import { NzAvatarModule } from "ng-zorro-antd/avatar"
import { NzTagModule } from "ng-zorro-antd/tag"
import { NzTypographyModule } from "ng-zorro-antd/typography"
import { NzSpaceModule } from "ng-zorro-antd/space"
import { NzButtonModule } from "ng-zorro-antd/button"
import { NzRateModule } from "ng-zorro-antd/rate"
import { NzTabsModule } from "ng-zorro-antd/tabs"
import { NzCardModule } from "ng-zorro-antd/card"
import { NZ_ICONS } from "ng-zorro-antd/icon"
import { NzDatePickerModule } from "ng-zorro-antd/date-picker"
import { NzSelectModule as NzSelectModuleZorro } from "ng-zorro-antd/select"
import { NzFormModule } from "ng-zorro-antd/form"
import { NzModalModule, NzModalService } from "ng-zorro-antd/modal"
import { NzIconModule } from "ng-zorro-antd/icon"
import { NzDividerModule as NzDividerModuleZorro } from "ng-zorro-antd/divider"
import { NzCollapseModule } from "ng-zorro-antd/collapse"
import { NzToolTipModule } from "ng-zorro-antd/tooltip"
import { NzDrawerModule } from "ng-zorro-antd/drawer"
import { NzCalendarModule } from "ng-zorro-antd/calendar"
import { NzBadgeModule as NzBadgeModuleZorro } from "ng-zorro-antd/badge"
import { NzMessageService } from "ng-zorro-antd/message"
import { NZ_I18N, pt_BR } from "ng-zorro-antd/i18n"
import type { IconDefinition } from "@ant-design/icons-angular"
import { CarOutline, HomeOutline, EnvironmentOutline, FlagOutline, HeartOutline, HeartFill, LeftOutline, RightOutline, CalendarOutline, ClockCircleOutline, TeamOutline, CheckCircleOutline, ExclamationCircleOutline, FireFill, CopyOutline, CheckOutline } from "@ant-design/icons-angular/icons"
import { NzEmptyModule } from 'ng-zorro-antd/empty';

const icons: IconDefinition[] = [ CarOutline, HomeOutline, EnvironmentOutline, FlagOutline, HeartOutline, HeartFill, LeftOutline, RightOutline, CalendarOutline, ClockCircleOutline, TeamOutline, CheckCircleOutline, ExclamationCircleOutline, FireFill, CopyOutline, CheckOutline, ]

interface Mesa {
  id: string;
  numero: string;
  tipo: 'retangular' | 'circular';
  area: string;
  vip: boolean;
  ocupada: boolean;
  reservaId?: string; // ID da reserva associada à mesa
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
  mesaIds: string[]; // IDs das mesas associadas à reserva
  data: Date;
  horario: string;
  periodo: 'Almoço' | 'Jantar';
  pessoas: number;
  status: 'confirmada' | 'pendente' | 'cancelada';
  duracao: string;
  comentarios: string;
  notas: string;
  oferta: string;
  desconto: string;
}

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Angular Material
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
    MatDialogModule,
    // NG-Zorro
    NzLayoutModule,
    NzGridModule,
    NzAvatarModule,
    NzTagModule,
    NzIconModule,
    NzSpaceModule,
    NzButtonModule,
    NzEmptyModule,
    NzModalModule,
    NzTabsModule,
    NzCardModule,
    NzDatePickerModule,
    NzSelectModuleZorro,
    NzFormModule,
    NzDividerModuleZorro,
    NzCollapseModule,
    NzToolTipModule,
    NzDrawerModule,
    NzCalendarModule,
    NzBadgeModuleZorro,
  ],
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss'],
  providers: [
    { provide: NZ_ICONS, useValue: icons },
    { provide: NZ_I18N, useValue: pt_BR },
    { provide: LOCALE_ID, useValue: "pt-BR" },
    NzModalService,
    NzMessageService,
    RestauranteService
  ]
})
export class ReservasComponent implements OnInit {
  dataAtual: Date = new Date();
  
  reservaSelecionada: Reserva | null = null;
  mostrarDetalhes = false;
  abaAtiva = 'Reservas';
  
  periodoFiltro: 'todos' | 'Almoço' | 'Jantar' = 'todos';
  pesquisa = '';
  
  clientes: Cliente[] = [
    {
      id: '1',
      nome: 'Wade Warren',
      email: 'jackson.graham@example.com',
      telefone: '(505) 555-0125',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      historico: {
        proximas: 2,
        negadas: 10,
        canceladas: 1,
        naoCompareceu: 0,
        gastoMedio: 0,
        gastoTotal: 0
      }
    },
    {
      id: '2',
      nome: 'Jenny Wilson',
      email: 'jenny.wilson@example.com',
      telefone: '(505) 555-0132',
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
      historico: {
        proximas: 1,
        negadas: 3,
        canceladas: 2,
        naoCompareceu: 1,
        gastoMedio: 0,
        gastoTotal: 0
      }
    },
    {
      id: '3',
      nome: 'Floyd Miles',
      email: 'floyd.miles@example.com',
      telefone: '(505) 555-0175',
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
      historico: {
        proximas: 1,
        negadas: 0,
        canceladas: 0,
        naoCompareceu: 2,
        gastoMedio: 0,
        gastoTotal: 0
      }
    },
    {
      id: '4',
      nome: 'Devon Lane',
      email: 'devon.lane@example.com',
      telefone: '(505) 555-0198',
      avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
      historico: {
        proximas: 1,
        negadas: 0,
        canceladas: 0,
        naoCompareceu: 0,
        gastoMedio: 0,
        gastoTotal: 0
      }
    },
    {
      id: '5',
      nome: 'Kristin Watson',
      email: 'kristin.watson@example.com',
      telefone: '(505) 555-0145',
      avatar: 'https://randomuser.me/api/portraits/women/56.jpg',
      historico: {
        proximas: 1,
        negadas: 0,
        canceladas: 0,
        naoCompareceu: 0,
        gastoMedio: 0,
        gastoTotal: 0
      }
    }
  ];
  
  reservas: Reserva[] = [
    {
      id: '1',
      clienteId: '1',
      mesaIds: ['1', '2', '3'],
      data: new Date(),
      horario: '10:00',
      periodo: 'Almoço',
      pessoas: 4,
      status: 'confirmada',
      duracao: '3h',
      comentarios: 'Cliente frequente, prefere mesa perto da janela',
      notas: 'Alergia a frutos do mar',
      oferta: '50% OFF',
      desconto: 'Salão principal'
    },
    {
      id: '2',
      clienteId: '2',
      mesaIds: ['4', '5'],
      data: new Date(),
      horario: '12:00',
      periodo: 'Almoço',
      pessoas: 4,
      status: 'pendente',
      duracao: '2h',
      comentarios: 'Cliente frequente, prefere mesa perto da janela',
      notas: 'Alergia a frutos do mar',
      oferta: '20% OFF',
      desconto: 'Salão principal'
    },
    {
      id: '3',
      clienteId: '1',
      mesaIds: ['6', '7'],
      data: new Date(),
      horario: '15:00',
      periodo: 'Jantar',
      pessoas: 4,
      status: 'confirmada',
      duracao: '3h',
      comentarios: 'Aniversário de casamento',
      notas: 'Preparar surpresa com champagne',
      oferta: '10% OFF',
      desconto: 'Salão principal'
    },
    {
      id: '4',
      clienteId: '3',
      mesaIds: ['8', '9'],
      data: new Date(),
      horario: '16:00',
      periodo: 'Jantar',
      pessoas: 3,
      status: 'confirmada',
      duracao: '2h',
      comentarios: 'Reunião de negócios',
      notas: 'Mesa em área mais silenciosa',
      oferta: 'Sem oferta',
      desconto: 'Área externa'
    },
    {
      id: '5',
      clienteId: '4',
      mesaIds: ['10'],
      data: new Date(),
      horario: '17:00',
      periodo: 'Jantar',
      pessoas: 2,
      status: 'confirmada',
      duracao: '1h30',
      comentarios: 'Primeira visita',
      notas: 'Recomendar pratos da casa',
      oferta: 'Sem oferta',
      desconto: 'Área externa'
    },
    {
      id: '6',
      clienteId: '5',
      mesaIds: ['13'],
      data: new Date(),
      horario: '19:00',
      periodo: 'Jantar',
      pessoas: 4,
      status: 'confirmada',
      duracao: '2h30',
      comentarios: 'Celebração de aniversário',
      notas: 'Preparar sobremesa especial',
      oferta: '15% OFF',
      desconto: 'Terraço'
    }
  ];
  
  mesas: Mesa[] = [
    { id: '1', numero: '05', tipo: 'retangular', area: 'Salão Principal', vip: false, ocupada: true, reservaId: '1' },
    { id: '2', numero: '06', tipo: 'retangular', area: 'Salão Principal', vip: false, ocupada: true, reservaId: '1' },
    { id: '3', numero: '07', tipo: 'retangular', area: 'Salão Principal', vip: false, ocupada: true, reservaId: '1' },
    { id: '4', numero: '08', tipo: 'retangular', area: 'Salão Principal', vip: false, ocupada: true, reservaId: '2' },
    { id: '5', numero: '09', tipo: 'retangular', area: 'Salão Principal', vip: false, ocupada: true, reservaId: '2' },
    { id: '6', numero: '10', tipo: 'retangular', area: 'Salão Principal', vip: false, ocupada: true, reservaId: '3' },
    { id: '7', numero: '11', tipo: 'retangular', area: 'Salão Principal', vip: false, ocupada: true, reservaId: '3' },
    { id: '8', numero: '05', tipo: 'retangular', area: 'Área Externa', vip: false, ocupada: true, reservaId: '4' },
    { id: '9', numero: '06', tipo: 'retangular', area: 'Área Externa', vip: false, ocupada: true, reservaId: '4' },
    { id: '10', numero: 'VIP', tipo: 'circular', area: 'Área Externa', vip: true, ocupada: true, reservaId: '5' },
    { id: '11', numero: 'VIP', tipo: 'circular', area: 'Área Externa', vip: true, ocupada: false },
    { id: '12', numero: 'VIP', tipo: 'circular', area: 'Área Externa', vip: true, ocupada: false },
    { id: '13', numero: 'VIP', tipo: 'circular', area: 'Terraço', vip: true, ocupada: true, reservaId: '6' },
    { id: '14', numero: 'VIP', tipo: 'circular', area: 'Terraço', vip: true, ocupada: false }
  ];
  
  areas = ['Salão Principal', 'Área Externa', 'Terraço'];
  areaAtiva = 'Salão Principal';
  
  reservasVisiveis: Reserva[] = [];
  
  mesaEditando: Mesa = { id: '', numero: '', tipo: 'retangular', area: this.areas[0], vip: false, ocupada: false };
  novaMesaNumero: string = '';
  
  mesaSelecionadaParaCliente: Mesa | null = null;
  
  constructor(private modalService: NzModalService) {}
  
  ngOnInit(): void {
    this.atualizarStatusMesas();
    this.filtrarReservasPorData(this.dataAtual);
  }
  
  atualizarStatusMesas(): void {
    this.mesas.forEach((mesa: Mesa) => {
      mesa.ocupada = false;
      mesa.reservaId = undefined;
    });
    
    this.reservasVisiveis.forEach((reserva: Reserva) => {
      reserva.mesaIds.forEach((mesaId: string) => {
        const mesa = this.mesas.find((m: Mesa) => m.id === mesaId);
        if (mesa) {
          mesa.ocupada = true;
          mesa.reservaId = reserva.id;
        }
      });
    });
  }
  
  get reservasFiltradas(): Reserva[] {
    return this.reservas.filter(reserva => {
      if (this.periodoFiltro !== 'todos' && reserva.periodo !== this.periodoFiltro) {
        return false;
      }
      
      if (this.pesquisa) {
        const cliente = this.getClientePorId(reserva.clienteId);
        if (!cliente || !cliente.nome.toLowerCase().includes(this.pesquisa.toLowerCase())) {
          return false;
        }
      }
      
      return true;
    });
  }
  
  get reservasAlmoco(): Reserva[] {
    return this.reservasFiltradas.filter(r => r.periodo === 'Almoço');
  }
  
  get reservasJantar(): Reserva[] {
    return this.reservasFiltradas.filter(r => r.periodo === 'Jantar');
  }
  
  getClientePorId(id: string): Cliente | undefined {
    return this.clientes.find(cliente => cliente.id === id);
  }
  
  getReservaPorId(id: string): Reserva | undefined {
    return this.reservas.find(reserva => reserva.id === id);
  }
  
  selecionarReserva(reserva: Reserva): void {
    this.reservaSelecionada = reserva;
  }
  
  fecharDetalhes(): void {
    this.reservaSelecionada = null;
  }
  
  mudarAba(aba: string): void {
    this.abaAtiva = aba;
  }
  
  mudarArea(area: string): void {
    this.areaAtiva = area;
  }
  
  formatarData(data: Date): string {
    return data.toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' });
  }
  
  getMesasPorArea(area: string): Mesa[] {
    return this.mesas.filter(mesa => mesa.area === area);
  }
  
  isMesaOcupada(mesaId: string): boolean {
    return this.reservasVisiveis.some((reserva: Reserva) => reserva.mesaIds.includes(mesaId));
  }
  
  filtrarReservasPorData(data: Date): void {
    const dataFormatada = data.toLocaleDateString();
    this.reservasVisiveis = this.reservas.filter((reserva: Reserva) =>
      new Date(reserva.data).toLocaleDateString() === dataFormatada
    );
    if (this.reservaSelecionada && !this.reservasVisiveis.find((r: Reserva) => r.id === this.reservaSelecionada!.id)) {
        this.reservaSelecionada = null;
    }
    this.atualizarStatusMesas();
  }
  
  onDateChange(event: any): void {
    const novaData = event.value;
    if (novaData) {
      this.dataAtual = novaData;
      this.filtrarReservasPorData(this.dataAtual);
    }
  }
  
  get reservasAlmocoVisiveis(): Reserva[] {
    return this.reservasVisiveis.filter((r: Reserva) => r.periodo === 'Almoço');
  }
  
  get reservasJantarVisiveis(): Reserva[] {
    return this.reservasVisiveis.filter((r: Reserva) => r.periodo === 'Jantar');
  }
  
  getMesaPorId(id: string): Mesa | undefined {
    return this.mesas.find(mesa => mesa.id === id);
  }
  
  getMesasFormatadas(reserva: Reserva | null): string {
    if (!reserva || !reserva.mesaIds || reserva.mesaIds.length === 0) {
      return 'Não atribuída';
    }
    return reserva.mesaIds.map(id => this.getMesaPorId(id)?.numero).join(', ') || 'Não atribuída';
  }
  
  isMesaSelecionadaCliente(mesaId: string): boolean {
    return this.mesaSelecionadaParaCliente?.id === mesaId;
  }
  
  selecionarMesaParaCliente(mesa: Mesa): void {
    if (!this.reservaSelecionada) {
      this.mesaSelecionadaParaCliente = this.mesaSelecionadaParaCliente?.id === mesa.id ? null : mesa;
      console.log('Mesa selecionada no layout:', this.mesaSelecionadaParaCliente);
      return;
    }
    
    if (!this.reservaSelecionada.mesaIds.includes(mesa.id)) {
      this.reservaSelecionada.mesaIds.push(mesa.id);
      this.atualizarStatusMesas();
      console.log('Mesa', mesa.numero, 'adicionada à reserva', this.reservaSelecionada.id);
    } else {
      console.log('Mesa', mesa.numero, 'já está associada à reserva', this.reservaSelecionada.id);
    }
    
    this.mesaSelecionadaParaCliente = null;
  }
  
  removerMesaDaReserva(reservaId: string, mesaId: string): void {
    const reserva = this.reservas.find(r => r.id === reservaId);
    if (reserva) {
      reserva.mesaIds = reserva.mesaIds.filter(id => id !== mesaId);
      this.atualizarStatusMesas();
      console.log('Mesa', mesaId, 'removida da reserva', reservaId);
    }
  }
  
  adicionarMesaAReserva(reservaId: string): void {
    if (!this.novaMesaNumero) return;
    
    const reserva = this.reservas.find(r => r.id === reservaId);
    if (reserva) {
      const mesaParaAdicionar = this.mesas.find((mesa: Mesa) => mesa.numero.toLowerCase() === this.novaMesaNumero.toLowerCase());
      
      if (mesaParaAdicionar) {
        if (!reserva.mesaIds.includes(mesaParaAdicionar.id)) {
          reserva.mesaIds.push(mesaParaAdicionar.id);
          this.atualizarStatusMesas();
          console.log('Mesa', mesaParaAdicionar.numero, 'adicionada à reserva', reservaId);
          this.novaMesaNumero = '';
        } else {
          console.log('Mesa', mesaParaAdicionar.numero, 'já está associada à reserva', reservaId);
        }
      } else {
        console.log('Mesa com número/nome', this.novaMesaNumero, 'não encontrada.');
      }
    } else {
      console.log('Reserva', reservaId, 'não encontrada para adicionar mesa.');
    }
  }
  
  abrirModalAdicionarMesa(mesa?: Mesa): void {
    this.mesaEditando = mesa ? { ...mesa } : { id: '', numero: '', tipo: 'retangular', area: this.areas[0], vip: false, ocupada: false };
    console.log(mesa ? 'Abrir modal Editar Mesa' : 'Abrir modal Adicionar Nova Mesa', this.mesaEditando);
    
    setTimeout(() => {
    }, 1000);
  }
  
  salvarMesa(): void {
    if (this.mesaEditando.id) {
      const index = this.mesas.findIndex((m: Mesa) => m.id === this.mesaEditando.id);
      if (index !== -1) {
        this.mesas[index] = { ...this.mesaEditando };
        console.log('Mesa editada:', this.mesaEditando);
      }
    } else {
      const newId = Date.now().toString();
      this.mesaEditando.id = newId;
      this.mesas.push({ ...this.mesaEditando });
      console.log('Nova mesa adicionada:', this.mesaEditando);
    }
    this.atualizarStatusMesas();
    this.fecharModalMesa();
  }
  
  excluirMesa(mesaId: string): void {
    this.mesas = this.mesas.filter((m: Mesa) => m.id !== mesaId);
    this.reservas.forEach((reserva: Reserva) => {
      reserva.mesaIds = reserva.mesaIds.filter(id => id !== mesaId);
    });
    this.atualizarStatusMesas();
    console.log('Mesa excluída:', mesaId);
    this.fecharModalMesa();
  }
  
  fecharModalMesa(): void {
    this.mesaEditando = { id: '', numero: '', tipo: 'retangular', area: this.areas[0], vip: false, ocupada: false };
    console.log('Fechar modal Mesa');
  }
}