import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RestauranteService } from '../../core/services/restaurante.service';
import Swal from 'sweetalert2';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-meu-restaurante',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './meu-restaurante.component.html',
  styleUrls: ['./meu-restaurante.component.scss']
})
export class MeuRestauranteComponent implements OnInit {
  restauranteForm!: FormGroup;
  listaServicos = [
    { nome: "Wi-Fi gratuito", icone: "wifi" },
    { nome: "Aceita cartões", icone: "credit_card" },
    { nome: "Acessível para cadeirantes", icone: "accessible" },
    { nome: "Estacionamento", icone: "local_parking" },
    { nome: "Ideal para crianças", icone: "child_friendly" },
    { nome: "Música ao vivo", icone: "music_note" },
    { nome: "Permite animais", icone: "pets" },
    { nome: "Valet (serviço de manobrista)", icone: "hail" },
  ];

  constructor(
    private fb: FormBuilder,
    private restauranteService: RestauranteService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.restauranteForm = this.fb.group({
      nome: [''],
      tipoCozinha: [''],
      telefone: [''],
      servicos: [[]],
    });

    const idRestaurante = this.auth.perfil?.id || localStorage.getItem('idRestaurante');
    this.restauranteService.findById(idRestaurante!).subscribe(data => {
      this.restauranteForm.patchValue({
        nome: data.nome,
        tipoCozinha: data.tipoCozinha,
        telefone: data.telefone,
        servicos: data.servicos || [],
      });
    });
  }

  salvar() {
    const payload = {
      ...this.restauranteForm.value,
      // Adicione outros campos obrigatórios do restaurante aqui se necessário
    };
    this.restauranteService.updateRestaurante(payload).subscribe(() => {
      Swal.fire('Sucesso!', 'Dados do restaurante atualizados.', 'success');
    });
  }
}
