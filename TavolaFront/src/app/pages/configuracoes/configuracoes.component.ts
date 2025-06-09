import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask';
import { HttpClient } from '@angular/common/http';
import { GlobalSpinnerComponent } from '../../spin/global-spinner/global-spinner.component';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';

// NG-Zorro
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzMessageModule } from 'ng-zorro-antd/message';

import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { IUserData, IEndereco, IHoraFuncionamento } from '../../Interfaces/IUserData.interface';
import { IRestaurante } from '../../Interfaces/IRestaurante.interface';
import { RestauranteService, IUpdateRestaurantePayload } from '../../core/services/restaurante.service';
import { ClienteService, IUpdateClientePayload } from '../../core/services/cliente.service';

@Component({
  selector: 'app-configuracoes',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GlobalSpinnerComponent,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    NzUploadModule,
    NzMessageModule,
    NgxMaskDirective
  ],
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.scss']
})
export class ConfiguracoesComponent implements OnInit {
  private auth = inject(AuthService);
  private fb = inject(FormBuilder);
  private toastr = inject(ToastrService);
  private restauranteService = inject(RestauranteService);
  private clienteService = inject(ClienteService);
  private router = inject(Router);
  private http = inject(HttpClient);

  // Estados de edição
  editingInfo = false;
  editingAddress = false;
  editingRestaurant = false;

  // **CORREÇÃO 1: Propriedades re-declaradas**
  showInfoMessage = false;
  showAddressMessage = false;
  showRestaurantMessage = false;

  previewImage: string | null = null;
  
  infoForm!: FormGroup;
  addressForm!: FormGroup;
  restaurantForm!: FormGroup;

  loading = false;
  mensagemCepInvalido: string = '';

  userData!: IUserData;

  ngOnInit() {
    this.loading = true;
    const userRole = this.auth.perfil?.tipo;

    if (userRole === 'RESTAURANTE') {
      const idRestaurante = this.auth.perfil?.id;
      if (idRestaurante) {
        this.restauranteService.findById(idRestaurante).subscribe({
          next: (data) => this.handleUserData(data, 'RESTAURANTE'),
          error: (err) => this.handleError(err, 'restaurante')
        });
      } else {
        this.toastr.error('ID do restaurante não encontrado. Faça login novamente.');
        this.loading = false;
      }
    } else if (userRole === 'CLIENTE') {
      this.clienteService.getCliente().subscribe({
        next: (data) => this.handleUserData(data, 'CLIENTE'),
        error: (err) => this.handleError(err, 'cliente')
      });
    }
  }

  private handleUserData(data: IUserData | IRestaurante, tipo: 'CLIENTE' | 'RESTAURANTE') {
    if (tipo === 'RESTAURANTE') {
      const restData = data as IRestaurante;
      this.userData = {
        nome: restData.nome,
        email: restData.email,
        telefone: restData.telefone,
        endereco: { ...restData.endereco, cep: restData.endereco?.cep || '', pais: 'Brasil' },
        tipo: 'RESTAURANTE',
        senha: '',
        tipoCozinha: restData.tipoCozinha,
        horaFuncionamento: restData.horariosFuncionamento,
        descricao: restData.descricao,
        servicos: restData.servicos,
        imagens: restData.imagens
      };
    } else {
      // **CORREÇÃO 2: Adicionadas propriedades 'senha' e 'tipo' para conformidade com a interface IUserData**
      this.userData = { 
        ...data, 
        endereco: { ...(data.endereco || {}), pais: 'Brasil' },
        senha: '', // A API de cliente não retorna senha, então inicializamos como vazia.
        tipo: 'CLIENTE' // O tipo é 'CLIENTE' neste bloco.
      };
    }
    this.initForms();
    this.loading = false;
  }

  private handleError(error: any, context: string) {
    console.error(`Erro ao carregar dados do ${context}:`, error);
    this.toastr.error(`Erro ao carregar dados do ${context}`);
    this.loading = false;
  }

