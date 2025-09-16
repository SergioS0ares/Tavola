import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AcessService } from '../../../core/services/access.service';
import { DefaultLoginLayoutComponent } from '../default-login-layout/default-login-layout.component';

// Imports do Angular Material e NG-Zorro (similares ao seu login)
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

// Validador customizado para verificar se as senhas são iguais
export function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const newPassword = control.get('novaSenha')?.value;
  const confirmPassword = control.get('confirmarSenha')?.value;
  return newPassword === confirmPassword ? null : { mismatch: true };
}

@Component({
  selector: 'app-redefinir-senha',
  standalone: true,
  imports: [
    CommonModule,
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NzIconModule
  ],
  templateUrl: './redefinir-senha.component.html',
  styleUrls: ['./redefinir-senha.component.scss']
})
export class RedefinirSenhaComponent implements OnInit {
  resetForm: FormGroup;
  token: string | null = null;
  
  isLoading = true; // Começa carregando para validar o token
  isTokenValid = false; // Controla se o formulário deve ser exibido
  errorMessage: string | null = null;
  hidePassword = true;
  hideConfirmPassword = true;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private accessService = inject(AcessService);
  private toastService = inject(ToastrService);
  private fb = inject(FormBuilder);

  constructor() {
    this.resetForm = this.fb.group({
      novaSenha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', [Validators.required]]
    }, { validators: passwordMatchValidator });
  }

  ngOnInit(): void {
    // 1. Captura o token da URL
    this.token = this.route.snapshot.paramMap.get('token');

    if (!this.token) {
      this.handleInvalidToken("Token de redefinição não encontrado na URL.");
      return;
    }

    // 2. Envia o token para validação no backend
    this.accessService.validarTokenRedefinicao(this.token).subscribe({
      next: (response) => {
        if (response.valid) {
          this.isTokenValid = true;
          this.isLoading = false;
        } else {
          this.handleInvalidToken("Este link para redefinição de senha é inválido ou expirou.");
        }
      },
      error: () => {
        this.handleInvalidToken("Ocorreu um erro ao validar seu link. Por favor, tente novamente.");
      }
    });
  }

  private handleInvalidToken(message: string): void {
    this.errorMessage = message;
    this.isTokenValid = false;
    this.isLoading = false;
    this.toastService.error(message, "Acesso Negado");
    // Opcional: redirecionar para o login após alguns segundos
    setTimeout(() => this.router.navigate(['/login']), 5000);
  }

  onSubmit(): void {
    if (this.resetForm.invalid || !this.token) {
      this.resetForm.markAllAsTouched();
      return;
    }

    const novaSenha = this.resetForm.get('novaSenha')?.value;
    
    this.accessService.redefinirSenha(this.token, novaSenha).subscribe({
      next: () => {
        this.toastService.success("Sua senha foi redefinida com sucesso!", "Sucesso!");
        this.router.navigate(['/login']);
      },
      error: (err) => {
        const errorMessage = err.error?.message || "Não foi possível redefinir sua senha. Tente solicitar um novo link.";
        this.toastService.error(errorMessage, "Erro");
      }
    });
  }
}
