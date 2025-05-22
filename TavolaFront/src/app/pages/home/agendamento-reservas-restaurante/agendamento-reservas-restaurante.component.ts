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
import { NzDatePickerModule } from "ng-zorro-antd/date-picker"
import { NzSelectModule } from "ng-zorro-antd/select"
import { NzFormModule } from "ng-zorro-antd/form"
import { NzModalModule } from "ng-zorro-antd/modal"
import { NzIconModule } from "ng-zorro-antd/icon"
import { NzDividerModule } from "ng-zorro-antd/divider"
import { NzCollapseModule } from "ng-zorro-antd/collapse"
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import type { IconDefinition } from "@ant-design/icons-angular"
import {
  CarOutline,
  HomeOutline,
  EnvironmentOutline,
  FlagOutline,
  HeartOutline,
  HeartFill,
} from "@ant-design/icons-angular/icons"

const icons: IconDefinition[] = [CarOutline, HomeOutline, EnvironmentOutline, FlagOutline, HeartOutline, HeartFill]

@Component({
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
    NzToolTipModule,

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
  copiado = false

  // Configuração do mapa
  center: any = { lat: -23.5505, lng: -46.6333 } // São Paulo como padrão
  zoom = 15
  markerPosition: any = { lat: -23.5505, lng: -46.6333 }
  markerOptions: any = {
    draggable: false,
    icon: {
      url: "assets/png/restaurant-marker.png",
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

  // Adicione estas propriedades após as propriedades existentes
  itensMenu: any[] = []
  categorias: string[] = ["Destaques", "Entradas", "Acompanhamentos", "Pratos Principais", "Sobremesas", "Bebidas"]
  categoriaAtiva = "Destaques"
  categoriasFixas = false
  dietOptions: string[] = ["Sem glúten", "Halal", "Intolerância à lactose", "Vegano", "Vegetariano"]
  isDietOptionsVisible = false

  constructor(
    private route: ActivatedRoute,
    private restauranteService: RestauranteService,
    private elementRef: ElementRef,
  ) {}

  ngOnInit() {
    // Mantenha o código existente
    window.scrollTo(0, 0)
    const id = this.route.snapshot.paramMap.get("id")!
    this.carregarDadosRestaurante(id)
    this.gerarImagens()

    // Adicione esta linha para carregar os itens do menu
    this.carregarItensMenu()
  }

  ngAfterViewInit() {
    // Observar a posição da aba para fixá-la quando necessário
    setTimeout(() => {
      if (this.tabsContainer) {
        this.checkTabPosition()
      }
    }, 100)
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

  copiarEndereco(): void {
    const endereco = `${this.restaurante.endereco}, ${this.restaurante.cidade} - ${this.restaurante.estado}, ${this.restaurante.cep}`
    navigator.clipboard.writeText(endereco).then(() => {
      this.copiado = true

      // Voltar para o ícone de cópia após 2 segundos
      setTimeout(() => {
        this.copiado = false
      }, 2000)
    })
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    this.checkTabPosition()
    this.checkCategoriasPosition()
  }

  private checkCategoriasPosition(): void {
    if (this.activeTabIndex !== 1) return

    // Verificar se as categorias devem ficar fixas
    const menuContent = this.elementRef.nativeElement.querySelector(".menu-content")
    if (!menuContent) return

    const categoriasNav = menuContent.querySelector(".categorias-nav")
    if (!categoriasNav) return

    const categoriasPosition = categoriasNav.getBoundingClientRect().top
    this.categoriasFixas = categoriasPosition <= 48 // 48px é a altura da aba principal

    // Verificar qual categoria está visível
    this.categorias.forEach((categoria) => {
      const section = document.getElementById("categoria-" + categoria.toLowerCase().replace(" ", "-"))
      if (!section) return

      const rect = section.getBoundingClientRect()
      if (rect.top <= 150 && rect.bottom >= 150) {
        this.categoriaAtiva = categoria
      }
    })
  }

  carregarItensMenu(): void {
    // Simulação de dados do menu
    this.itensMenu = [
      {
        id: "1",
        nome: "Bruschetta Clássica",
        preco: 18.9,
        descricao: "Fatias de pão italiano grelhado com tomate, manjericão e azeite extra virgem",
        imagem: "assets/jpg/Comida.jpg",
        disponivel: true,
        categoria: "Entradas",
        tags: ["Vegetariano"],
      },
      {
        id: "2",
        nome: "Carpaccio de Filé Mignon",
        preco: 32.5,
        descricao: "Finas fatias de filé mignon com alcaparras, parmesão e molho de mostarda e mel",
        imagem: "assets/jpg/Comida.jpg",
        disponivel: true,
        categoria: "Entradas",
        tags: ["Sem Glúten"],
      },
      {
        id: "3",
        nome: "Risoto de Funghi",
        preco: 45.9,
        descricao: "Arroz arbóreo cremoso com mix de cogumelos frescos e parmesão",
        imagem: "assets/jpg/Comida.jpg",
        disponivel: true,
        categoria: "Pratos Principais",
        tags: ["Vegetariano", "Sem Glúten"],
      },
      {
        id: "4",
        nome: "Spaghetti alla Carbonara",
        preco: 39.9,
        descricao: "Massa fresca com molho cremoso de ovos, pancetta, pimenta preta e queijo pecorino",
        imagem: "assets/jpg/Comida.jpg",
        disponivel: true,
        categoria: "Pratos Principais",
        tags: [],
      },
      {
        id: "5",
        nome: "Tiramisu",
        preco: 22.9,
        descricao: "Sobremesa italiana clássica com camadas de biscoito champagne, café e creme de mascarpone",
        imagem: "assets/jpg/Comida.jpg",
        disponivel: true,
        categoria: "Sobremesas",
        tags: ["Vegetariano"],
      },
      {
        id: "6",
        nome: "Batatas Rústicas",
        preco: 18.5,
        descricao: "Batatas assadas com ervas finas, alho e azeite",
        imagem: "assets/jpg/Comida.jpg",
        disponivel: true,
        categoria: "Acompanhamentos",
        tags: ["Vegano", "Sem Glúten"],
      },
      {
        id: "7",
        nome: "Água Mineral",
        preco: 5.9,
        descricao: "Água mineral sem gás (500ml)",
        imagem: "assets/jpg/Comida.jpg",
        disponivel: true,
        categoria: "Bebidas",
        tags: ["Vegano", "Sem Glúten"],
      },
      {
        id: "8",
        nome: "Vinho Tinto da Casa",
        preco: 89.9,
        descricao: "Vinho tinto seco italiano (750ml)",
        imagem: "assets/jpg/Comida.jpg",
        disponivel: true,
        categoria: "Bebidas",
        tags: ["Vegano", "Sem Glúten"],
      },
      {
        id: "9",
        nome: "Filé Mignon ao Molho Madeira",
        preco: 68.9,
        descricao: "Medalhão de filé mignon grelhado com molho madeira e cogumelos",
        imagem: "assets/jpg/Comida.jpg",
        disponivel: true,
        categoria: "Pratos Principais",
        tags: ["Sem Glúten"],
      },
      {
        id: "10",
        nome: "Salada Caesar",
        preco: 29.9,
        descricao: "Mix de folhas, croutons, frango grelhado, parmesão e molho caesar",
        imagem: "assets/jpg/Comida.jpg",
        disponivel: true,
        categoria: "Entradas",
        tags: [],
      },
      {
        id: "11",
        nome: "Burrata com Tomate",
        preco: 36.5,
        descricao: "Burrata fresca com tomates cereja, rúcula, azeite e redução de balsâmico",
        imagem: "assets/jpg/Comida.jpg",
        disponivel: true,
        categoria: "Entradas",
        tags: ["Vegetariano", "Sem Glúten"],
      },
      {
        id: "12",
        nome: "Lasanha à Bolonhesa",
        preco: 42.9,
        descricao: "Camadas de massa fresca, molho bolonhesa, bechamel e queijo gratinado",
        imagem: "assets/jpg/Comida.jpg",
        disponivel: true,
        categoria: "Pratos Principais",
        tags: [],
      },
    ]

    // Adicionar alguns itens em destaque
    const destaques = this.itensMenu.filter((item, index) => index % 4 === 0)
    destaques.forEach((item) => {
      const destaque = { ...item }
      destaque.categoria = "Destaques"
      this.itensMenu.push(destaque)
    })
  }

  getItensPorCategoria(categoria: string): any[] {
    return this.itensMenu.filter((item) => item.categoria === categoria)
  }

  scrollToCategoria(categoria: string): void {
    const element = document.getElementById("categoria-" + categoria.toLowerCase().replace(" ", "-"))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  openDietOptions(): void {
    this.isDietOptionsVisible = true
  }

  closeDietOptions(): void {
    this.isDietOptionsVisible = false
  }
}
