import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from '../../core/services/auth.service';
import { AcessService } from '../../core/services/access.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-painel-garcom',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatChipsModule,
    MatBadgeModule,
    MatTooltipModule
  ],
  templateUrl: './painel-garcom.component.html',
  styleUrl: './painel-garcom.component.scss'
})
export class PainelGarcomComponent implements OnInit {
  private authService = inject(AuthService);
  private accessService = inject(AcessService);
  private router = inject(Router);
  private toastr = inject(ToastrService);

  userInfo: any = null;
  selectedTabIndex = 0;

  // Dados de exemplo para demonstração
  mesasAtivas = [
    { id: 1, numero: 5, status: 'Ocupada', tempo: '45min', pedidos: 3 },
    { id: 2, numero: 8, status: 'Livre', tempo: '', pedidos: 0 },
    { id: 3, numero: 12, status: 'Ocupada', tempo: '20min', pedidos: 1 },
    { id: 4, numero: 15, status: 'Reservada', tempo: '', pedidos: 0 }
  ];

  pedidosPendentes = [
    { id: 1, mesa: 5, item: 'Pizza Margherita', tempo: '15min', status: 'Preparando' },
    { id: 2, mesa: 12, item: 'Coca-Cola 2L', tempo: '5min', status: 'Pronto' },
    { id: 3, mesa: 5, item: 'Salada Caesar', tempo: '10min', status: 'Preparando' }
  ];

  ngOnInit() {
    this.userInfo = this.authService.perfil;
    if (!this.userInfo || this.userInfo.tipo !== 'FUNCIONARIO') {
      this.router.navigate(['/login']);
      return;
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Ocupada': return 'warn';
      case 'Livre': return 'primary';
      case 'Reservada': return 'accent';
      default: return 'primary';
    }
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'Ocupada': return 'restaurant';
      case 'Livre': return 'event_seat';
      case 'Reservada': return 'schedule';
      default: return 'help';
    }
  }

  getPedidoStatusColor(status: string): string {
    switch (status) {
      case 'Pronto': return 'primary';
      case 'Preparando': return 'warn';
      case 'Pendente': return 'accent';
      default: return 'primary';
    }
  }

  atenderMesa(mesa: any) {
    this.toastr.info(`Atendendo mesa ${mesa.numero}`);
    // Implementar lógica de atendimento
  }

  finalizarPedido(pedido: any) {
    this.toastr.success(`Pedido ${pedido.id} finalizado!`);
    // Implementar lógica de finalização
  }

  get mesasOcupadas(): number {
    return this.mesasAtivas.filter(m => m.status === 'Ocupada').length;
  }

  logout() {
    this.accessService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
        this.toastr.success('Logout realizado com sucesso!');
      },
      error: () => {
        // Mesmo se der erro no backend, limpa os dados locais
        this.authService.clearAuthData();
        this.router.navigate(['/login']);
        this.toastr.success('Logout realizado com sucesso!');
      }
    });
  }
}
