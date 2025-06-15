// src/app/pages/layout-principal/layout-principal.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { StickySearchService } from '../../core/services/sticky-search.service';
import { SearchBarComponent } from '../home/search-bar/search-bar.component';
import { FormControl } from '@angular/forms';
import { Observable, of, startWith, map } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';
import { HomeComponent } from '../home/home.component'; // Importe HomeComponent para verificar a instância
import { RestauranteService } from '../../core/services/restaurante.service'; // NEW IMPORT

@Component({
  selector: 'app-layout-principal',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MatIconModule, MatButtonModule, MatMenuModule, CommonModule, SearchBarComponent],
  templateUrl: './layout-principal.component.html',
  styleUrls: ['./layout-principal.component.scss'],
  animations: [
    trigger('searchBarAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-30px)' }),
        animate('300ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0, transform: 'translateY(-30px)' })),
      ]),
    ])
  ]
})
export class LayoutPrincipalComponent implements OnInit {
  sidebarAberta = true; // Estado inicial da sidebar
  showStickySearchBar = false; // Controla a visibilidade da search bar no cabeçalho
  cidade = ''; // Usado para a search bar principal (HomeComponent)
  query = ''; // Usado para a search bar principal (HomeComponent)
  citySuggestions: string[] = [];
  querySuggestions: string[] = [];
  showCityDropdown = false;
  showQueryDropdown = false;

  // FormControls para a SearchBarComponent (na toolbar sticky)
  cityCtrl: FormControl = new FormControl('');
  queryCtrl: FormControl = new FormControl('');
  filteredCities$: Observable<string[]> = of([]);
  filteredQueries$: Observable<string[]> = of([]);

  // Referência para o HomeComponent ativo no router-outlet
  private currentHomeComponent: HomeComponent | null = null;

  private router = inject(Router);
  private auth = inject(AuthService);
  private stickyService = inject(StickySearchService);
  private restauranteService = inject(RestauranteService); // NEW INJECTION