  // O restante do arquivo permanece igual ao que eu enviei anteriormente...
  initForms() {
    this.infoForm = this.fb.group({
      nome: [this.userData.nome, Validators.required],
      email: [this.userData.email, [Validators.required, Validators.email]],
      telefone: [this.userData.telefone, Validators.required],
      senha: ['', this.validadorSenhaForte]
    });

    this.addressForm = this.fb.group({
      cep: [this.userData.endereco?.cep || '', Validators.required],
      pais: [this.userData.endereco?.pais || 'Brasil', Validators.required],
      estado: [this.userData.endereco?.estado || '', Validators.required],
      cidade: [this.userData.endereco?.cidade || '', Validators.required],
      bairro: [this.userData.endereco?.bairro || '', Validators.required],
      rua: [this.userData.endereco?.rua || '', Validators.required],
      numero: [this.userData.endereco?.numero || '', Validators.required],
      complemento: [this.userData.endereco?.complemento || '']
    });

    if (this.isRestaurante) {
      this.restaurantForm = this.fb.group({
        nome: [this.userData.nome],
        tipoCozinha: [this.userData.tipoCozinha],
        quantidadeMesas: [this.userData.quantidadeMesas],
        horaFuncionamento: this.fb.array(
          this.userData.horaFuncionamento?.map(h => this.criarGrupoHorario(h)) || []
        )
      });
    }
  }
  
  saveInfo() {
    if (this.infoForm.invalid) {
      this.toastr.error('Por favor, preencha os campos de informação corretamente.');
      return;
    }
    this.loading = true;

    if (this.isRestaurante) {
      this.saveRestaurant();
      return;
    }

    const payload: IUpdateClientePayload = {
      nome: this.infoForm.value.nome,
      email: this.infoForm.value.email,
      telefone: this.infoForm.value.telefone,
      senha: this.infoForm.value.senha,
      endereco: this.userData.endereco,
      imagemPerfilBase64: this.previewImage || null,
      imagemBackgroundBase64: null,
    };

    this.clienteService.updateCliente(payload).subscribe({
      next: () => {
        this.toastr.success('Informações atualizadas com sucesso!');
        this.userData = { ...this.userData, ...this.infoForm.getRawValue() };
        this.editingInfo = false;
        this.loading = false;
      },
      error: (err) => this.handleError(err, 'salvar informações')
    });
  }

  saveAddress() {
    if (this.addressForm.invalid) {
      this.toastr.error('Por favor, preencha os campos de endereço corretamente.');
      return;
    }
    this.loading = true;

    if (this.isRestaurante) {
      this.saveRestaurant();
      return;
    }

    const payload: IUpdateClientePayload = {
      nome: this.userData.nome,
      email: this.userData.email,
      telefone: this.userData.telefone,
      senha: this.infoForm.value.senha,
      endereco: this.addressForm.value,
      imagemPerfilBase64: this.previewImage || null,
      imagemBackgroundBase64: null,
    };

    this.clienteService.updateCliente(payload).subscribe({
      next: () => {
        this.toastr.success('Endereço atualizado com sucesso!');
        this.userData.endereco = this.addressForm.value;
        this.editingAddress = false;
        this.loading = false;
      },
      error: (err) => this.handleError(err, 'salvar endereço')
    });
  }

  saveRestaurant() {
    if (this.infoForm.invalid || this.addressForm.invalid || this.restaurantForm.invalid) {
      this.toastr.error('Por favor, preencha todos os campos corretamente antes de salvar.');
      return;
    }
    this.loading = true;
    
    const payload = this.montarPayloadRestaurante();

    this.restauranteService.updateRestaurante(payload).subscribe({
      next: () => {
        this.toastr.success('Dados do restaurante atualizados com sucesso!');
        this.userData.nome = this.infoForm.value.nome;
        this.userData.email = this.infoForm.value.email;
        this.userData.telefone = this.infoForm.value.telefone;
        this.userData.endereco = this.addressForm.value;
        this.userData.tipoCozinha = this.restaurantForm.value.tipoCozinha;
        this.userData.quantidadeMesas = this.restaurantForm.value.quantidadeMesas;
        this.userData.horaFuncionamento = this.restaurantForm.value.horaFuncionamento;
        
        this.editingInfo = false;
        this.editingAddress = false;
        this.editingRestaurant = false;
        this.loading = false;
      },
      error: (err) => this.handleError(err, 'salvar dados do restaurante')
    });
  }
  
  get isRestaurante(): boolean { return this.auth.hasRole('RESTAURANTE'); }
  get userName(): string { return this.auth.perfil?.nome || ''; }
  get userType(): string { return this.auth.perfil?.tipo || ''; }
  get userAvatar(): string {
    return this.isRestaurante
      ? 'assets/png/avatar-padrao-restaurante-tavola.png'
      : 'assets/png/avatar-padrao-tavola-cordeirinho.png';
  }
  
  get horaFuncionamentoControls() {
    return (this.restaurantForm.get('horaFuncionamento') as FormArray).controls;
  }

