import { Component, inject } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { StickySearchService } from '../../core/services/sticky-search.service';
import { SearchBarComponent } from '../home/search-bar/search-bar.component';

@Component({
  selector: 'app-layout-principal',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MatIconModule, MatButtonModule, MatMenuModule, CommonModule, SearchBarComponent],
  
  templateUrl: './layout-principal.component.html',
  styleUrls: ['./layout-principal.component.scss']
})
export class LayoutPrincipalComponent {
  sidebarAberta = true;
  showStickySearchBar = false;
  cidade = '';
  query = '';
  citySuggestions: string[] = [];
  querySuggestions: string[] = [];
  showCityDropdown = false;
  showQueryDropdown = false;

  private router = inject(Router);
  private auth = inject(AuthService);
  private stickyService = inject(StickySearchService);

  constructor() {
    this.stickyService.sticky$.subscribe(val => {
      // Só mostra sticky search bar se rota for /home
      const isHome = this.router.url.startsWith('/home');
      this.showStickySearchBar = val && isHome;
    });
    // Atualiza ao navegar
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const isHome = this.router.url.startsWith('/home');
        if (!isHome) this.showStickySearchBar = false;
      }
    });
  }

  get userName(): string {
    return this.auth.perfil?.nome || 'Usuário';
  }

  get userType(): string {
    return this.auth.perfil?.tipo === 'RESTAURANTE' ? 'Restaurante' : 'Cliente';
  }

  get userAvatar(): string {
    if (this.auth.perfil?.tipo === 'RESTAURANTE') {
      return 'assets/png/avatar-padrao-restaurante-tavola.png';
    }
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

  onSearch() {}
  onCityInput(event: any) {}
  selectCity(city: string) {}
  selectQuery(query: string) {}
  onCityBlur(event: FocusEvent) {}

  get stickySearchBarClass() {
    return {
      'toolbar-search-bar': true,
      'sidebar-fechada': !this.sidebarAberta
    };
  }
}
