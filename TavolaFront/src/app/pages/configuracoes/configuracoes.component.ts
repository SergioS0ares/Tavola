import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';

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

@Component({
  selector: 'app-configuracoes',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
    NzMessageModule
  ],
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.scss']
})
export class ConfiguracoesComponent implements OnInit {
  private auth = inject(AuthService);
  private fb = inject(FormBuilder);
  private toastService = inject(ToastrService);
  
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
  
  // Dados do usuário
  userData: IUserData = {
    nome: "adm_restaurante",
    email: "jujuba.com@arrouba.com",
    senha: "senha",
    endereco: {
      pais: "Brasil",
      estado: "SP",
      cidade: "São Paulo",
      bairro: "Centro",
      rua: "Rua das Flores",
      numero: "123",
      complemento: "Loja 1"
    },
    tipo: "RESTAURANTE", // Alterado para RESTAURANTE para testar a seção de restaurante
    telefone: "62991589563",
    tipoCozinha: "italiana",
    quantidadeMesas: 10,
    horaFuncionamento: [
      {
        diaSemana: "SEGUNDA",
        abertura: "11:00",
        fechamento: "22:00"
      },
      {
        diaSemana: "TERCA",
        abertura: "11:00",
        fechamento: "22:00"
      }
    ]
  };

  ngOnInit() {
    this.initForms();
  }

  initForms() {
    // Formulário de informações
    this.infoForm = this.fb.group({
      nome: [this.userData.nome],
      email: [this.userData.email],
      telefone: [this.userData.telefone]
    });

    // Formulário de endereço
    this.addressForm = this.fb.group({
      pais: [this.userData.endereco.pais],
      estado: [this.userData.endereco.estado],
      cidade: [this.userData.endereco.cidade],
      bairro: [this.userData.endereco.bairro],
      rua: [this.userData.endereco.rua],
      numero: [this.userData.endereco.numero],
      complemento: [this.userData.endereco.complemento]
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
        this.toastService.error('Por favor, selecione apenas arquivos de imagem.');
        return;
      }
      
      // Criar URL para preview
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImage = reader.result as string;
        this.toastService.success('Imagem carregada com sucesso!');
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
    this.editingInfo = true;
  }

  cancelEditInfo() {
    this.editingInfo = false;
    this.infoForm.reset({
      nome: this.userData.nome,
      email: this.userData.email,
      telefone: this.userData.telefone
    });
  }

  saveInfo() {
    if (this.infoForm.valid) {
      // Aqui você implementaria a lógica para salvar os dados
      this.showInfoMessage = true;
      this.editingInfo = false;
      
      // Mostrar mensagem de sucesso
      this.toastService.success('Informações salvas com sucesso!');
      
      // Esconder a mensagem após 3 segundos
      setTimeout(() => {
        this.showInfoMessage = false;
      }, 3000);
    }
  }

  // Métodos para endereço
  toggleEditAddress() {
    this.editingAddress = true;
  }

  cancelEditAddress() {
    this.editingAddress = false;
    this.addressForm.reset({
      pais: this.userData.endereco.pais,
      estado: this.userData.endereco.estado,
      cidade: this.userData.endereco.cidade,
      bairro: this.userData.endereco.bairro,
      rua: this.userData.endereco.rua,
      numero: this.userData.endereco.numero,
      complemento: this.userData.endereco.complemento
    });
  }

  saveAddress() {
    if (this.addressForm.valid) {
      // Aqui você implementaria a lógica para salvar os dados
      this.showAddressMessage = true;
      this.editingAddress = false;
      
      // Mostrar mensagem de sucesso
      this.toastService.success('Endereço salvo com sucesso!');
      
      // Esconder a mensagem após 3 segundos
      setTimeout(() => {
        this.showAddressMessage = false;
      }, 3000);
    }
  }

  // Métodos para restaurante
  toggleEditRestaurant() {
    this.editingRestaurant = true;
  }

  cancelEditRestaurant() {
    this.editingRestaurant = false;
    this.restaurantForm.reset({
      nome: this.userData.nome,
      tipoCozinha: this.userData.tipoCozinha,
      quantidadeMesas: this.userData.quantidadeMesas
    });
    
    // Resetar o FormArray de horários
    const horaFuncionamento = this.restaurantForm.get('horaFuncionamento') as FormArray;
    while (horaFuncionamento.length) {
      horaFuncionamento.removeAt(0);
    }
    
    this.userData.horaFuncionamento?.forEach(horario => {
      horaFuncionamento.push(
        this.fb.group({
          diaSemana: [horario.diaSemana],
          abertura: [horario.abertura],
          fechamento: [horario.fechamento]
        })
      );
    });
  }

  saveRestaurant() {
    if (this.restaurantForm.valid) {
      // Aqui você implementaria a lógica para salvar os dados
      this.showRestaurantMessage = true;
      this.editingRestaurant = false;
      
      // Mostrar mensagem de sucesso
      this.toastService.success('Dados do restaurante salvos com sucesso!');
      
      // Esconder a mensagem após 3 segundos
      setTimeout(() => {
        this.showRestaurantMessage = false;
      }, 3000);
    }
  }
}