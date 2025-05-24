import { Component, type OnInit, ViewChild, ElementRef, type AfterViewInit, HostListener, LOCALE_ID, Inject } from "@angular/core"
import { ActivatedRoute } from '@angular/router';
import { RestauranteService } from "../../../core/services/restaurante.service";
import { CommonModule, registerLocaleData } from "@angular/common"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { RouterLink } from "@angular/router"
import { GoogleMapsModule } from "@angular/google-maps"
import { GoogleMap } from "@angular/google-maps"
import localePt from '@angular/common/locales/pt';

// Registrar locale português
registerLocaleData(localePt);

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
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NZ_I18N, pt_BR } from 'ng-zorro-antd/i18n';
import type { IconDefinition } from "@ant-design/icons-angular"
import {
  CarOutline,
  HomeOutline,
  EnvironmentOutline,
  FlagOutline,
  HeartOutline,
  HeartFill,
  LeftOutline,
  RightOutline,
  CalendarOutline,
  ClockCircleOutline,
  TeamOutline,
  CheckCircleOutline,
  ExclamationCircleOutline,
  FireFill,
  CopyOutline,
  CheckOutline,
} from "@ant-design/icons-angular/icons"

const icons: IconDefinition[] = [
  CarOutline, 
  HomeOutline, 
  EnvironmentOutline, 
  FlagOutline, 
  HeartOutline, 
  HeartFill,
  LeftOutline,
  RightOutline,
  CalendarOutline,
  ClockCircleOutline,
  TeamOutline,
  CheckCircleOutline,
  ExclamationCircleOutline,
  FireFill,
  CopyOutline,
  CheckOutline,
]

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
    NzDrawerModule,
    NzCalendarModule,
    NzBadgeModule,

    GoogleMap,
  ],
  templateUrl: "./agendamento-reservas-restaurante.component.html",
  styleUrls: ["./agendamento-reservas-restaurante.component.scss"],
  providers: [
    { provide: NZ_ICONS, useValue: icons },
    { provide: NZ_I18N, useValue: pt_BR },
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class AgendamentoReservasRestauranteComponent implements OnInit, AfterViewInit {
  @ViewChild("tabsContainer") tabsContainer!: ElementRef
  @ViewChild("categoriasScrollContainer") categoriasScrollContainer!: ElementRef
  @ViewChild("categoriasNavContainer") categoriasNavContainer!: ElementRef

  restaurante: any
  isFavorite = false
  isGalleryVisible = false
  isHorariosVisible = false
  isDietOptionsVisible = false
  activeTabIndex = 0
  tabFixo = false
  copiado = false

  // Propriedades para navegação de categorias
  mostrarSetaEsquerda = false
  mostrarSetaDireita = false
  scrollAmount = 200
  categoriasFixas = false

  // Propriedades do sistema de reservas
  bookingStep = 1 // 1: Data, 2: Horário, 3: Pessoas
  selectedDate: Date = new Date()
  selectedTime: string = ''
  selectedGuests: number = 2
  availableSlots: any[] = []

  // Configuração do mapa
  center: any = { lat: -23.5505, lng: -46.6333 }
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
  totalPhotos = 0

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

  // Propriedades do menu
  itensMenu: any[] = []
  categorias: string[] = ["Destaques", "Entradas", "Acompanhamentos", "Pratos Principais", "Sobremesas", "Bebidas"]
  categoriaAtiva = "Destaques"
  dietOptions: string[] = ["Sem glúten", "Halal", "Intolerância à lactose", "Vegano", "Vegetariano"]

  constructor(
    private route: ActivatedRoute,
    private restauranteService: RestauranteService,
    private elementRef: ElementRef,
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0)
    const id = this.route.snapshot.paramMap.get("id")!
    this.carregarDadosRestaurante(id)
    this.gerarImagens()
    this.carregarItensMenu()
    this.generateAvailableSlots()
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.tabsContainer) {
        this.checkTabPosition()
      }
      this.verificarSetas()
    }, 100)
  }

  private checkTabPosition(): void {
    if (!this.tabsContainer) return
    const tabsPosition = this.tabsContainer.nativeElement.getBoundingClientRect().top
    this.tabFixo = tabsPosition <= 0
  }

  // Métodos do sistema de reservas
  setBookingStep(step: number): void {
    if (step <= this.bookingStep || step === 1) {
      this.bookingStep = step
    }
  }

  onDateSelect(date: Date): void {
    this.selectedDate = date
    this.bookingStep = 2
    this.generateAvailableSlots()
  }

  onTimeSelect(time: string): void {
    this.selectedTime = time
    this.bookingStep = 3
  }

  onGuestsSelect(guests: number): void {
    this.selectedGuests = guests
    // Aqui você pode implementar a lógica para finalizar a reserva
    console.log('Reserva:', {
      date: this.selectedDate,
      time: this.selectedTime,
      guests: this.selectedGuests
    })
  }

  goBackStep(): void {
    if (this.bookingStep > 1) {
      this.bookingStep--
    }
  }

  resetBooking(): void {
    this.bookingStep = 1
    this.selectedDate = new Date()
    this.selectedTime = ''
    this.selectedGuests = 2
  }

  disabledDate = (current: Date): boolean => {
    // Desabilitar datas anteriores a hoje
    return current && current < new Date(new Date().setHours(0, 0, 0, 0))
  }

  generateAvailableSlots(): void {
    // Gerar slots baseados nos horários de funcionamento
    const dayOfWeek = this.selectedDate.getDay()
    const dayNames = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']
    const dayName = dayNames[dayOfWeek]
    
    const horario = this.horariosFuncionamento.find(h => h.dia === dayName)
    if (!horario) return

    this.availableSlots = []
    
    // Slots de almoço (12:00 - 16:00)
    const lunchSlots = this.generateTimeSlots('12:00', '16:00', 15)
    if (lunchSlots.length > 0) {
      this.availableSlots.push({
        period: 'Almoço',
        slots: lunchSlots
      })
    }

    // Slots de jantar (17:00 - 23:30)
    const dinnerSlots = this.generateTimeSlots('17:00', '23:30', 15)
    if (dinnerSlots.length > 0) {
      this.availableSlots.push({
        period: 'Jantar',
        slots: dinnerSlots
      })
    }
  }

  generateTimeSlots(start: string, end: string, intervalMinutes: number): any[] {
    const slots = []
    const startTime = this.timeToMinutes(start)
    const endTime = this.timeToMinutes(end)
    
    for (let time = startTime; time <= endTime; time += intervalMinutes) {
      const timeString = this.minutesToTime(time)
      const availability = Math.random() > 0.3 ? 'available' : Math.random() > 0.5 ? 'limited' : 'unavailable'
      
      slots.push({
        time: timeString,
        availability: availability,
        percentage: availability === 'limited' ? Math.floor(Math.random() * 50) + 20 : null
      })
    }
    
    return slots
  }

  timeToMinutes(time: string): number {
    const [hours, minutes] = time.split(':').map(Number)
    return hours * 60 + minutes
  }

  minutesToTime(minutes: number): string {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`
  }

  getFormattedDate(): string {
    return this.selectedDate.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long'
    })
  }

  carregarDadosRestaurante(id: string): void {
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

    if (this.restaurante.coordenadas) {
      this.center = {
        lat: this.restaurante.coordenadas.latitude,
        lng: this.restaurante.coordenadas.longitude,
      }
      this.markerPosition = this.center
    }
  }

  gerarImagens(): void {
    const baseImage = "assets/jpg/Comida.jpg"
    this.allImages = [...this.restaurantImages]

    for (let i = 0; i < 15; i++) {
      this.allImages.push(baseImage)
    }

    this.totalPhotos = this.allImages.length - 4
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

  openDietOptions(): void {
    this.isDietOptionsVisible = true
  }

  closeDietOptions(): void {
    this.isDietOptionsVisible = false
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
    if (this.activeTabIndex !== 1 || !this.categoriasNavContainer) return

    const categoriasNavRect = this.categoriasNavContainer.nativeElement.getBoundingClientRect()
    const shouldBeFixed = categoriasNavRect.top <= 48

    if (shouldBeFixed !== this.categoriasFixas) {
      this.categoriasFixas = shouldBeFixed
    }

    this.categorias.forEach((categoria) => {
      const section = document.getElementById("categoria-" + categoria.toLowerCase().replace(" ", "-"))
      if (!section) return

      const rect = section.getBoundingClientRect()
      if (rect.top <= 150 && rect.bottom >= 150) {
        if (this.categoriaAtiva !== categoria) {
          this.categoriaAtiva = categoria
          if (this.categoriasFixas && this.categoriasScrollContainer) {
            this.centralizarCategoriaAtiva()
          }
        }
      }
    })

    this.verificarSetas()
  }

  carregarItensMenu(): void {
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

  selecionarCategoria(categoria: string): void {
    this.categoriaAtiva = categoria
    
    const element = document.getElementById("categoria-" + categoria.toLowerCase().replace(" ", "-"))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    
    this.centralizarCategoriaAtiva()
  }

  verificarSetas(): void {
    if (!this.categoriasScrollContainer) return
    
    const container = this.categoriasScrollContainer.nativeElement
    
    this.mostrarSetaDireita = container.scrollWidth > container.clientWidth && 
                             container.scrollLeft < (container.scrollWidth - container.clientWidth - 10)
    this.mostrarSetaEsquerda = container.scrollLeft > 10
  }

  scrollCategorias(direcao: 'left' | 'right'): void {
    if (!this.categoriasScrollContainer) return
    
    const container = this.categoriasScrollContainer.nativeElement
    const scrollAtual = container.scrollLeft
    
    if (direcao === 'left') {
      container.scrollLeft = Math.max(0, scrollAtual - this.scrollAmount)
    } else {
      container.scrollLeft = Math.min(
        container.scrollWidth - container.clientWidth,
        scrollAtual + this.scrollAmount
      )
    }
    
    setTimeout(() => {
      this.verificarSetas()
    }, 300)
  }

  centralizarCategoriaAtiva(): void {
    if (!this.categoriasScrollContainer) return
    
    const container = this.categoriasScrollContainer.nativeElement
    const buttons = container.querySelectorAll('.categoria-btn')
    
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].textContent.trim() === this.categoriaAtiva) {
        const button = buttons[i]
        const containerWidth = container.clientWidth
        const buttonLeft = button.offsetLeft
        const buttonWidth = button.offsetWidth
        
        const scrollLeft = buttonLeft - (containerWidth / 2) + (buttonWidth / 2)
        
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        })
        
        break
      }
    }
  }

  onCategoriaScroll(event: Event): void {
    this.verificarSetas()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.verificarSetas()
  }
}