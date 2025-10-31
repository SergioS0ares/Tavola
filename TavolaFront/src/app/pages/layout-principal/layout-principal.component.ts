// src/app/pages/layout-principal/layout-principal.component.ts
import { Component, inject, type OnInit } from "@angular/core"
import { Router, RouterModule, NavigationEnd } from "@angular/router"
import { RouterOutlet } from "@angular/router"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
import { MatMenuModule } from "@angular/material/menu"
import { AuthService } from "../../core/services/auth.service"
import { AcessService } from "../../core/services/access.service"
import { CommonModule } from "@angular/common"
import { StickySearchService } from "../../core/services/sticky-search.service"
import { FormControl, ReactiveFormsModule } from "@angular/forms"
import { type Observable, of, startWith, map, shareReplay } from "rxjs"
import { trigger, transition, style, animate } from "@angular/animations"
import { HomeComponent } from "../home/home.component" // Importe HomeComponent para verificar a instância
import { RestauranteService } from "../../core/services/restaurante.service"
import { ToastrService } from "ngx-toastr"
import { AvaliacaoDialogComponent, type AvaliacaoDialogData } from "../avaliacao-dialog/avaliacao-dialog.component"
import { MatDialog } from "@angular/material/dialog"
import { NotificacoesService, type Notificacao } from "../../core/services/notificacoes.service"
import {
  FiltrosDialogComponent,
  type FiltrosDialogData,
  type FiltrosDialogResult,
} from "../home/filtros-dialog/filtros-dialog.component"
import { NzBadgeModule } from "ng-zorro-antd/badge"
import { NzDropDownModule } from "ng-zorro-antd/dropdown"
import { NzLayoutModule } from "ng-zorro-antd/layout"
import { NzMenuModule } from "ng-zorro-antd/menu"
import { NzDrawerModule } from "ng-zorro-antd/drawer"
import { NzButtonModule } from "ng-zorro-antd/button"
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout"

@Component({
  selector: "app-layout-principal",
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    CommonModule,
    ReactiveFormsModule,
    NzBadgeModule,
    NzDropDownModule,
    NzLayoutModule,
    NzMenuModule,
    NzDrawerModule,
    NzButtonModule,
  ],
  templateUrl: "./layout-principal.component.html",
  styleUrls: ["./layout-principal.component.scss"],
  animations: [
    trigger("searchBarAnim", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(-30px)" }),
        animate("300ms", style({ opacity: 1, transform: "translateY(0)" })),
      ]),
      transition(":leave", [animate("300ms", style({ opacity: 0, transform: "translateY(-30px)" }))]),
    ]),
  ],
})
export class LayoutPrincipalComponent implements OnInit {
  sidebarAberta = true // Estado inicial da sidebar
  showStickySearchBar = false // Controla a visibilidade da search bar no cabeçalho
  searchExpanded = false // Added searchExpanded state for dynamic search behavior
  cidade = "" // Usado para a search bar principal (HomeComponent)
  query = "" // Usado para a search bar principal (HomeComponent)
  citySuggestions: string[] = []
  querySuggestions: string[] = []
  showCityDropdown = false
  showQueryDropdown = false

  // FormControls para a SearchBarComponent (na toolbar sticky)
  cityCtrl: FormControl = new FormControl("")
  queryCtrl: FormControl = new FormControl("")
  filteredCities$: Observable<string[]> = of([])
  filteredQueries$: Observable<string[]> = of([])

  // Referência para o HomeComponent ativo no router-outlet
  private currentHomeComponent: HomeComponent | null = null

  // Propriedades para notificações
  avaliacoesPendentes: Notificacao[] = []
  carregandoAvaliacoes = false
  activeTab: "pendentes" | "lidas" = "pendentes"

  // Filtros de busca para a search bar sticky
  filtrosAtuais: FiltrosDialogResult = {
    diaSemana: "",
    notaMinima: 0,
    servicos: [],
  }

  cidadeSelecionada = "Goiânia"

  router = inject(Router)
  private auth = inject(AuthService)
  private accessService = inject(AcessService)
  private stickyService = inject(StickySearchService)
  private restauranteService = inject(RestauranteService) // NEW INJECTION
  private toastService = inject(ToastrService)
  private notificacoesService = inject(NotificacoesService)
  private dialog = inject(MatDialog)
  private breakpointObserver = inject(BreakpointObserver)

