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
import { RestauranteService } from '../../core/services/restaurante.service';
import { ClienteService, IUpdateClientePayload } from '../../core/services/cliente.service';
import { IUpdateRestaurantePayload } from '../../core/services/restaurante.service';

@Component({
  selector: 'app-configuracoes',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GlobalSpinnerComponent,
    // Angular Material
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    // NG-Zorro
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
  
  // Estados de mensagem
  showInfoMessage = false;
  showAddressMessage = false;
  showRestaurantMessage = false;
  
  // Imagem de preview
  previewImage: string | null = null;
  
  // Formulários
  infoForm!: FormGroup;
  addressForm!: FormGroup;
  restaurantForm!: FormGroup;

  loading = false;
  mensagemCepInvalido: string = '';

  userData!: IUserData;

  ngOnInit() {
    this.loading = true;
    if (this.auth.hasRole('RESTAURANTE')) {
      const idRestaurante = localStorage.getItem('idRestaurante');
      if (idRestaurante) {
        this.restauranteService.findById(idRestaurante).subscribe({
          next: (data: IRestaurante) => {
            this.userData = {
              nome: data.nome,
              email: data.email,
              telefone: data.telefone,
              endereco: {
                ...data.endereco,
                cep: data.endereco?.cep || '',
                pais: 'Brasil'
              },
              tipo: 'RESTAURANTE',
              senha: '', // Senha is not usually returned, so set as empty or handle appropriately
              tipoCozinha: data.tipoCozinha,
              horaFuncionamento: data.horariosFuncionamento,
              descricao: data.descricao,
              servicos: data.servicos,
              imagens: data.imagens
            };
            this.initForms();
            this.loading = false;
          },
          error: (error: any) => {
            console.error('Erro ao carregar dados do restaurante:', error);
            this.toastr.error('Erro ao carregar dados do restaurante');
            this.loading = false;
          }
        });
      } else {
        this.toastr.error('ID do restaurante não encontrado. Faça login novamente.');
        this.loading = false;
      }
    } else {
      this.clienteService.getCliente().subscribe({
        next: (data: IUserData) => {
          this.userData = {
            ...data,
            endereco: {
              ...data.endereco,
              pais: 'Brasil'
            }
          };
          this.initForms();
          this.loading = false;
        },
        error: (error: any) => {
          console.error('Erro ao carregar dados do cliente:', error);
          this.toastr.error('Erro ao carregar dados do cliente');
          this.loading = false;
        }
      });
    }
  }

  initForms() {
    // Formulário de informações
    this.infoForm = this.fb.group({
      nome: [this.userData.nome, Validators.required],
      email: [this.userData.email, [Validators.required, Validators.email]],
      telefone: [this.userData.telefone, Validators.required],
      senha: [this.userData.senha, [Validators.required, this.validadorSenhaForte]]
    });

    // Formulário de endereço
    this.addressForm = this.fb.group({
      cep: [this.userData.endereco?.cep || '', Validators.required],
      pais: [this.userData.endereco?.pais || '', Validators.required],
      estado: [this.userData.endereco?.estado || '', Validators.required],
      cidade: [this.userData.endereco?.cidade || '', Validators.required],
      bairro: [this.userData.endereco?.bairro || '', Validators.required],
      rua: [this.userData.endereco?.rua || '', Validators.required],
      numero: [this.userData.endereco?.numero || '', Validators.required],
      complemento: [this.userData.endereco?.complemento || '']
    });

    // Formulário de restaurante
    this.restaurantForm = this.fb.group({
      nome: [this.userData.nome],
      tipoCozinha: [this.userData.tipoCozinha],
      quantidadeMesas: [this.userData.quantidadeMesas],
      horaFuncionamento: this.fb.array(
        this.userData.horaFuncionamento?.map(horario => 
          this.fb.group({
            diaSemana: [horario.diaSemana],
            abertura: [horario.abertura],
            fechamento: [horario.fechamento]
          })
        ) || []
      )
    });
  }

  // Getter para o FormArray de horários
  get horaFuncionamentoControls() {
    return (this.restaurantForm.get('horaFuncionamento') as FormArray).controls;
  }
  
  // Adicionar novo horário
  addHorario() {
    const horaFuncionamento = this.restaurantForm.get('horaFuncionamento') as FormArray;
    horaFuncionamento.push(
      this.fb.group({
        diaSemana: [''],
        abertura: [''],
        fechamento: ['']
      })
    );
  }
  
  // Remover horário
  removeHorario(index: number) {
    const horaFuncionamento = this.restaurantForm.get('horaFuncionamento') as FormArray;
    horaFuncionamento.removeAt(index);
  }

  // Getters - Restaurados para usar auth.perfil
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
  
  // Método para selecionar arquivo de imagem
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    
    if (input.files && input.files.length) {
      const file = input.files[0];
      
      // Verificar se é uma imagem
      if (!file.type.startsWith('image/')) {
        this.toastr.error('Por favor, selecione apenas arquivos de imagem.');
        return;
      }
      
      // Criar URL para preview
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImage = reader.result as string;
        this.toastr.success('Imagem carregada com sucesso!');
      };
      reader.readAsDataURL(file);
    }
  }
  
  // Converter código do dia da semana para texto
  getDiaSemana(codigo: string): string {
    const diasSemana: {[key: string]: string} = {
      'SEGUNDA': 'Segunda-feira',
      'TERCA': 'Terça-feira',
      'QUARTA': 'Quarta-feira',
      'QUINTA': 'Quinta-feira',
      'SEXTA': 'Sexta-feira',
      'SABADO': 'Sábado',
      'DOMINGO': 'Domingo'
    };
    
    return diasSemana[codigo] || codigo;
  }

  // Métodos para informações da conta
  toggleEditInfo() {
    this.editingInfo = !this.editingInfo;
    if (!this.editingInfo) {
      this.showInfoMessage = false;
      this.toastr.info('Edição cancelada');
    }
  }

  cancelEditInfo() {
    this.editingInfo = false;
    this.showInfoMessage = false;
    this.infoForm.patchValue({
      nome: this.userData.nome,
      email: this.userData.email,
      telefone: this.userData.telefone,
      cep: this.userData.endereco.cep,
      senha: this.userData.senha
    });
    this.toastr.info('Edição cancelada');
  }

  saveInfo() {
    if (this.infoForm.valid) {
      this.loading = true;
      if (this.auth.hasRole('RESTAURANTE')) {
        const payload = this.montarPayloadRestaurante();
        this.restauranteService.updateRestaurante(payload).subscribe({
          next: () => {
            this.toastr.success('Informações atualizadas com sucesso!');
            this.editingInfo = false;
            this.loading = false;
          },
          error: (error: any) => {
            console.error('Erro ao atualizar informações:', error);
            this.toastr.error('Erro ao atualizar informações. Tente novamente.');
            this.loading = false;
          }
        });
      } else {
        const payload = this.montarPayload();
        this.clienteService.updateCliente(payload).subscribe({
          next: () => {
            this.toastr.success('Informações atualizadas com sucesso!');
            this.editingInfo = false;
            this.loading = false;
          },
          error: (error: any) => {
            console.error('Erro ao atualizar informações:', error);
            this.toastr.error('Erro ao atualizar informações. Tente novamente.');
            this.loading = false;
          }
        });
      }
    } else {
      this.toastr.error('Por favor, preencha todos os campos obrigatórios.');
    }
  }

  // Métodos para endereço
  toggleEditAddress() {
    this.editingAddress = !this.editingAddress;
    if (!this.editingAddress) {
      this.showAddressMessage = false;
      this.toastr.info('Edição cancelada');
    }
  }

  cancelEditAddress() {
    this.editingAddress = false;
    this.showAddressMessage = false;
    this.addressForm.patchValue({
      pais: this.userData.endereco.pais,
      estado: this.userData.endereco.estado,
      cidade: this.userData.endereco.cidade,
      bairro: this.userData.endereco.bairro,
      rua: this.userData.endereco.rua,
      numero: this.userData.endereco.numero,
      complemento: this.userData.endereco.complemento
    });
    this.toastr.info('Edição cancelada');
  }

  saveAddress() {
    if (this.addressForm.valid) {
      this.loading = true;
      if (this.auth.hasRole('RESTAURANTE')) {
        const payload = this.montarPayloadRestaurante();
        this.restauranteService.updateRestaurante(payload).subscribe({
          next: () => {
            this.toastr.success('Endereço atualizado com sucesso!');
            this.editingAddress = false;
            this.loading = false;
          },
          error: (error: any) => {
            console.error('Erro ao atualizar endereço:', error);
            this.toastr.error('Erro ao atualizar endereço. Tente novamente.');
            this.loading = false;
          }
        });
      } else {
        const payload = this.montarPayload();
        this.clienteService.updateCliente(payload).subscribe({
          next: () => {
            this.toastr.success('Endereço atualizado com sucesso!');
            this.editingAddress = false;
            this.loading = false;
          },
          error: (error: any) => {
            console.error('Erro ao atualizar endereço:', error);
            this.toastr.error('Erro ao atualizar endereço. Tente novamente.');
            this.loading = false;
          }
        });
      }
    } else {
      this.toastr.error('Por favor, preencha todos os campos obrigatórios.');
    }
  }

  // Métodos para restaurante
  toggleEditRestaurant() {
    this.editingRestaurant = !this.editingRestaurant;
    if (!this.editingRestaurant) {
      this.showRestaurantMessage = false;
      this.toastr.info('Edição cancelada');
    }
  }

  cancelEditRestaurant() {
    this.editingRestaurant = false;
    this.showRestaurantMessage = false;
    this.restaurantForm.patchValue({
      nome: this.userData.nome,
      tipoCozinha: this.userData.tipoCozinha,
      quantidadeMesas: this.userData.quantidadeMesas,
      horaFuncionamento: this.userData.horaFuncionamento
    });
    this.toastr.info('Edição cancelada');
  }

  saveRestaurant() {
    if (this.restaurantForm.valid) {
      this.loading = true;
      const payload = this.montarPayloadRestaurante();
      this.restauranteService.updateRestaurante(payload).subscribe({
        next: () => {
          this.toastr.success('Dados do restaurante atualizados com sucesso!');
          this.editingRestaurant = false;
          this.loading = false;
        },
        error: (error: any) => {
          console.error('Erro ao atualizar dados do restaurante:', error);
          this.toastr.error('Erro ao atualizar dados do restaurante. Tente novamente.');
          this.loading = false;
        }
      });
    } else {
      this.toastr.error('Por favor, preencha todos os campos obrigatórios.');
    }
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
        if (this.auth.hasRole('RESTAURANTE')) {
          this.restauranteService.deleteRestaurante().subscribe(() => {
            this.auth.clearAuthData();
            this.router.navigate(['/login']);
          });
        } else {
          this.clienteService.deleteCliente().subscribe(() => {
            this.auth.clearAuthData();
            this.router.navigate(['/login']);
          });
        }
      }
    });
  }

  montarPayload(): IUpdateClientePayload {
    const infoFormValue = this.infoForm.value;
    const addressFormValue = this.addressForm.value;

    const enderecoPayload: IEndereco = {
      cep: addressFormValue.cep ?? '',
      pais: addressFormValue.pais ?? '',
      estado: addressFormValue.estado ?? '',
      cidade: addressFormValue.cidade ?? '',
      bairro: addressFormValue.bairro ?? '',
      rua: addressFormValue.rua ?? '',
      numero: addressFormValue.numero ?? '',
      complemento: addressFormValue.complemento ?? ''
    };

    return {
      nome: infoFormValue.nome,
      email: infoFormValue.email,
      senha: infoFormValue.senha,
      endereco: enderecoPayload,
      telefone: infoFormValue.telefone,
      imagemPerfilBase64: this.previewImage || null,
      imagemBackgroundBase64: null,
    };
  }

  montarPayloadRestaurante(): IUpdateRestaurantePayload {
    const infoFormValue = this.infoForm.getRawValue();
    const addressFormValue = this.addressForm.getRawValue() as IEndereco;
    const restaurantFormValue = this.restaurantForm.getRawValue();

    return {
      // Restaurant specific data from restaurantForm or userData
      tipoCozinha: restaurantFormValue.tipoCozinha || this.userData.tipoCozinha || '',
      descricao: this.userData.descricao || '', // Assumed to come from userData as it's not in restaurantForm in configuracoes
      horariosFuncionamento: restaurantFormValue.horaFuncionamento || this.userData.horaFuncionamento || [],
      nomesServicos: this.userData.servicos || [], // Assumed to come from userData as it's not in restaurantForm in configuracoes
      imagens: this.userData.imagens || [], // Assumed to come from userData as it's not in restaurantForm in configuracoes

      // User specific data from infoForm and addressForm or userData
      nomeUsuario: infoFormValue.nome || this.userData.nome,
      emailUsuario: infoFormValue.email || this.userData.email,
      senhaUsuario: infoFormValue.senha || '', // Password might not be in infoForm for update, using existing or empty
      telefoneUsuario: infoFormValue.telefone || this.userData.telefone,
      enderecoUsuario: {
        cep: addressFormValue.cep || this.userData.endereco?.cep || '',
        estado: addressFormValue.estado || this.userData.endereco?.estado || '',
        cidade: addressFormValue.cidade || this.userData.endereco?.cidade || '',
        bairro: addressFormValue.bairro || this.userData.endereco?.bairro || '',
        rua: addressFormValue.rua || this.userData.endereco?.rua || '',
        numero: addressFormValue.numero || this.userData.endereco?.numero || '',
        complemento: addressFormValue.complemento || this.userData.endereco?.complemento || ''
      }
    };
  }

  save() {
    if (this.infoForm.valid && this.addressForm.valid) {
      this.loading = true;

      if (this.auth.hasRole('RESTAURANTE')) {
        const payload = this.montarPayloadRestaurante();
        this.restauranteService.updateRestaurante(payload).subscribe({
          next: () => {
            this.toastr.success('Dados atualizados com sucesso!');
            this.loading = false;
          },
          error: (error: any) => {
            console.error('Erro ao atualizar dados:', error);
            this.toastr.error('Erro ao atualizar dados. Tente novamente.');
            this.loading = false;
          }
        });
      } else {
        const payload = this.montarPayload();
        this.clienteService.updateCliente(payload).subscribe({
          next: () => {
            this.toastr.success('Dados atualizados com sucesso!');
            this.loading = false;
          },
          error: (error: any) => {
            console.error('Erro ao atualizar dados:', error);
            this.toastr.error('Erro ao atualizar dados. Tente novamente.');
            this.loading = false;
          }
        });
      }
    } else {
      this.toastr.error('Por favor, preencha todos os campos obrigatórios.');
    }
  }

  validadorSenhaForte(control: any) {
    const valor = control.value;
    if (!valor) return null;
    const erros: any = {};
    if (valor.length < 8) {
      erros['minCaracteres'] = true;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(valor)) {
      erros['semCaractereEspecial'] = true;
    }
    return Object.keys(erros).length ? erros : null;
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
      error: () => {
        this.mensagemCepInvalido = 'Erro ao buscar CEP.';
      }
    });
  }
}