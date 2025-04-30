import { Component, inject } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../core/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClient, provideHttpClient } from '@angular/common/http';
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
    MatTabsModule,
    MatCheckboxModule,
    LayoutPrincipalComponent,
    NgxMaskDirective
  ],
  providers: [LoginService],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent {
  selectedTabIndex = 0;
  tiposCozinha = [
    'Italiana', 'Brasileira', 'Japonesa', 'Hamburgueria', 'Chinesa', 'Mexicana', 'Árabe', 'Francesa', 'Indiana', 'Outros'
  ];
  diasSemana = ['DOM','SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];

  // Formulário Cliente (igual ao atual)
  clienteForm: FormGroup<ISignupForm>;

  // Formulário Restaurante
  restauranteForm: FormGroup;

  private router = inject(Router);
  private loginService = inject(LoginService);
  private toastService = inject(ToastrService);
  private http = inject(HttpClient);
  private fb = inject(FormBuilder);

  mensagemCepInvalido = '';
  mensagemCepInvalidoRestaurante = '';

  constructor() {
    // Cliente
    this.clienteForm = new FormGroup<ISignupForm>({
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

    // Restaurante
    this.restauranteForm = this.fb.group({
      nomeCompleto: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, this.validadorSenhaForte]],
      passwordConfirm: ['', Validators.required],
      endereco: this.fb.group({
        cep: ['', Validators.required],
        estado: ['', Validators.required],
        cidade: ['', Validators.required],
        bairro: ['', Validators.required],
        rua: ['', Validators.required],
        numero: ['', Validators.required],
        complemento: ['']
      }),
      tipoCozinha: ['', Validators.required],
      telefone: ['', Validators.required],
      descricao: ['', [Validators.required, Validators.maxLength(500)]],
      quantidadeMesas: [1, [Validators.required, Validators.min(1)]],
      horariosFuncionamento: this.fb.array(this.diasSemana.map(() => this.fb.group({
        ativo: [false],
        abertura: [''],
        fechamento: ['']
      })))
    }, { validators: this.passwordMatchValidatorRestaurante });

    // Adicionar listener para mudanças nos checkboxes
    this.horariosFuncionamento.controls.forEach(control => {
      control.get('ativo')?.valueChanges.subscribe(() => {
        this.validateHorarios();
      });
    });
  }

  // Getter para FormArray de horários
  get horariosFuncionamento() {
    return this.restauranteForm.get('horariosFuncionamento') as FormArray;
  }

  // Validação de senha forte (igual ao atual)
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

  // Validação de confirmação de senha (cliente)
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

  // Validação de confirmação de senha (restaurante)
  passwordMatchValidatorRestaurante(group: AbstractControl): ValidationErrors | null {
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

  // Busca CEP para Cliente
  buscarCep() {
    const cep: string = this.clienteForm.value.cep ?? '';
    if (!cep || cep.length !== 8) return;
    this.http.get(`https://viacep.com.br/ws/${cep}/json/`).subscribe({
      next: (res: any) => {
        if (res.erro) {
          this.mensagemCepInvalido = 'CEP não encontrado.';
          return;
        }
        this.mensagemCepInvalido = '';
        this.clienteForm.patchValue({
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

  // Busca CEP para Restaurante
  buscarCepRestaurante() {
    const cep: string = this.restauranteForm.get('endereco.cep')?.value ?? '';
    if (!cep || cep.length !== 8) return;
    this.http.get(`https://viacep.com.br/ws/${cep}/json/`).subscribe({
      next: (res: any) => {
        if (res.erro) {
          this.mensagemCepInvalidoRestaurante = 'CEP não encontrado.';
          return;
        }
        this.mensagemCepInvalidoRestaurante = '';
        this.restauranteForm.patchValue({
          endereco: {
            estado: res.uf,
            cidade: res.localidade,
            bairro: res.bairro,
            rua: res.logradouro
          }
        });
      },
      error: () => {
        this.mensagemCepInvalidoRestaurante = 'Erro ao buscar CEP.';
      }
    });
  }

  // Submit Cliente
  submitCliente() {
    if (this.clienteForm.invalid) {
      this.clienteForm.markAllAsTouched();
      return;
    }
    const payload = {
      nome: this.clienteForm.value.nome,
      email: this.clienteForm.value.email,
      senha: this.clienteForm.value.senha,
      endereco: {
        cep: this.clienteForm.value.cep,
        estado: this.clienteForm.value.estado,
        cidade: this.clienteForm.value.cidade,
        bairro: this.clienteForm.value.bairro,
        rua: this.clienteForm.value.rua,
        numero: this.clienteForm.value.numero,
        complemento: this.clienteForm.value.complemento,
      },
      tipo: 'CLIENTE'
    };
    this.loginService.signup(payload).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('refreshToken', res.refreshToken);
        localStorage.setItem('userName', res.name);
        localStorage.setItem('tipoUsuario', res.tipoUsuario);
        this.toastService.success("Cadastro realizado com sucesso!");
        this.router.navigate(['home']);
      },
      error: (err: any) => {
        const errorMessage = err.error?.message || "Erro inesperado! Tente novamente mais tarde";
        this.toastService.error(errorMessage);
      }
    });
  }

  // Submit Restaurante
  submitRestaurante() {
    if (this.restauranteForm.invalid) {
      this.restauranteForm.markAllAsTouched();
      return;
    }
    const form = this.restauranteForm.value;
    const horariosFuncionamento = form.horariosFuncionamento
      .map((h: any, idx: number) => h.ativo ? {
        diaSemana: this.diasSemana[idx],
        abertura: h.abertura,
        fechamento: h.fechamento
      } : null)
      .filter((h: any) => h !== null);
    const payload = {
      nomeCompleto: form.nomeCompleto,
      email: form.email,
      senha: form.senha,
      endereco: form.endereco,
      tipo: 'RESTAURANTE',
      tipoCozinha: form.tipoCozinha,
      quantidadeMesas: form.quantidadeMesas,
      horariosFuncionamento,
      telefone: form.telefone,
      descricao: form.descricao
    };
    this.loginService.signup(payload).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('refreshToken', res.refreshToken);
        localStorage.setItem('userName', res.name);
        localStorage.setItem('tipoUsuario', res.tipoUsuario);
        this.toastService.success("Cadastro realizado com sucesso!");
        this.router.navigate(['reserva']);
      },
      error: (err: any) => {
        const errorMessage = err.error?.message || "Erro inesperado! Tente novamente mais tarde";
        this.toastService.error(errorMessage);
      }
    });
  }

  // Submit baseado na tab atual
  submitForm() {
    if (this.selectedTabIndex === 0) {
      this.submitCliente();
    } else {
      this.submitRestaurante();
    }
  }

  // Validação dos horários quando o checkbox está ativo
  private validateHorarios() {
    const horarios = this.horariosFuncionamento.controls;
    horarios.forEach(horario => {
      const ativo = horario.get('ativo');
      const abertura = horario.get('abertura');
      const fechamento = horario.get('fechamento');

      if (ativo?.value) {
        abertura?.setValidators([Validators.required]);
        fechamento?.setValidators([Validators.required]);
      } else {
        abertura?.clearValidators();
        fechamento?.clearValidators();
      }
      
      abertura?.updateValueAndValidity();
      fechamento?.updateValueAndValidity();
    });
  }

  // Validação para habilitar/desabilitar botão de submit
  isCurrentFormValid(): boolean {
    return this.selectedTabIndex === 0 ? this.clienteForm.valid : this.restauranteForm.valid;
  }

  navigate() {
    this.router.navigate([""]);
  }
}
