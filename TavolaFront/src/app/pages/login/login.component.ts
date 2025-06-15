import { Component, inject } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../core/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ILoginForm } from '../../Interfaces/ILoginForm.interface';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup<ILoginForm>;
  showForgotInfo = false;
  showLoginError = false;

  // Nova forma de injeção no Angular 19
  private router = inject(Router);
  private loginService = inject(LoginService);
  private toastService = inject(ToastrService);
  private authService = inject(AuthService);

  constructor() {
    this.loginForm = new FormGroup<ILoginForm>({
      email: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email]
      }),
      senha: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required]
      })
    });
  }
  emailWithTLDValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;
    // Regex para verificar se o e-mail termina com um TLD válido
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (value && !regex.test(value)) {
      return { emailTLD: true };
    }
    return null;
  }

  submit(){
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const email = this.loginForm.get('email')?.value;
    const senha = this.loginForm.get('senha')?.value;

    if (email && senha) {
      this.loginService.login(email, senha).subscribe({
        next: (res) => {
          this.showLoginError = false;
          // Centraliza o armazenamento no AuthService
         
          
          this.toastService.success("Login feito com sucesso!");
          
          if (res.tipoUsuario === 'RESTAURANTE') {
            this.authService.setAuthData(res.token, res.nome, res.tipoUsuario as 'CLIENTE' | 'RESTAURANTE', res.id, res.imagem);
            this.router.navigate(['reserva']);
          } else {
            this.router.navigate(['home']);
          }
        },
        error: (err) => {
          this.showLoginError = true;
          const errorMessage = err.error?.message || "Não foi possível acessar sua conta. Verifique seu e-mail e senha e tente novamente.";
          this.toastService.error(errorMessage);
        }
      });
    } else {
      this.showLoginError = true;
      this.toastService.error("Email ou senha inválidos.");
    }
  }

  navigate(){
    this.router.navigate(["signup"]);
  }

  forgotPassword(){
    this.showForgotInfo = true;
    this.toastService.info("Funcionalidade de recuperação de senha ainda não implementada.");
  }
}
