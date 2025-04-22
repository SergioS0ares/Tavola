import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { LayoutPrincipalComponent } from './pages/layout-principal/layout-principal.component';
import { AuthGuard } from './services/auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'signup',
    loadComponent: () => import('./pages/signup/signup.component').then(m => m.SignUpComponent)
  },
  {
    path: '',
    component: LayoutPrincipalComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
      { path: 'meu-restaurante', loadComponent: () => import('./pages/meu-restaurante/meu-restaurante.component').then(m => m.MeuRestauranteComponent) },
      { path: 'cadastro-cardapio', loadComponent: () => import('./pages/cadastro-cardapio/cadastro-cardapio.component').then(m => m.CadastroCardapioComponent) },
      { path: 'reserva', loadComponent: () => import('./pages/reservas/reservas.component').then(m => m.ReservasComponent) },
      { path: 'historico', loadComponent: () => import('./pages/historico-reservas/historico-reservas.component').then(m => m.HistoricoReservasComponent) },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'login' }
];
