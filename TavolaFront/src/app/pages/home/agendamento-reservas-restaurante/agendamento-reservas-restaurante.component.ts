import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestauranteService } from '../../../core/services/restaurante.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

// Angular Material
import { MatIconModule } from '@angular/material/icon';

// NG-Zorro
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule, NZ_ICONS }         from 'ng-zorro-antd/icon';
import {
  HomeOutline,
  EnvironmentOutline,
  FlagOutline,
  HeartOutline,
  HeartFill,
  StarOutline,
  StarFill
} from '@ant-design/icons-angular/icons';
import { importProvidersFrom }            from '@angular/core';

@Component({
  selector: 'app-agendamento-reservas-restaurante',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    
    // Angular Material
    MatIconModule,
    
    // NG-Zorro
    NzBreadCrumbModule,
    NzTagModule,
    NzTypographyModule,
    NzIconModule,
    NzSpaceModule,
    NzGridModule,
    NzImageModule,
    NzButtonModule,
    NzRateModule,
    NzTabsModule,
    NzCardModule,
    NzDatePickerModule,
    NzSelectModule,
    NzFormModule,
    NzModalModule
  ],
  templateUrl: './agendamento-reservas-restaurante.component.html',
  styleUrl: './agendamento-reservas-restaurante.component.scss'
})
export class AgendamentoReservasRestauranteComponent implements OnInit {
  restaurante: any;
  isFavorite = false;
  isGalleryVisible = false;

  // Imagens principais para a galeria
  restaurantImages = [
    'assets/jpg/restaurant-interior.jpg',
    'assets/jpg/restaurant-dish.jpg', 
    'assets/jpg/restaurant-detail.jpg',
    'assets/jpg/restaurant-ambience.jpg',
    'assets/jpg/restaurant-more.jpg',
  ];
  
  // Todas as imagens para o modal de galeria
  allImages = [
    'assets/jpg/restaurant-interior.jpg',
    'assets/jpg/restaurant-dish.jpg', 
    'assets/jpg/restaurant-detail.jpg',
    'assets/jpg/restaurant-ambience.jpg',
    'assets/jpg/restaurant-more.jpg',
    'assets/jpg/Comida.jpg',
    'assets/jpg/Comida.jpg',
    'assets/jpg/Comida.jpg',
    'assets/jpg/Comida.jpg',
    'assets/jpg/Comida.jpg',
    'assets/jpg/Comida.jpg',
    'assets/jpg/Comida.jpg',
  ];
  
  totalPhotos = 211; // Número total de fotos
  
  constructor(private route: ActivatedRoute, private restauranteService: RestauranteService) {}
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.restauranteService.findById(id)
      .subscribe((r: any) => {
        this.restaurante = {
          ...r,
          endereco: r.endereco || '27 Rue Aubry le Boucher, 75004, Paris',
          tipo: r.tipo || 'Francês',
          preco: r.preco || 'Preço médio €22',
          totalAvaliacoes: r.totalAvaliacoes || 1007
        };
      });
      
    // Fallback para as imagens caso as originais não existam
    // Você pode remover isso se já tiver as imagens corretas
    this.checkImagesExist();
  }
  
  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
  
  openGallery() {
    this.isGalleryVisible = true;
  }
  
  closeGallery() {
    this.isGalleryVisible = false;
  }
  
  // Método para verificar se as imagens existem e usar fallback se necessário
  private checkImagesExist() {
    // Se você não tiver as imagens específicas, use as que já tem
    if (!this.imageExists('assets/jpg/restaurant-interior.jpg')) {
      this.restaurantImages = [
        'assets/jpg/Comida.jpg',
        'assets/jpg/Comida.jpg',
        'assets/jpg/Comida.jpg',
        'assets/jpg/Comida.jpg',
        'assets/jpg/Comida.jpg'
      ];
      
      this.allImages = Array(12).fill('assets/jpg/Comida.jpg');
    }
  }
  
  private imageExists(url: string): boolean {
    // Método simples para verificar se a imagem existe
    // Em produção, você pode querer uma abordagem mais robusta
    const img = new Image();
    img.src = url;
    return img.complete;
  }
}