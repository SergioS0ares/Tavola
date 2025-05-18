import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatCardModule }    from '@angular/material/card';
import { MatTabsModule }    from '@angular/material/tabs';
import { MatListModule }    from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

interface Reserva {
  nome: string;
  pessoas: number;
  mesas: string;
  horario: string;
  status: string;
  email: string;
  telefone: string;
  foto: string;
}

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [
    CommonModule,      // ngIf, ngFor
    MatCardModule,     // <mat-card>
    MatTabsModule,     // <mat-tab-group>, <mat-tab>
    MatListModule,     // <mat-list>, <mat-list-item>, mat-line
    MatDividerModule,  // <mat-divider>
  ],
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent {
  reservas: Reserva[] = [
    {
      nome: 'Wade Warren',
      pessoas: 4,
      mesas: 'B5, B6, B7',
      horario: '10:00 PM',
      status: 'Confirmed',
      email: 'jackson.graham@example.com',
      telefone: '(505) 555-0125',
      foto: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    // ...
  ];

  reservaSelecionada: Reserva | null = null;

  selecionarReserva(reserva: Reserva) {
    this.reservaSelecionada = reserva;
  }
}