  toggleEditInfo() { this.editingInfo = !this.editingInfo; }
  toggleEditAddress() { this.editingAddress = !this.editingAddress; }
  toggleEditRestaurant() { this.editingRestaurant = !this.editingRestaurant; }
  
  cancelEditInfo() {
    this.editingInfo = false;
    this.infoForm.reset(this.userData);
    this.toastr.info('Edição de informações cancelada');
  }

  cancelEditAddress() {
    this.editingAddress = false;
    this.addressForm.reset(this.userData.endereco);
    this.toastr.info('Edição de endereço cancelada');
  }

  cancelEditRestaurant() {
    this.editingRestaurant = false;
    this.restaurantForm.reset({
        nome: this.userData.nome,
        tipoCozinha: this.userData.tipoCozinha,
        quantidadeMesas: this.userData.quantidadeMesas,
        horaFuncionamento: this.userData.horaFuncionamento
    });
    this.toastr.info('Edição do restaurante cancelada');
  }

  criarGrupoHorario(horario: IHoraFuncionamento): FormGroup {
    return this.fb.group({
      diaSemana: [horario.diaSemana, Validators.required],
      abertura: [horario.abertura, Validators.required],
      fechamento: [horario.fechamento, Validators.required],
    });
  }
  addHorario() {
    const horaFuncionamento = this.restaurantForm.get('horaFuncionamento') as FormArray;
    horaFuncionamento.push(this.criarGrupoHorario({ diaSemana: '', abertura: '', fechamento: '' }));
  }
  removeHorario(index: number) {
    (this.restaurantForm.get('horaFuncionamento') as FormArray).removeAt(index);
  }

  montarPayloadRestaurante(): IUpdateRestaurantePayload {
    const info = this.infoForm.getRawValue();
    const address = this.addressForm.getRawValue();
    const restaurant = this.restaurantForm.getRawValue();
    return {
      tipoCozinha: restaurant.tipoCozinha,
      descricao: this.userData.descricao || '',
      horariosFuncionamento: restaurant.horaFuncionamento,
      nomesServicos: this.userData.servicos || [],
      imagens: this.userData.imagens || [],
      nomeUsuario: info.nome,
      emailUsuario: info.email,
      senhaUsuario: info.senha,
      telefoneUsuario: info.telefone,
      enderecoUsuario: address,
    };
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      if (!file.type.startsWith('image/')) {
        this.toastr.error('Por favor, selecione apenas arquivos de imagem.');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => { this.previewImage = reader.result as string; };
      reader.readAsDataURL(file);
    }
  }

  buscarCep() {
    const cep = this.addressForm.get('cep')?.value;
    if (!cep || cep.replace(/\D/g, '').length !== 8) return;
    this.http.get(`https://viacep.com.br/ws/${cep.replace(/\D/g, '')}/json/`).subscribe({
      next: (res: any) => {
        if (res.erro) {
          this.mensagemCepInvalido = 'CEP não encontrado.';
          return;
        }
        this.mensagemCepInvalido = '';
        this.addressForm.patchValue({
          estado: res.uf,
          cidade: res.localidade,
          bairro: res.bairro,
          rua: res.logradouro
        });
      },
      error: () => { this.mensagemCepInvalido = 'Erro ao buscar CEP.'; }
    });
  }

  validadorSenhaForte(control: any) {
    const valor = control.value;
    if (!valor) return null;
    const erros: any = {};
    if (valor.length > 0 && valor.length < 8) {
      erros['minCaracteres'] = 'A senha deve ter no mínimo 8 caracteres.';
    } else if (valor.length > 0 && !/[!@#$%^&*(),.?":{}|<>]/.test(valor)) {
      erros['semCaractereEspecial'] = 'A senha deve conter um caractere especial.';
    }
    return Object.keys(erros).length ? erros : null;
  }
  
  deleteAccount() {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Sua conta será apagada para sempre!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DA4A24',
      cancelButtonColor: '#3B221B',
      confirmButtonText: 'Sim, apagar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.loading = true;
        const deleteObservable = this.isRestaurante
          ? this.restauranteService.deleteRestaurante()
          : this.clienteService.deleteCliente();
        
        deleteObservable.subscribe({
          next: () => {
            this.toastr.success('Conta apagada com sucesso.');
            this.auth.clearAuthData();
            this.router.navigate(['/login']);
            this.loading = false;
          },
          error: (err) => {
            this.toastr.error('Erro ao apagar a conta.');
            console.error(err);
            this.loading = false;
          }
        });
      }
    });
  }
}