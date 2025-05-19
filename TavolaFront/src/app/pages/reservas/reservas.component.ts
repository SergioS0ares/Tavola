import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

// NG-Zorro
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

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
  mesa: string;
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
    // NG-Zorro
    NzLayoutModule,
    NzGridModule,
    NzAvatarModule,
    NzTagModule,
    NzButtonModule,
    NzIconModule,
    NzDrawerModule,
    NzEmptyModule
  ],
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {
  // Data atual
  dataAtual: Date = new Date();
  
  // Controle de visualização
  reservaSelecionadaId: string | null = null;
  mostrarDetalhes = false;
  abaAtiva = 'reservas';
  
  // Filtros
  periodoFiltro: 'todos' | 'Almoço' | 'Jantar' = 'todos';
  pesquisa = '';
  
  // Dados
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
      mesa: '05, 06, 07',
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
      mesa: '08, 09',
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
      mesa: '10, 11',
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
      mesa: '05, 06',
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
      mesa: 'VIP',
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
      mesa: 'VIP',
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
  
  constructor() {}
  
  ngOnInit(): void {
    // Associar mesas às reservas
    this.atualizarStatusMesas();
  }
  
  // Atualizar status das mesas
  atualizarStatusMesas(): void {
    // Resetar status
    this.mesas.forEach(mesa => {
      mesa.ocupada = false;
      mesa.reservaId = undefined;
    });
    
    // Atualizar com reservas
    this.reservas.forEach(reserva => {
      reserva.mesaIds.forEach(mesaId => {
        const mesa = this.mesas.find(m => m.id === mesaId);
        if (mesa) {
          mesa.ocupada = true;
          mesa.reservaId = reserva.id;
        }
      });
    });
  }
  
  // Métodos para filtrar reservas
  get reservasFiltradas(): Reserva[] {
    return this.reservas.filter(reserva => {
      // Filtro por período
      if (this.periodoFiltro !== 'todos' && reserva.periodo !== this.periodoFiltro) {
        return false;
      }
      
      // Filtro por pesquisa
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
  
  // Métodos para obter dados
  getClientePorId(id: string): Cliente | undefined {
    return this.clientes.find(cliente => cliente.id === id);
  }
  
  getReservaPorId(id: string): Reserva | undefined {
    return this.reservas.find(reserva => reserva.id === id);
  }
  
  // Métodos para interação
  selecionarReserva(id: string): void {
    this.reservaSelecionadaId = id;
    this.mostrarDetalhes = true;
  }
  
  selecionarMesa(mesa: Mesa): void {
    if (mesa.reservaId) {
      this.reservaSelecionadaId = mesa.reservaId;
      this.mostrarDetalhes = true;
    }
  }
  
  fecharDetalhes(): void {
    this.mostrarDetalhes = false;
    this.reservaSelecionadaId = null;
  }
  
  mudarAba(aba: string): void {
    this.abaAtiva = aba;
  }
  
  mudarArea(area: string): void {
    this.areaAtiva = area;
  }
  
  // Formatação de data
  formatarData(data: Date): string {
    return data.toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' });
  }
  
  // Obter mesas por área
  getMesasPorArea(area: string): Mesa[] {
    return this.mesas.filter(mesa => mesa.area === area);
  }
  
  // Verificar se uma mesa está ocupada
  isMesaOcupada(mesaId: string): boolean {
    const mesa = this.mesas.find(m => m.id === mesaId);
    return mesa ? mesa.ocupada : false;
  }
}