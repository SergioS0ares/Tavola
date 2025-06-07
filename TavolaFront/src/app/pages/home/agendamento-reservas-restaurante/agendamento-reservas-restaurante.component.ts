import {
  Component,
  type OnInit,
  ViewChild,
  ElementRef,
  type AfterViewInit,
  HostListener,
  LOCALE_ID,
  OnDestroy,
  Inject,
} from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { RestauranteService } from "../../../core/services/restaurante.service"
import { MapsService } from "../../../core/services/maps.service"
import { CommonModule, registerLocaleData } from "@angular/common"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { RouterLink } from "@angular/router"
import { GoogleMapsModule } from "@angular/google-maps"
import { GoogleMap } from "@angular/google-maps"
import localePt from "@angular/common/locales/pt"
import { GlobalSpinnerService } from "../../../core/services/global-spinner.service"
import { MatCommonModule } from '@angular/material/core';
import { IRestaurante } from '../../../Interfaces/IRestaurante.interface';


// Registrar locale português
registerLocaleData(localePt)

// Angular Material
import { MatIconModule } from "@angular/material/icon"
import { MatTabsModule } from "@angular/material/tabs"
import { MatButtonModule } from "@angular/material/button"
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

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
import { NZ_ICONS } from "ng-zorro-antd/icon"
import { NzDatePickerModule } from "ng-zorro-antd/date-picker"
import { NzSelectModule } from "ng-zorro-antd/select"
import { NzFormModule } from "ng-zorro-antd/form"
import { NzModalModule } from "ng-zorro-antd/modal"
import { NzIconModule } from "ng-zorro-antd/icon"
import { NzDividerModule } from "ng-zorro-antd/divider"
import { NzCollapseModule } from "ng-zorro-antd/collapse"
import { NzToolTipModule } from "ng-zorro-antd/tooltip"
import { NzDrawerModule } from "ng-zorro-antd/drawer"
import { NzCalendarModule } from "ng-zorro-antd/calendar"
import { NzBadgeModule } from "ng-zorro-antd/badge"
import { NzMessageService } from "ng-zorro-antd/message"
import { NZ_I18N, pt_BR } from "ng-zorro-antd/i18n"
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
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,

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
})
export class AgendamentoReservasRestauranteComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("tabsContainer") tabsContainer!: ElementRef
  @ViewChild("categoriasScrollContainer") categoriasScrollContainer!: ElementRef
  @ViewChild("categoriasNavContainer") categoriasNavContainer!: ElementRef

  restaurante: IRestaurante | null = null
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
  bookingStep = 1 // 1: Data, 2: Horário, 3: Pessoas, 4: Confirmação
  selectedDate: Date = new Date()
  selectedTime = ""
  selectedGuests = 2
  availableSlots: any[] = []
  selectedComments = ""
  bookingData: any = null

  // Properties for loading spinner
  isLoading = true

  // Propriedades do mapa e rotas
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
  mapOptions: any = {
    disableDefaultUI: false,
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: true,
  }

  // Propriedades para rotas
  directionsResult: google.maps.DirectionsResult | null = null
  directionsOptions: google.maps.DirectionsRendererOptions = {
    suppressMarkers: false,
    polylineOptions: {
      strokeColor: "#F6BD38",
      strokeWeight: 5,
      strokeOpacity: 0.8,
    },
  }
  carregandoRota = false
  userLocation: google.maps.LatLngLiteral | null = null

  // Imagens principais para a galeria
  restaurantImages: string[] = []

  // Todas as imagens para o modal de galeria
  allImages: string[] = []
  totalPhotos = 0

  // Horários de funcionamento
  horariosFuncionamento: { diaSemana: string; abertura: string; fechamento: string }[] = []

  // Recursos e serviços
  recursos: { nome: string; icone: string }[] = []

  // Propriedades do menu
  itensMenu: any[] = []
  categorias: string[] = [
    "Destaques",
    "Entradas",
    "Acompanhamentos",
    "Pratos Principais",
    "Sobremesas",
    "Bebidas",
    "Vinhos",
  ]
  categoriaAtiva = "Destaques"
  dietOptions: string[] = ["Sem glúten", "Halal", "Intolerância à lactose", "Vegano", "Vegetariano"]

  restauranteId!: string

  constructor(
    @Inject(ActivatedRoute) private route: ActivatedRoute,
    private restauranteService: RestauranteService,
    private mapsService: MapsService,
    private message: NzMessageService,
    private elementRef: ElementRef,
    private router: Router,
    private spinnerService: GlobalSpinnerService
  ) {}
  public agendamentoId: string | null = null;
  public agendamentoDetails: any; // Replace 'any' with a proper interface

  // Dicionário para exibir o nome do dia da semana em português
  private readonly DIAS_PT: { [key: string]: string } = {
    'DOMINGO': 'Domingo',
    'SEGUNDA': 'Segunda-feira',
    'TERCA': 'Terça-feira',
    'QUARTA': 'Quarta-feira',
    'QUINTA': 'Quinta-feira',
    'SEXTA': 'Sexta-feira',
    'SABADO': 'Sábado',
  };

  ngOnInit() {
    this.agendamentoId = this.route.snapshot.paramMap.get('id');
    if (this.agendamentoId) {
      // Example: Fetch data using this.agendamentoId and restaurante.service
      // this.restauranteService.getAgendamentoById(this.agendamentoId).subscribe(details => {
      //   this.agendamentoDetails = details;
      // });
      console.log('Agendamento ID:', this.agendamentoId);
    } else {
      console.error('Agendamento ID not found in route parameters.');
      // Handle missing ID, perhaps navigate away or show an error
    }

    window.scrollTo(0, 0)
    this.selectedDate = new Date()
    this.selectedDate.setHours(0, 0, 0, 0) // Zerando hora para evitar problemas na comparação
    this.route.params.subscribe(params => {
      this.restauranteId = params['id']
      if (this.restauranteId) {
        this.carregarDadosRestaurante()
      }
    })
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

  // Função auxiliar para comparar só a parte da data (dia, mês, ano)
  private isSameDate(d1: Date, d2: Date): boolean {
    return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear()
  }

  onDateSelect(date: Date): void {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    console.log("Data selecionada:", date);
    console.log("Data atual selecionada no componente:", this.selectedDate);
    console.log("Hoje:", today);

    if (date < today) {
      this.message.error("Não é possível selecionar uma data anterior a hoje.");
      return;
    }

    this.selectedDate = date;
    this.bookingStep = 2; // Avança para a etapa de horário
    this.generateAvailableSlots();
  }

  onTimeSelect(time: string): void {
    this.selectedTime = time
    this.bookingStep = 3
  }

  onGuestsSelect(guests: number): void {
    this.selectedGuests = guests
    this.bookingStep = 4
    this.prepareBookingData()
  }

  goBackStep(): void {
    if (this.bookingStep > 1) {
      this.bookingStep--
    }
  }

  resetBooking(): void {
    this.bookingStep = 1
    this.selectedDate = new Date()
    this.selectedTime = ""
    this.selectedGuests = 2
    this.selectedComments = ""
    this.bookingData = null
  }

  disabledDate = (current: Date): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return (current && current < today) || !this.isDiaHabilitado(current);
  }

  // Método para mostrar como chegar - simplificado
  async mostrarComoChegar(): Promise<void> {
    this.carregandoRota = true
    try {
      const destino = this.markerPosition || this.center;
      await this.mapsService.mostrarRotaNoGoogleMaps(destino)
      this.message.success("Abrindo rota no Google Maps...")
    } catch (error) {
      this.message.error("Erro ao abrir a rota")
    } finally {
      this.carregandoRota = false
    }
  }

  generateAvailableSlots(): void {
    // Gerar slots baseados nos horários de funcionamento
    const dayOfWeek = this.selectedDate.getDay()
    const dayNames = [
      "Domingo",
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado",
    ]
    const dayName = dayNames[dayOfWeek]

    const horario = this.horariosFuncionamento.find((h) => h.diaSemana === dayName)
    if (!horario) {
      this.availableSlots = []
      return
    }

    this.availableSlots = []

    // Slots de almoço (12:00 - 16:00)
    const lunchSlots = this.generateTimeSlots("12:00", "16:00", 15)
    if (lunchSlots.length > 0) {
      this.availableSlots.push({
        period: "Almoço",
        slots: lunchSlots,
      })
    }

    // Slots de jantar (17:00 - 23:30)
    const dinnerSlots = this.generateTimeSlots("17:00", "23:30", 15)
    if (dinnerSlots.length > 0) {
      this.availableSlots.push({
        period: "Jantar",
        slots: dinnerSlots,
      })
    }
  }

  generateTimeSlots(start: string, end: string, intervalMinutes: number): any[] {
    const slots = []
    const startTime = this.timeToMinutes(start)
    const endTime = this.timeToMinutes(end)

    for (let time = startTime; time <= endTime; time += intervalMinutes) {
      const timeString = this.minutesToTime(time)
      const availability = Math.random() > 0.3 ? "available" : Math.random() > 0.5 ? "limited" : "unavailable"

      slots.push({
        time: timeString,
        availability: availability,
        percentage: availability === "limited" ? Math.floor(Math.random() * 50) + 20 : null,
      })
    }

    return slots
  }

  timeToMinutes(time: string): number {
    const [hours, minutes] = time.split(":").map(Number)
    return hours * 60 + minutes
  }

  minutesToTime(minutes: number): string {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`
  }

  getFormattedDate(): string {
    return this.selectedDate.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
    })
  }

  carregarDadosRestaurante(): void {
    this.spinnerService.mostrar(0)
    this.isLoading = true
    this.restauranteService.findById(this.restauranteId).subscribe({
      next: (restaurante: IRestaurante) => {
        this.restaurante = restaurante
        // Imagens: garantir pelo menos 4
        let imgs = restaurante.imagens && restaurante.imagens.length > 0
          ? restaurante.imagens.map(img => img.startsWith('/') ? img : `/${img}`)
          : []
        while (imgs.length < 4) imgs.push('assets/jpg/restauranteModelo.jpg')
        this.restaurantImages = imgs.slice(0, 5) // até 5 para o botão de galeria
        this.allImages = [...imgs]
        this.totalPhotos = imgs.length > 4 ? imgs.length - 4 : 0
        // Horários de funcionamento ordenados
        this.horariosFuncionamento = this.ordenarHorarios(restaurante.horariosFuncionamento || [])
        // Serviços
        this.recursos = restaurante.servicos && restaurante.servicos.length > 0
          ? restaurante.servicos.map(s => ({ nome: s, icone: 'check_circle' }))
          : []
        // Centralizar mapa pelo endereço formatado
        this.atualizarLocalizacaoMapa();
        this.checkIfFavorite()
        this.isLoading = false
        this.spinnerService.ocultar()
      },
      error: (error: any) => {
        console.error('Erro ao carregar dados do restaurante:', error)
        this.isLoading = false
        this.spinnerService.ocultar()
        this.message.error('Não foi possível determinar a localização exata do restaurante a partir do endereço.')
      }
    })
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
    if (this.restaurantImages.length > 4) {
      this.isGalleryVisible = true
    }
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
    const endereco = this.getEnderecoFormatado()
    if (endereco) {
      navigator.clipboard.writeText(endereco).then(() => {
        this.copiado = true
        setTimeout(() => {
          this.copiado = false
        }, 2000)
      }).catch(err => console.error('Erro ao copiar:', err))
    }
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
    ]

    const destaques = this.itensMenu.filter((item, index) => index % 3 === 0)
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

    this.mostrarSetaDireita =
      container.scrollWidth > container.clientWidth &&
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    this.mostrarSetaEsquerda = container.scrollLeft > 10
  }

  scrollCategorias(direcao: "left" | "right"): void {
    if (!this.categoriasScrollContainer) return

    const container = this.categoriasScrollContainer.nativeElement
    const scrollAtual = container.scrollLeft

    if (direcao === "left") {
      container.scrollLeft = Math.max(0, scrollAtual - this.scrollAmount)
    } else {
      container.scrollLeft = Math.min(container.scrollWidth - container.clientWidth, scrollAtual + this.scrollAmount)
    }

    setTimeout(() => {
      this.verificarSetas()
    }, 300)
  }

  centralizarCategoriaAtiva(): void {
    if (!this.categoriasScrollContainer) return

    const container = this.categoriasScrollContainer.nativeElement
    const buttons = container.querySelectorAll(".categoria-btn")

    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].textContent.trim() === this.categoriaAtiva) {
        const button = buttons[i]
        const containerWidth = container.clientWidth
        const buttonLeft = button.offsetLeft
        const buttonWidth = button.offsetWidth

        const scrollLeft = buttonLeft - containerWidth / 2 + buttonWidth / 2

        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        })

        break
      }
    }
  }

  onCategoriaScroll(event: Event): void {
    this.verificarSetas()
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: Event): void {
    this.verificarSetas()
  }

  prepareBookingData(): void {
    this.bookingData = {
      date: this.selectedDate,
      time: this.selectedTime,
      guests: this.selectedGuests,
      restaurant: this.restaurante?.nome,
      formattedDate: this.getFormattedDate(),
      comments: this.selectedComments,
    }
  }

  finalizarReserva(): void {
    if (!this.selectedDate || !this.selectedTime || !this.selectedGuests) {
      console.log('Por favor, selecione a data, horário e número de pessoas.')
      return
    }

    this.spinnerService.mostrar(0)

    const reservaData = {
      restaurantId: this.restauranteId,
      date: this.selectedDate.toISOString().split('T')[0],
      time: this.selectedTime,
      guests: this.selectedGuests,
      comments: this.selectedComments
    }

    // Simulação de sucesso/erro para demonstração com o mock atual
    console.log('Simulando finalização de reserva:', reservaData)
    setTimeout(() => {
      const sucesso = Math.random() > 0.2 // 80% de chance de sucesso
      if (sucesso) {
        console.log('Reserva simulada com sucesso!')
        this.spinnerService.ocultar()
        this.message.success("Reserva realizada com sucesso (simulado)!")
        this.resetBooking()
        this.router.navigate(['/home'])
      } else {
        console.error('Erro simulado ao criar reserva.')
        this.spinnerService.ocultar()
        this.message.error("Erro ao criar reserva (simulado)")
      }
    }, 2000) // Simula um delay de 2 segundos
  }

  definirDadosEstaticos(): void {
    if (this.restaurante?.coordenadas) {
      this.center = {
        lat: this.restaurante.coordenadas.latitude,
        lng: this.restaurante.coordenadas.longitude,
      }
      this.markerPosition = this.center
    }
  }

  checkIfFavorite(): void {
    // Implementação simples mock: apenas alterna a propriedade isFavorite.
    // Para uma implementação real, você verificaria em uma lista de IDs favoritos.
    console.log('Verificando se restaurante é favorito (mock)')
    // Mantendo a propriedade isFavorite como um boolean simples por enquanto.
  }

  ngOnDestroy(): void {
    console.log('Componente AgendamentoReservasRestauranteComponent sendo destruído.')
  }

  // Função para exibir endereço formatado
  getEnderecoFormatado(): string {
    if (!this.restaurante?.endereco) return '';
    const e = this.restaurante.endereco;
    let partes = [e.rua, e.numero, e.bairro, e.cidade, e.estado, e.cep, e.complemento];
    return partes.filter(Boolean).join(', ');
  }

  // Função para exibir endereço resumido (rua, cidade - estado)
  getEnderecoResumido(): string {
    if (!this.restaurante?.endereco) return '';
    const e = this.restaurante.endereco;
    let partes = [e.rua, e.numero, e.cidade, e.estado];
    return partes.filter(Boolean).join(', ');
  }

  // Função para exibir preço médio mock
  getPrecoMedio(): number {
    return 80; // valor mock
  }

  // Função para exibir nome do dia da semana em PT
  getDiaSemanaPt(dia: string): string {
    return this.DIAS_PT[dia] || dia;
  }

  // Função para exibir descrição com quebra de linha
  getDescricaoFormatada(): string {
    return this.restaurante?.descricao || '';
  }

  // Função para desabilitar dias no calendário que não estão em horariosFuncionamento
  isDiaHabilitado = (date: Date): boolean => {
    if (!this.horariosFuncionamento || this.horariosFuncionamento.length === 0) return false;
    const diasApi = this.horariosFuncionamento.map(h => h.diaSemana);
    const diasSemana = ['DOMINGO','SEGUNDA','TERCA','QUARTA','QUINTA','SEXTA','SABADO'];
    const diaApi = diasSemana[date.getDay()];
    return diasApi.includes(diaApi);
  }

  // Ordena os horários de funcionamento por ordem dos dias da semana
  ordenarHorarios(horarios: { diaSemana: string; abertura: string; fechamento: string }[]): any[] {
    const ordem = ['DOMINGO','SEGUNDA','TERCA','QUARTA','QUINTA','SEXTA','SABADO'];
    return horarios.slice().sort((a, b) => ordem.indexOf(a.diaSemana) - ordem.indexOf(b.diaSemana));
  }

  // Função para agrupar horários por dia e período (almoço/jantar)
  getHorariosPorDia(): any[] {
    // Agrupa por diaSemana e retorna todos os períodos daquele dia
    const diasSemana = ['DOMINGO','SEGUNDA','TERCA','QUARTA','QUINTA','SEXTA','SABADO'];
    return diasSemana.map(dia => {
      const horarios = (this.horariosFuncionamento || []).filter(h => h.diaSemana === dia);
      return horarios.length > 0 ? { dia, horarios } : null;
    }).filter(Boolean);
  }

  // Atualizar localização do mapa após carregar restaurante
  private atualizarLocalizacaoMapa(): void {
    const enderecoStr = this.getEnderecoFormatado();
    if (enderecoStr) {
      this.mapsService.getCoordinatesFromAddress(enderecoStr).subscribe({
        next: coords => {
          this.center = { lat: coords.lat, lng: coords.lng };
          this.markerPosition = this.center;
        },
        error: () => {
          if (this.restaurante?.coordenadas) {
            this.center = {
              lat: this.restaurante.coordenadas.latitude,
              lng: this.restaurante.coordenadas.longitude,
            };
            this.markerPosition = this.center;
          }
        }
      });
    }
  }
}