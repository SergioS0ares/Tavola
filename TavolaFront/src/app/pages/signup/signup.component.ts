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
import { LayoutPrincipalComponent } from '../layout-principal/layout-principal.component';
import { NgxMaskDirective} from 'ngx-mask';
import { ISignupForm } from '../../Interfaces/ISignupForm.interface';

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
    HttpClientModule,
    LayoutPrincipalComponent,
    NgxMaskDirective
  ],
  providers: [LoginService],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent {
  signupForm: FormGroup<ISignupForm>;
  private router = inject(Router);
  private loginService = inject(LoginService);
  private toastService = inject(ToastrService);
  private http = inject(HttpClient);

  constructor() {
    this.signupForm = new FormGroup<ISignupForm>({
      nome: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      email: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email]
      }),
      senha: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, this.validadorSenhaForte]
      }),
      passwordConfirm: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      tipo: new FormControl<'CLIENTE' | 'RESTAURANTE'>('CLIENTE', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      cep: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      estado: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      cidade: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      bairro: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      rua: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      numero: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      complemento: new FormControl<string>('', {
        nonNullable: true
      })
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
    const password = group.get('senha')?.value;
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

  mensagemCepInvalido = '';

buscarCep() {
  const cep: string = this.signupForm.value.cep ?? '';
if (!cep || cep.length !== 8) return;

  this.http.get(`https://viacep.com.br/ws/${cep}/json/`).subscribe({
    next: (res: any) => {
      if (res.erro) {
        this.mensagemCepInvalido = 'CEP não encontrado.';
        return;
      }

      this.mensagemCepInvalido = '';
      this.signupForm.patchValue({
        estado: res.uf,
        cidade: res.localidade,
        bairro: res.bairro,
        rua: res.logradouro
      });
    },
    error: () => {
      this.mensagemCepInvalido = 'Erro ao buscar CEP.';
    }
  });
}

validadorSenhaForte(control: AbstractControl): ValidationErrors | null {
  const valor = control.value;
  if (!valor) return null;

  const erros: ValidationErrors = {};

  if (valor.length < 8) {
    erros['minCaracteres'] = true;
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(valor)) {
    erros['semCaractereEspecial'] = true;
  }

  return Object.keys(erros).length ? erros : null;
}

  submit() {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    const payload = {
  nome: this.signupForm.value.nome,
  email: this.signupForm.value.email,
  senha: this.signupForm.value.senha,
  endereco: {
    cep: this.signupForm.value.cep,
    estado: this.signupForm.value.estado,
    cidade: this.signupForm.value.cidade,
    bairro: this.signupForm.value.bairro,
    rua: this.signupForm.value.rua,
    numero: this.signupForm.value.numero,
    complemento: this.signupForm.value.complemento,
  },
  tipo: this.signupForm.value.tipo // CLIENTE ou RESTAURANTE
};


   this.loginService.signup(payload).subscribe({
  next: (res) => {
    localStorage.setItem('token', res.token);
    localStorage.setItem('refreshToken', res.refreshToken);
    this.toastService.success("Cadastro realizado com sucesso!");
    this.router.navigate(['/layout', 'home']);

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
