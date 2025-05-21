import { Component, type OnInit, ViewChild, ElementRef, type AfterViewInit, HostListener } from "@angular/core"
import { ActivatedRoute } from '@angular/router';
import { RestauranteService } from "../../../core/services/restaurante.service";
import { CommonModule } from "@angular/common"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { RouterLink } from "@angular/router"
import { GoogleMapsModule } from "@angular/google-maps"
import { GoogleMap } from "@angular/google-maps"

// Angular Material
import { MatIconModule } from "@angular/material/icon"
import { MatTabsModule } from "@angular/material/tabs"
import { MatButtonModule } from "@angular/material/button"

// NG-Zorro
import { NzGridModule } from "ng-zorro-antd/grid"
import { NzImageModule } from "ng-zorro-antd/image"
import { NzBreadCrumbModule } from "ng-zorro-antd/breadcrumb"
import { NzTagModule } from "ng-zorro-antd/tag"
import { NzTypographyModule } from "ng-zorro-antd/typography"
import { NzSpaceModule } from "ng-zorro-antd/space"
import { NzButtonModule } from "ng-zorro-antd/button"
import { NzRateModule } from "ng-zorro-antd/rate"
import { NzTabsModule } from "ng-zorro-antd/tabs"
import { NzCardModule } from "ng-zorro-antd/card"
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { CarOutline } from '@ant-design/icons-angular/icons';
import { NzDatePickerModule } from "ng-zorro-antd/date-picker"
import { NzSelectModule } from "ng-zorro-antd/select"
import { NzFormModule } from "ng-zorro-antd/form"
import { NzModalModule } from "ng-zorro-antd/modal"
import { NzIconModule } from "ng-zorro-antd/icon"
import { NzDividerModule } from "ng-zorro-antd/divider"
import { NzCollapseModule } from "ng-zorro-antd/collapse"

@Component({
  providers: [
    { provide: NZ_ICONS, useValue: [ CarOutline ] }
  ],
  selector: "app-agendamento-reservas-restaurante",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    GoogleMapsModule,

    // Angular Material
    MatIconModule,
    MatTabsModule,
    MatButtonModule,

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
    NzModalModule,
    NzDividerModule,
    NzCollapseModule,
    GoogleMap,
  ],
  templateUrl: "./agendamento-reservas-restaurante.component.html",
  styleUrls: ["./agendamento-reservas-restaurante.component.scss"],
})
export class AgendamentoReservasRestauranteComponent implements OnInit, AfterViewInit {
  @ViewChild("tabsContainer") tabsContainer!: ElementRef

  restaurante: any
  isFavorite = false
  isGalleryVisible = false
  isHorariosVisible = false
  activeTabIndex = 0
  tabFixo = false

  // Configuração do mapa
  center: google.maps.LatLngLiteral = { lat: -23.5505, lng: -46.6333 } // São Paulo como padrão
  zoom = 15
  markerPosition: google.maps.LatLngLiteral = { lat: -23.5505, lng: -46.6333 }
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
    icon: {
      url: "assets/icons/restaurant-marker.png",
      scaledSize: new google.maps.Size(40, 40),
    },
  }

  // Imagens principais para a galeria
  restaurantImages = [
    "assets/jpg/restauranteModelo.jpg",
    "assets/jpg/restauranteModelo.jpg",
    "assets/jpg/restauranteModelo.jpg",
    "assets/jpg/restauranteModelo.jpg",
    "assets/jpg/restauranteModelo.jpg",
  ]

  // Todas as imagens para o modal de galeria
  allImages: string[] = []

  totalPhotos = 0 // Número exato de fotos

  // Horários de funcionamento
  horariosFuncionamento = [
    { dia: "Segunda-Feira", abertura: "12:00", fechamento: "00:00" },
    { dia: "Terça-Feira", abertura: "12:00", fechamento: "00:00" },
    { dia: "Quarta-Feira", abertura: "12:00", fechamento: "00:00" },
    { dia: "Quinta-Feira", abertura: "12:00", fechamento: "00:00" },
    { dia: "Sexta-Feira", abertura: "12:00", fechamento: "00:00" },
    { dia: "Sábado", abertura: "12:00", fechamento: "00:00" },
    { dia: "Domingo", abertura: "12:00", fechamento: "00:00" },
  ]

  // Recursos e serviços
  recursos = [
    { nome: "Wi-Fi gratuito", icone: "wifi" },
    { nome: "Aceita cartões", icone: "credit_card" },
    { nome: "Acessível para cadeirantes", icone: "accessible" },
    { nome: "Estacionamento", icone: "local_parking" },
  ]

  constructor(
    private route: ActivatedRoute,
    private restauranteService: RestauranteService,
    private elementRef: ElementRef,
  ) {}

  ngOnInit() {
    // seu código existente…
    window.scrollTo(0, 0);
    const id = this.route.snapshot.paramMap.get('id')!;
    this.carregarDadosRestaurante(id);
    this.gerarImagens();

    // ← Aqui, só após o Google Maps estar carregado:
    this.markerOptions = {
      draggable: false,
      icon: {
        url: 'assets/icons/restaurant-marker.png',
        scaledSize: new google.maps.Size(40, 40),
      }
    }}

  ngAfterViewInit() {
    // Observar a posição da aba para fixá-la quando necessário
    setTimeout(() => {
      if (this.tabsContainer) {
        this.checkTabPosition()
      }
    }, 100)
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    this.checkTabPosition()
  }

  private checkTabPosition(): void {
    if (!this.tabsContainer) return

    const tabsPosition = this.tabsContainer.nativeElement.getBoundingClientRect().top
    this.tabFixo = tabsPosition <= 0
  }

  carregarDadosRestaurante(id: string): void {
    // Simulação de dados do restaurante
    this.restaurante = {
      id: id,
      nome: "Restaurante Tavola",
      endereco: "Rua das Flores, 123",
      cidade: "São Paulo",
      estado: "SP",
      cep: "01234-567",
      telefone: "(11) 99999-9999",
      email: "contato@tavola.com.br",
      descricao:
        "O Restaurante Tavola oferece uma experiência gastronômica única, com pratos da culinária italiana preparados com ingredientes frescos e de alta qualidade. Nosso ambiente acolhedor é perfeito para momentos especiais em família ou com amigos. Venha conhecer nosso cardápio variado e se surpreender com sabores autênticos da Itália.",
      tipoCozinha: "Italiana",
      precoMedio: 120,
      avaliacao: 4.8,
      totalAvaliacoes: 256,
      coordenadas: {
        latitude: -23.5505,
        longitude: -46.6333,
      },
    }

    // Atualizar coordenadas do mapa
    if (this.restaurante.coordenadas) {
      this.center = {
        lat: this.restaurante.coordenadas.latitude,
        lng: this.restaurante.coordenadas.longitude,
      }
      this.markerPosition = this.center
    }
  }

  gerarImagens(): void {
    // Gerar um número aleatório de imagens entre 5 e 20
    const baseImage = "assets/jpg/Comida.jpg"
    this.allImages = [...this.restaurantImages]

    // Adicionar mais imagens para o total
    for (let i = 0; i < 15; i++) {
      this.allImages.push(baseImage)
    }

    this.totalPhotos = this.allImages.length - 4 // Número exato de fotos restantes
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite
  }

  openGallery() {
    this.isGalleryVisible = true
  }

  closeGallery() {
    this.isGalleryVisible = false
  }

  openHorarios() {
    this.isHorariosVisible = true
  }

  closeHorarios() {
    this.isHorariosVisible = false
  }

  onTabChange(index: number): void {
    this.activeTabIndex = index
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
}
