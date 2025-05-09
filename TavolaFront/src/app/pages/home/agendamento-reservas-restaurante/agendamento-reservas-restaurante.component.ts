import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestauranteService } from '../../../core/services/restaurante.service';

@Component({
  selector: 'app-agendamento-reservas-restaurante',
  imports: [],
  templateUrl: './agendamento-reservas-restaurante.component.html',
  styleUrl: './agendamento-reservas-restaurante.component.scss'
})
export class AgendamentoReservasRestauranteComponent implements OnInit {
  restaurante: any;

  constructor(private route: ActivatedRoute, private restauranteService: RestauranteService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.restauranteService.findById(id)
      .subscribe((r: any) => this.restaurante = r);
  }
}
