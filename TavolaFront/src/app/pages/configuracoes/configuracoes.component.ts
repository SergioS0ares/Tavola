import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-configuracoes',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.scss']
})
export class ConfiguracoesComponent {
  private auth = inject(AuthService);

  get isRestaurante(): boolean {
    return this.auth.hasRole('RESTAURANTE');
  }

  get userName(): string {
    return this.auth.perfil?.nome || '';
  }

  get userType(): string {
    return this.auth.perfil?.tipo || '';
  }

  get userAvatar(): string {
    if (this.auth.perfil?.tipo === 'RESTAURANTE') {
      return 'assets/png/avatar-padrao-restaurante-tavola.png';
    }
    return 'assets/png/avatar-padrao-tavola-cordeirinho.png';
  }
}
