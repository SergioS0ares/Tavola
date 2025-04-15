import { Component, inject } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface SignupForm {
  name: FormControl;
  email: FormControl;
  password: FormControl;
  passwordConfirm: FormControl;
  tipo: FormControl;
  CEP: FormControl;
  estado: FormControl;
  cidade: FormControl;
  bairro: FormControl;
  rua: FormControl;
  numero: FormControl;
  complemento: FormControl;
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    MatRadioModule,
    HttpClientModule
  ],
  providers: [LoginService],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent {
  signupForm: FormGroup<SignupForm>;
  private router = inject(Router);
  private loginService = inject(LoginService);
  private toastService = inject(ToastrService);
  private http = inject(HttpClient);

  constructor() {
    this.signupForm = new FormGroup<SignupForm>({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), this.onlyLettersValidator]),
      email: new FormControl('', [Validators.required, Validators.email, this.emailWithTLDValidator]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      tipo: new FormControl('CLIENTE', Validators.required),
      CEP: new FormControl(''),
      estado: new FormControl(''),
      cidade: new FormControl(''),
      bairro: new FormControl(''),
      rua: new FormControl(''),
      numero: new FormControl(''),
      complemento: new FormControl('')
    }, { validators: this.passwordMatchValidator });
  }

  onlyLettersValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;
    return value && !/^[A-Za-zÀ-ÿ\s]+$/.test(value) ? { onlyLetters: true } : null;
  }

  emailWithTLDValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;
    return value && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value) ? { emailTLD: true } : null;
  }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const passwordConfirm = group.get('passwordConfirm');
    if (password !== passwordConfirm?.value) {
      passwordConfirm?.setErrors({ passwordMismatch: true });
    } else {
      const errors = { ...passwordConfirm?.errors };
      delete errors['passwordMismatch'];
      passwordConfirm?.setErrors(Object.keys(errors).length ? errors : null);
    }
    return null;
  }

  buscarCep() {
    const cep = this.signupForm.get('CEP')?.value;
    if (!cep || cep.length !== 8) return;

    this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/`).subscribe({
      next: data => {
        this.signupForm.patchValue({
          estado: data.uf,
          cidade: data.localidade,
          bairro: data.bairro,
          rua: data.logradouro,
        });
      },
      error: () => {
        this.toastService.error('CEP inválido ou não encontrado.');
      }
    });
  }

  submit() {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    const { name, email, password, tipo, estado, cidade, bairro, rua, numero, complemento } = this.signupForm.value;
    const endereco = { estado, cidade, bairro, rua, numero, complemento };

    const payload = {
      nome: name,
      email,
      senha: password,
      endereco,
      tipo
    };

    this.loginService.signup(payload).subscribe({
      next: () => {
        this.toastService.success("Cadastro realizado com sucesso!");
        this.router.navigate([""]);
      },
      error: (err: any) => {
        const errorMessage = err.error?.message || "Erro inesperado! Tente novamente mais tarde";
        this.toastService.error(errorMessage);
      }
    });
  }

  navigate() {
    this.router.navigate([""]);
  }
}
