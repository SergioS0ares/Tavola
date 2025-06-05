import { Component, inject } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../default-login-layout/default-login-layout.component';
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
import { AuthService } from '../../core/services/auth.service';

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
  providers: [],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent {
  selectedTabIndex = 0;
  tiposCozinha = [
    'Italiana', 'Brasileira', 'Japonesa', 'Hamburgueria', 'Chinesa', 'Mexicana', 'Árabe', 'Francesa', 'Indiana', 'Outros'
  ];
  diasSemana = [
    { value: 'DOMINGO', label: 'Domingo' },
    { value: 'SEGUNDA', label: 'Segunda-feira' },
    { value: 'TERCA', label: 'Terça-feira' },
    { value: 'QUARTA', label: 'Quarta-feira' },
    { value: 'QUINTA', label: 'Quinta-feira' },
    { value: 'SEXTA', label: 'Sexta-feira' },
    { value: 'SABADO', label: 'Sábado' }
  ];

  // Formulário Cliente (igual ao atual)
  clienteForm: FormGroup<ISignupForm>;

  // Formulário Restaurante
  restauranteForm: FormGroup;

  private router = inject(Router);
  private loginService = inject(LoginService);
  private toastService = inject(ToastrService);
  private http = inject(HttpClient);
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

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
      horariosFuncionamento: this.fb.array([])
    }, { validators: this.passwordMatchValidatorRestaurante });
  }

  // Getter para FormArray de horários
  get horariosFuncionamento() {
    return this.restauranteForm.get('horariosFuncionamento') as FormArray;
  }

  // Getter para o formGroup de endereço do restaurante
  get enderecoFormGroup(): FormGroup {
    return this.restauranteForm.get('endereco') as FormGroup;
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

  // Substituir buscarCep e buscarCepRestaurante por uma função única
  buscarCepGenerico(formGroup: FormGroup, mensagemProperty: 'mensagemCepInvalido' | 'mensagemCepInvalidoRestaurante') {
    const cep = formGroup.get('cep')?.value || formGroup.get('endereco.cep')?.value || '';
    const mensagemKey = mensagemProperty;
    if (!cep || cep.replace(/\D/g, '').length !== 8) return;
    this.http.get(`https://viacep.com.br/ws/${cep.replace(/\D/g, '')}/json/`).subscribe({
      next: (res: any) => {
        if (res.erro) {
          this[mensagemKey] = 'CEP não encontrado.';
          return;
        }
        this[mensagemKey] = '';
        // Atualiza os campos do form
        if (formGroup.get('cep')) {
          formGroup.patchValue({
            estado: res.uf,
            cidade: res.localidade,
            bairro: res.bairro,
            rua: res.logradouro
          });
        } else if (formGroup.get('endereco.cep')) {
          formGroup.patchValue({
            endereco: {
              estado: res.uf,
              cidade: res.localidade,
              bairro: res.bairro,
              rua: res.logradouro
            }
          });
        }
      },
      error: () => {
        this[mensagemKey] = 'Erro ao buscar CEP.';
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
        // Centraliza o armazenamento no AuthService
        this.authService.setAuthData(res.token, res.name, res.tipoUsuario as 'CLIENTE' | 'RESTAURANTE');
        
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
      .map((h: any) => ({
        diaSemana: h.diaSemana,
        abertura: h.abertura,
        fechamento: h.fechamento
      }));
    const payload = {
      nome: form.nomeCompleto,
      email: form.email,
      senha: form.senha,
      tipo: 'RESTAURANTE',
      tipoCozinha: form.tipoCozinha,
      quantidadeMesas: form.quantidadeMesas,
      telefone: form.telefone,
      descricao: form.descricao,
      endereco: {
        cep: form.endereco.cep,
        pais: 'Brasil',
        estado: form.endereco.estado,
        cidade: form.endereco.cidade,
        bairro: form.endereco.bairro,
        rua: form.endereco.rua,
        numero: form.endereco.numero,
        complemento: form.endereco.complemento
      },
      horarioFuncionamento: horariosFuncionamento
    };
    this.loginService.signup(payload).subscribe({
      next: (res) => {
        // Centraliza o armazenamento no AuthService
        this.authService.setAuthData(res.token, res.name, res.tipoUsuario as 'CLIENTE' | 'RESTAURANTE');

        this.toastService.success("Cadastro realizado com sucesso!");
        this.router.navigate(['reserva']); // Ou para onde o restaurante deve ir
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

  addHorario() {
    this.horariosFuncionamento.push(this.fb.group({
      diaSemana: ['', Validators.required],
      abertura: ['', Validators.required],
      fechamento: ['', Validators.required]
    }));
  }

  removeHorario(index: number) {
    this.horariosFuncionamento.removeAt(index);
  }

  // Validação para habilitar/desabilitar botão de submit
  isCurrentFormValid(): boolean {
    return this.selectedTabIndex === 0 ? this.clienteForm.valid : this.restauranteForm.valid;
  }

  navigate() {
    this.router.navigate([""]);
  }
}
