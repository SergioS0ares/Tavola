import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestauranteService } from '../../../core/services/restaurante.service';
import { MatIconModule } from '@angular/material/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agendamento-reservas-restaurante',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    NzGridModule,
    NzImageModule
  ],
  templateUrl: './agendamento-reservas-restaurante.component.html',
  styleUrl: './agendamento-reservas-restaurante.component.scss'
})
export class AgendamentoReservasRestauranteComponent implements OnInit {
  restaurante: any;

  constructor(private route: ActivatedRoute, private restauranteService: RestauranteService) {}

  outrasImagens = [
      'assets/jpg/Comida.jpg',
      'assets/jpg/Comida.jpg', 
      'assets/jpg/Comida.jpg',
      'assets/jpg/Comida.jpg',
      'assets/jpg/Comida.jpg',
      'assets/jpg/Comida.jpg',
  ];
  totalPhotos = 4644;
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.restauranteService.findById(id)
      .subscribe((r: any) => this.restaurante = r);
  }
}