  constructor() {
    // Assina o estado da search bar sticky do StickySearchService
    this.stickyService.sticky$.subscribe(val => {
      const isHome = this.router.url.startsWith('/home');
      this.showStickySearchBar = val && isHome;
      // Se a sticky search bar aparecer, e tivermos um HomeComponent ativo,
      // sincroniza os FormControls da sticky search bar com os do HomeComponent.
      if (this.showStickySearchBar && this.currentHomeComponent) {
        this.cityCtrl.setValue(this.currentHomeComponent.cityCtrl.value, { emitEvent: false });
        this.queryCtrl.setValue(this.currentHomeComponent.queryCtrl.value, { emitEvent: false });
      }
    });

    // Atualiza a visibilidade da search bar sticky ao navegar para fora de /home
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const isHome = this.router.url.startsWith('/home');
        if (!isHome) {
          this.showStickySearchBar = false;
          this.currentHomeComponent = null; // Limpa a referência quando sai da Home
        }
      }
    });

    // Inicializa o autocomplete para a search bar sticky
    this.filteredCities$ = this.cityCtrl.valueChanges.pipe(
      startWith(this.cityCtrl.value ?? ''),
      map(val => this._filter(val ?? '', this.citySuggestions))
    );
    this.filteredQueries$ = this.queryCtrl.valueChanges.pipe(
      startWith(''),
      map(val => this._filter(val ?? '', this.querySuggestions))
    );

    // NEW: Subscribe to suggestions from RestauranteService
    this.restauranteService.allCities$.subscribe(cities => {
      this.citySuggestions = cities;
    });
    this.restauranteService.allCuisines$.subscribe(cuisines => {
      this.querySuggestions = cuisines;
    });
  }

  ngOnInit() {
    // Inicializa o estado da sidebar no serviço ao carregar o LayoutPrincipal
    this.stickyService.setSidebarAberta(this.sidebarAberta);
  }

  get userName(): string {
    return this.auth.perfil?.nome || 'Usuário';
  }

  get userType(): string {
    return this.auth.perfil?.tipo === 'RESTAURANTE' ? 'Restaurante' : 'Cliente';
  }

  get userAvatar(): string {
    if (this.auth.perfil?.tipo === 'RESTAURANTE') {
      return 'assets/png/avatar-padrao-restaurante-tavola.png';
    }
    return 'assets/png/avatar-padrao-tavola-cordeirinho.png';
  }

  get isCliente(): boolean {
    return this.auth.hasRole('CLIENTE');
  }

  get isRestaurante(): boolean {
    return this.auth.hasRole('RESTAURANTE');
  }

  handleSidebarClick(event: MouseEvent) {
    if ((event.target as HTMLElement).closest('button')) {
      return;
    }
    if (!this.sidebarAberta) {
      this.sidebarAberta = true;
      this.stickyService.setSidebarAberta(true); // Notifica o serviço sobre o estado da sidebar
    }
  }

  toggleSidebar() {
    this.sidebarAberta = !this.sidebarAberta;
    this.stickyService.setSidebarAberta(this.sidebarAberta); // Notifica o serviço sobre o estado da sidebar
  }

  logout() {
    this.auth.clearAuthData(); // Usa o método centralizado do AuthService
    this.router.navigate(['/login']);
  }

  // --- Métodos para a SearchBarComponent (na toolbar sticky) ---
  onSearchSticky() {
    console.log('Sticky Search - Início');
    console.log('Sticky Search - Buscar:', this.cityCtrl.value, this.queryCtrl.value);
    const currentUrl = this.router.url;
    const isCurrentlyOnHomePage = this.currentHomeComponent !== null; // True if HomeComponent is currently active
    console.log('Sticky Search - Rota atual:', currentUrl, 'Está na Home (componente ativo):', isCurrentlyOnHomePage);
    console.log('Sticky Search - currentHomeComponent (antes da busca):', this.currentHomeComponent);

    // Se não estamos na Home ou currentHomeComponent não está ativo, navega para Home primeiro
    if (!isCurrentlyOnHomePage) {
      console.log('Sticky Search - Não está na Home (componente ativo). Navegando para /home...');
      this.router.navigate(['/home']).then(() => {
        // Adiciona um pequeno delay para garantir que o HomeComponent seja ativado
        // e o currentHomeComponent seja populado via onOutletActivate.
        setTimeout(() => {
          if (this.currentHomeComponent) {
            console.log('Sticky Search - HomeComponent ativo após navegação. Sincronizando e buscando...');
            this.currentHomeComponent.cityCtrl.setValue(this.cityCtrl.value, { emitEvent: false });
            this.currentHomeComponent.queryCtrl.setValue(this.queryCtrl.value, { emitEvent: false });
            this.currentHomeComponent.onSearch();
            console.log('Sticky Search - onSearch do HomeComponent acionado.');
          } else {
            console.error('Sticky Search - HomeComponent ainda não disponível após navegação. Tentar novamente ou avisar usuário.');
            // Poderia adicionar uma nova tentativa ou uma mensagem ao usuário aqui
          }
        }, 200); // Aumentado o delay para 200ms
      });
    } else {
      // Já está na Home e o componente está ativo, apenas sincroniza e aciona a busca
      console.log('Sticky Search - Já na rota /home e componente ativo. Sincronizando e buscando diretamente.');
      this.currentHomeComponent!.cityCtrl.setValue(this.cityCtrl.value, { emitEvent: false }); // Use ! para garantir que não é null
      this.currentHomeComponent!.queryCtrl.setValue(this.queryCtrl.value, { emitEvent: false });
      this.currentHomeComponent!.onSearch();
      console.log('Sticky Search - onSearch do HomeComponent acionado diretamente.');
    }
  }

  onCityInputSticky(event: any) { 
    if (this.currentHomeComponent) {
      const value = event.target.value;
      // Usa as sugestões do LayoutPrincipal, que agora vêm do RestauranteService
      this.citySuggestions = this._filter(value, this.citySuggestions);
      this.filteredCities$ = of(this.citySuggestions); 
      this.currentHomeComponent.cityCtrl.setValue(value, { emitEvent: false }); 
    }
  }

  selectCitySticky(city: string) { // Renomeado
    this.cityCtrl.setValue(city);
    // Sincroniza com o HomeComponent
    if (this.currentHomeComponent) {
      this.currentHomeComponent.selectCity(city); // Assume que HomeComponent tem um método selectCity
    }
  }

  selectQuerySticky(query: string) { // Renomeado
    this.queryCtrl.setValue(query);
    // Sincroniza com o HomeComponent
    if (this.currentHomeComponent) {
      this.currentHomeComponent.selectQuery(query); // Assume que HomeComponent tem um método selectQuery
    }
  }

  onCityBlurSticky(event: FocusEvent) { // Renomeado
    // Lógica para blur na search bar sticky
  }
  // --- Fim dos métodos da SearchBarComponent (na toolbar sticky) ---


  get stickySearchBarClass() {
    return {
      'toolbar-search-bar': true,
      'sidebar-fechada': !this.sidebarAberta
    };
  }

  private _filter(val: string, list: string[]): string[] {
    const filter = val.toLowerCase();
    return list.filter(item =>
      item.toLowerCase().includes(filter)
    );
  }

  // Método para lidar com componentes de rota ativados
  onOutletActivate(component: any) {
    console.log('onOutletActivate - Componente ativado:', component);
    if (component instanceof HomeComponent) {
      console.log('onOutletActivate - Componente é HomeComponent.');
      this.currentHomeComponent = component; 
      console.log('onOutletActivate - currentHomeComponent definido:', this.currentHomeComponent);
      this.currentHomeComponent.cityCtrl.valueChanges.subscribe(city => {
        if (this.showStickySearchBar) {
          this.cityCtrl.setValue(city || '', { emitEvent: false });
          console.log('onOutletActivate - cityCtrl da Sticky Search atualizado:', city);
        }
      });
      this.currentHomeComponent.queryCtrl.valueChanges.subscribe(query => {
        if (this.showStickySearchBar) {
          this.queryCtrl.setValue(query || '', { emitEvent: false });
          console.log('onOutletActivate - queryCtrl da Sticky Search atualizado:', query);
        }
      });
      this.citySuggestions = this.currentHomeComponent.todasCidades;
      this.querySuggestions = this.currentHomeComponent.todasCozinhas;
      console.log('onOutletActivate - Sugestões de cidades e cozinhas sincronizadas.');
    } else {
      this.currentHomeComponent = null; 
      console.log('onOutletActivate - Componente NÃO é HomeComponent. currentHomeComponent nulo.');
    }
  }
}