  // Propriedades para responsividade
  isDrawerVisible = false
  isMobile$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay(),
  )

  constructor() {
    // Assina o estado da search bar sticky do StickySearchService
    this.stickyService.sticky$.subscribe((val) => {
      const isHome = this.router.url.startsWith("/home")
      // Evita flickering: só atualiza se realmente mudou
      const newShowSticky = val && isHome
      if (this.showStickySearchBar !== newShowSticky) {
        this.showStickySearchBar = newShowSticky
        // Se a sticky search bar aparecer, e tivermos um HomeComponent ativo,
        // sincroniza os FormControls da sticky search bar com os do HomeComponent.
        if (this.showStickySearchBar && this.currentHomeComponent) {
          this.cityCtrl.setValue(this.currentHomeComponent.cityCtrl.value, { emitEvent: false })
          this.queryCtrl.setValue(this.currentHomeComponent.queryCtrl.value, { emitEvent: false })
        }
      }
    })

    // Atualiza a visibilidade da search bar sticky ao navegar para fora de /home
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const isHome = this.router.url.startsWith("/home")
        if (!isHome) {
          this.showStickySearchBar = false
          this.currentHomeComponent = null // Limpa a referência quando sai da Home
        }
      }
    })

    // Inicializa o autocomplete para a search bar sticky
    this.filteredCities$ = this.cityCtrl.valueChanges.pipe(
      startWith(this.cityCtrl.value ?? ""),
      map((val) => this._filter(val ?? "", this.citySuggestions)),
    )
    this.filteredQueries$ = this.queryCtrl.valueChanges.pipe(
      startWith(""),
      map((val) => this._filter(val ?? "", this.querySuggestions)),
    )

    // NEW: Subscribe to suggestions from RestauranteService
    this.restauranteService.allCities$.subscribe((cities) => {
      this.citySuggestions = cities
    })
    this.restauranteService.allCuisines$.subscribe((cuisines) => {
      this.querySuggestions = cuisines
    })
  }

  ngOnInit() {
    // Inicializa o estado da sidebar no serviço ao carregar o LayoutPrincipal
    this.stickyService.setSidebarAberta(this.sidebarAberta)

    // Carrega notificações se for cliente
    if (this.isCliente) {
      this.carregarNotificacoes()
    }

    this.cityCtrl.valueChanges.subscribe((value) => {
      if (value) {
        this.cidadeSelecionada = value
      }
    })
  }

  get userName(): string {
    return this.auth.perfil?.nome || "Usuário"
  }

  get userType(): string {
    const tipo = this.auth.perfil?.tipo;
    switch (tipo) {
      case "RESTAURANTE": return "Restaurante";
      case "FUNCIONARIO": return "FUNCIONARIO"; // Será convertido no template
      default: return "Cliente";
    }
  }

  get userAvatar(): string {
    const profileImage = this.auth.perfil?.imagem
    if (profileImage) {
      return this.auth.getAbsoluteImageUrl(profileImage)
    }
    if (this.auth.perfil?.tipo === "RESTAURANTE") {
      return "assets/png/avatar-padrao-restaurante-tavola.png"
    }
    if (this.auth.perfil?.tipo === "FUNCIONARIO") {
      return "assets/png/avatar-padrao-garcom-tavola.png"
    }
    return "assets/png/avatar-padrao-tavola-cordeirinho.png"
  }

  get isCliente(): boolean {
    return this.auth.hasRole("CLIENTE")
  }

  get isRestaurante(): boolean {
    return this.auth.hasRole("RESTAURANTE")
  }

  get isFuncionario(): boolean {
    return this.auth.hasRole("FUNCIONARIO")
  }

  handleSidebarClick(event: MouseEvent) {
    if ((event.target as HTMLElement).closest("button")) {
      return
    }
    if (!this.sidebarAberta) {
      this.sidebarAberta = true
      this.stickyService.setSidebarAberta(true) // Notifica o serviço sobre o estado da sidebar
    }
  }

  toggleSidebar() {
    this.sidebarAberta = !this.sidebarAberta
    this.stickyService.setSidebarAberta(this.sidebarAberta) // Notifica o serviço sobre o estado da sidebar
  }

  logout() {
    this.accessService.logout().subscribe({
      next: () => {
        this.toastService.success("Logout realizado com sucesso!")
        this.router.navigate(["/login"])
      },
      error: (err) => {
        // Mesmo se der erro no servidor, limpa os dados locais
        this.auth.clearAuthData()
        this.toastService.warning("Logout realizado localmente")
        this.router.navigate(["/login"])
      },
    })
  }

  // --- Métodos para a SearchBarComponent (na toolbar sticky) ---
  onSearchSticky() {
    console.log("Sticky Search - Início")
    console.log("Sticky Search - Buscar:", this.cityCtrl.value, this.queryCtrl.value)
    const currentUrl = this.router.url
    const isCurrentlyOnHomePage = this.currentHomeComponent !== null // True if HomeComponent is currently active
    console.log("Sticky Search - Rota atual:", currentUrl, "Está na Home (componente ativo):", isCurrentlyOnHomePage)
    console.log("Sticky Search - currentHomeComponent (antes da busca):", this.currentHomeComponent)

    this.collapseSearch()

    if (!isCurrentlyOnHomePage) {
      console.log("Sticky Search - Não está na Home (componente ativo). Navegando para /home...")
      this.router.navigate(["/home"]).then(() => {
        setTimeout(() => {
          if (this.currentHomeComponent) {
            console.log("Sticky Search - HomeComponent ativo após navegação. Sincronizando e buscando...")
            this.currentHomeComponent.cityCtrl.setValue(this.cityCtrl.value, { emitEvent: false })
            this.currentHomeComponent.queryCtrl.setValue(this.queryCtrl.value, { emitEvent: false })
            // Sincroniza os filtros também
            this.currentHomeComponent.filtrosAtuais = this.filtrosAtuais
            this.currentHomeComponent.onSearch()
            console.log("Sticky Search - onSearch do HomeComponent acionado.")
          } else {
            console.error(
              "Sticky Search - HomeComponent ainda não disponível após navegação. Tentar novamente ou avisar usuário.",
            )
            // Poderia adicionar uma nova tentativa ou uma mensagem ao usuário aqui
          }
        }, 200) // Aumentado o delay para 200ms
      })
    } else {
      // Já está na Home e o componente está ativo, apenas sincroniza e aciona a busca
      console.log("Sticky Search - Já na rota /home e componente ativo. Sincronizando e buscando diretamente.")
      this.currentHomeComponent!.cityCtrl.setValue(this.cityCtrl.value, { emitEvent: false }) // Use ! para garantir que não é null
      this.currentHomeComponent!.queryCtrl.setValue(this.queryCtrl.value, { emitEvent: false })
      // Sincroniza os filtros também
      this.currentHomeComponent!.filtrosAtuais = this.filtrosAtuais
      this.currentHomeComponent!.onSearch()
      console.log("Sticky Search - onSearch do HomeComponent acionado diretamente.")
    }
  }

  onCityInputSticky(event: any) {
    if (this.currentHomeComponent) {
      const value = event.target.value
      // Usa as sugestões do LayoutPrincipal, que agora vêm do RestauranteService
      this.citySuggestions = this._filter(value, this.citySuggestions)
      this.filteredCities$ = of(this.citySuggestions)
      this.currentHomeComponent.cityCtrl.setValue(value, { emitEvent: false })
    }
  }

  selectCitySticky(city: string) {
    // Renomeado
    this.cityCtrl.setValue(city)
    // Sincroniza com o HomeComponent
    if (this.currentHomeComponent) {
      this.currentHomeComponent.selectCity(city) // Assume que HomeComponent tem um método selectCity
    }
  }

  selectQuerySticky(query: string) {
    // Renomeado
    this.queryCtrl.setValue(query)
    // Sincroniza com o HomeComponent
    if (this.currentHomeComponent) {
      this.currentHomeComponent.selectQuery(query) // Assume que HomeComponent tem um método selectQuery
    }
  }

  onCityBlurSticky(event: FocusEvent) {
    // Renomeado
    // Lógica para blur na search bar sticky
  }
  // --- Fim dos métodos da SearchBarComponent (na toolbar sticky) ---

  get stickySearchBarClass() {
    return {
      "toolbar-search-bar": true,
      "sidebar-fechada": !this.sidebarAberta,
    }
  }

  private _filter(val: string, list: string[]): string[] {
    const filter = val.toLowerCase()
    return list.filter((item) => item.toLowerCase().includes(filter))
  }

  // Método para lidar com componentes de rota ativados
  onOutletActivate(component: any) {
    console.log("onOutletActivate - Componente ativado:", component)
    if (component instanceof HomeComponent) {
      console.log("onOutletActivate - Componente é HomeComponent.")
      this.currentHomeComponent = component
      console.log("onOutletActivate - currentHomeComponent definido:", this.currentHomeComponent)
      this.currentHomeComponent.cityCtrl.valueChanges.subscribe((city) => {
        if (this.showStickySearchBar) {
          this.cityCtrl.setValue(city || "", { emitEvent: false })
          console.log("onOutletActivate - cityCtrl da Sticky Search atualizado:", city)
        }
      })
      this.currentHomeComponent.queryCtrl.valueChanges.subscribe((query) => {
        if (this.showStickySearchBar) {
          this.queryCtrl.setValue(query || "", { emitEvent: false })
          console.log("onOutletActivate - queryCtrl da Sticky Search atualizado:", query)
        }
      })
      this.citySuggestions = this.currentHomeComponent.todasCidades
      this.querySuggestions = this.currentHomeComponent.todasCozinhas
      console.log("onOutletActivate - Sugestões de cidades e cozinhas sincronizadas.")
    } else {
      this.currentHomeComponent = null
      console.log("onOutletActivate - Componente NÃO é HomeComponent. currentHomeComponent nulo.")
    }
  }

  // --- Métodos para notificações ---

  /**
   * Carrega as notificações do usuário
   */
  carregarNotificacoes(): void {
    this.carregandoAvaliacoes = true
    this.notificacoesService.getNotificacoes().subscribe({
      next: (notificacoes) => {
        this.avaliacoesPendentes = notificacoes
        this.carregandoAvaliacoes = false
      },
      error: (error) => {
        console.error("Erro ao carregar notificações:", error)
        this.carregandoAvaliacoes = false
      },
    })
  }

  /**
   * Verifica se há notificações pendentes
   */
  get temAvaliacoesPendentes(): boolean {
    return this.avaliacoesPendentes.length > 0
  }

  /**
   * Formata a data da reserva para exibição
   */
  formatarDataReserva(dataReserva: string): string {
    const data = new Date(dataReserva)
    return data.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  /**
   * Abre o diálogo de avaliação
   */
  abrirDialogoAvaliacao(notificacao: Notificacao): void {
    const dialogData: AvaliacaoDialogData = {
      idReserva: notificacao.id, // Usa o id da notificação como idReserva
      nomeRestaurante: notificacao.nomeRestaurante,
      dataReserva: notificacao.dataReserva,
      idNotificacao: notificacao.id // ID para deletar após envio
    }

    const dialogRef = this.dialog.open(AvaliacaoDialogComponent, {
      data: dialogData,
      width: "500px",
      maxWidth: "90vw",
      disableClose: false,
    })

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.success) {
        // Remove a notificação da lista
        this.avaliacoesPendentes = this.avaliacoesPendentes.filter((n) => n.id !== result.idNotificacao)
        // Recarrega as notificações para garantir sincronização
        this.carregarNotificacoes()
        this.toastService.success("Avaliação enviada com sucesso!")
      }
    })
  }

  // --- Métodos para responsividade ---

  /**
   * Abre o drawer mobile
   */
  openDrawer(): void {
    this.isDrawerVisible = true
  }

  closeDrawer(): void {
    this.isDrawerVisible = false
  }

  trackByAvaliacaoId(index: number, notificacao: Notificacao): string {
    return notificacao.id
  }

  /**
   * Define a aba ativa no menu de notificações
   */
  setActiveTab(tab: "pendentes" | "lidas"): void {
    this.activeTab = tab
  }

  abrirDialogFiltros(): void {
    const dialogData: FiltrosDialogData = {
      diaSemana: this.filtrosAtuais.diaSemana,
      notaMinima: this.filtrosAtuais.notaMinima,
      servicos: this.filtrosAtuais.servicos,
    }

    const dialogRef = this.dialog.open(FiltrosDialogComponent, {
      data: dialogData,
      width: "600px",
      maxWidth: "90vw",
      disableClose: false,
    })

    dialogRef.afterClosed().subscribe((result: FiltrosDialogResult | null) => {
      if (result) {
        this.filtrosAtuais = result
        console.log("Filtros aplicados na toolbar:", this.filtrosAtuais)
        this.toastService.success("Filtros aplicados com sucesso!")
      }
    })
  }

  expandSearch(): void {
    this.searchExpanded = true
  }

  collapseSearch(): void {
    this.searchExpanded = false
  }

  openCitySelector(): void {
    this.showCityDropdown = !this.showCityDropdown
  }
}