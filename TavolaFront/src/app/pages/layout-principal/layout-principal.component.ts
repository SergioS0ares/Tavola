import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-layout-principal',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './layout-principal.component.html',
  styleUrls: ['./layout-principal.component.scss']
})
export class LayoutPrincipalComponent {
  userName = 'Usuário Exemplo';
  sidebarAberta = true;

  // 👇 injeta o Router usando inject()
  private router = inject(Router);

  toggleSidebar() {
    this.sidebarAberta = !this.sidebarAberta;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    this.router.navigate(['/login']);
  }
}
