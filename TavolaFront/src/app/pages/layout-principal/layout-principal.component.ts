import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout-principal',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MatIconModule, MatButtonModule, MatMenuModule, CommonModule],
  
  templateUrl: './layout-principal.component.html',
  styleUrls: ['./layout-principal.component.scss']
})
export class LayoutPrincipalComponent {
  sidebarAberta = true;

  private router = inject(Router);
  private auth = inject(AuthService);

  get userName(): string {
    return this.auth.perfil?.nome || 'Usuário';
  }

  get userType(): string {
    return this.auth.perfil?.tipo === 'RESTAURANTE' ? 'Restaurante' : 'Cliente';
  }

  get userAvatar(): string {
    // Por enquanto retorna o avatar padrão
    return 'assets/png/avatar-padrao-tavola-cordeirinho.png';
  }

  get isCliente(): boolean {
    return this.auth.hasRole('CLIENTE');
  }

  get isRestaurante(): boolean {
    return this.auth.hasRole('RESTAURANTE');
  }

  handleSidebarClick(event: MouseEvent) {
    // Só abre a sidebar se clicar diretamente nela, não nos botões
    if ((event.target as HTMLElement).closest('button')) {
      return;
    }
    if (!this.sidebarAberta) {
      this.sidebarAberta = true;
    }
  }

  toggleSidebar() {
    this.sidebarAberta = !this.sidebarAberta;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('tipoUsuario');
    localStorage.removeItem('userName');
    this.router.navigate(['/login']);
  }
}
