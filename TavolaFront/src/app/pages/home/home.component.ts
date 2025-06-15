// src/app/pages/home/home.component.ts
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList, HostListener, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, startWith, map, Subscription } from 'rxjs';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { StickySearchService } from '../../core/services/sticky-search.service';
import { RouterModule, Router } from '@angular/router';
import { RestauranteService } from '../../core/services/restaurante.service';
import { IPesquisaRestauranteResponse } from '../../Interfaces/IPesquisaRestaurante.interface';
import { MapsService } from '../../core/services/maps.service';
import { IRestaurante } from '../../Interfaces/IRestaurante.interface';
import { GlobalSpinnerService } from '../../core/services/global-spinner.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    SearchBarComponent,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  cityCtrl  = new FormControl('');
  queryCtrl = new FormControl('');

  todasCidades: string[] = [];
  todasCozinhas: string[] = [];

  filteredCities$!: Observable<string[]>;
  filteredQueries$!: Observable<string[]>;

  filteredCitySuggestions: string[] = [];
  querySuggestions: string[] = [];

  showCityDropdown = false;
  showQueryDropdown = false;

  restaurants: IRestaurante[] = [];
  groupedRestaurants: Record<string, IRestaurante[]> = {};

  @ViewChild('searchBarHome', { static: false }) searchBarHome!: ElementRef;
  @ViewChild('banner', { static: false }) bannerRef!: ElementRef;
  @ViewChild('searchSentinel', { static: false }) searchSentinel!: ElementRef;
  stickySearch = false;

  isSidebarOpen: boolean = true;
  private sidebarSubscription!: Subscription;

  scrollStates: { [cuisine: string]: { canScrollLeft: boolean; canScrollRight: boolean; } } = {};
  @ViewChildren('scrollContainer') scrollContainers!: QueryList<ElementRef>;


  constructor(
    private stickyService: StickySearchService,
    private cdr: ChangeDetectorRef,
    private restauranteService: RestauranteService,
    private mapsService: MapsService,
    private router: Router,
    private spinnerService: GlobalSpinnerService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.filteredCitySuggestions = [];
    this.querySuggestions = [];

    // Subscribe to city and cuisine suggestions from RestauranteService
    this.restauranteService.allCities$.subscribe(cities => {
      this.todasCidades = cities;
      this.filteredCitySuggestions = [...this.todasCidades]; // Update filtered suggestions for direct use
    });
    this.restauranteService.allCuisines$.subscribe(cuisines => {
      // Sugestões gerais de cozinha (agora definidas localmente no HomeComponent)
      const sugestoesGeraisCozinha = [
        'Ver todos os restaurantes',
        'Melhor avaliado'
      ];
      // Combina as cozinhas do serviço com as sugestões gerais, removendo duplicatas
      this.todasCozinhas = Array.from(new Set([...cuisines, ...sugestoesGeraisCozinha])).sort();
      this.querySuggestions = [...this.todasCozinhas]; // Update filtered suggestions for direct use
    });

    this.filteredCities$ = this.cityCtrl.valueChanges.pipe(
      startWith(this.cityCtrl.value ?? ''),
      map(val => this._filter(val ?? '', this.todasCidades))
    );
    this.filteredQueries$ = this.queryCtrl.valueChanges.pipe(
      startWith(''),
      map(val => this._filter(val ?? '', this.todasCozinhas))
    );

    // Buscar restaurantes do backend (already triggers popularSugestoes inside service)
    this.spinnerService.mostrar();
    this.restauranteService.getRestaurantes().subscribe({
      next: (restaurants) => {
        const coordPromises = (restaurants || []).map(async (r) => {
          if (!r.coordenadas) {
            const endereco = `${r.endereco.rua}, ${r.endereco.numero}, ${r.endereco.bairro}, ${r.endereco.cidade} - ${r.endereco.estado}, ${r.endereco.cep}`;
            try {
              const coords = await this.mapsService.getCoordinatesFromAddress(endereco).toPromise();
              if (coords) {
                r.coordenadas = { latitude: coords.lat, longitude: coords.lng };
              }
            } catch {}
          }
          return r;
        });
        Promise.all(coordPromises).then(rests => {
          this.setRestaurants(rests);
          this.spinnerService.ocultar();
        });
      },
      error: (err) => {
        this.spinnerService.ocultar();
      }
    });

    const cuisineTypes = this.getCuisineTypes();
    if (Array.isArray(cuisineTypes)) {
      cuisineTypes.forEach(cuisine => {
        this.scrollStates[cuisine] = { canScrollLeft: false, canScrollRight: false };
      });
    }

    this.sidebarSubscription = this.stickyService.sidebarAberta$.subscribe(isOpen => {
      this.isSidebarOpen = isOpen;
      this.scrollContainers.forEach(containerRef => {
        const cuisine = containerRef.nativeElement.dataset.cuisine;
        if (cuisine) this.checkScrollArrows(containerRef.nativeElement, cuisine);
      });
      this.cdr.detectChanges();
    });

    setTimeout(() => {
        if (this.searchSentinel) {
            this.initStickyObserver(this.searchSentinel.nativeElement);
        }
    }, 0);
  }

  ngAfterViewInit() {
    if (this.scrollContainers) {
      this.scrollContainers.changes.subscribe((list: QueryList<ElementRef>) => {
          list.forEach(containerRef => {
              const cuisine = containerRef.nativeElement.dataset.cuisine;
              if (cuisine && !containerRef.nativeElement._hasScrollListener) {
                  containerRef.nativeElement.addEventListener('scroll', (event: Event) => this.onRestaurantScroll(event, cuisine));
                  containerRef.nativeElement._hasScrollListener = true;
              }
              this.checkScrollArrows(containerRef.nativeElement, cuisine || 'default');
          });
          this.cdr.detectChanges();
      });

      setTimeout(() => {
        this.scrollContainers.forEach(containerRef => {
          const cuisine = containerRef.nativeElement.dataset.cuisine;
          if (cuisine) this.checkScrollArrows(containerRef.nativeElement, cuisine);
        });
        this.cdr.detectChanges();
      }, 0);
    }
  }

  ngOnDestroy() {
    if (this.sidebarSubscription) {
      this.sidebarSubscription.unsubscribe();
    }
    this.scrollContainers.forEach(containerRef => {
        if (containerRef.nativeElement._hasScrollListener) {
            containerRef.nativeElement.removeEventListener('scroll', (event: Event) => this.onRestaurantScroll(event, ''));
            containerRef.nativeElement._hasScrollListener = false;
        }
    });
  }

  initStickyObserver(elementToObserve: HTMLElement) {
    const observer = new IntersectionObserver(entries => {
     
      this.stickySearch = !entries[0].isIntersecting;
      this.stickyService.setSticky(this.stickySearch);
      this.cdr.detectChanges();
    }, {
      threshold: [0, 1]
    });
    observer.observe(elementToObserve);
  }

  private _filter(val: string, list: string[]): string[] {
    const filterValue = val.toLowerCase();
    return list.filter(item => item.toLowerCase().includes(filterValue));
  }

  onSearch() {
    this.spinnerService.mostrar();
    this.restaurants = [];
    this.groupedRestaurants = {};

    const cidadeBusca = this.cityCtrl.value?.trim();
    const termoBusca = this.queryCtrl.value?.trim();

    console.log('HomeComponent - onSearch acionado.');
    console.log('HomeComponent - cidadeBusca:', cidadeBusca);
    console.log('HomeComponent - termoBusca:', termoBusca);

    if (cidadeBusca && termoBusca) {
      this.restauranteService.getRestaurantesPorCidade(cidadeBusca).subscribe({
        next: (restaurantsPorCidade) => {
          const filteredByTerm = restaurantsPorCidade.filter(r => 
            r.nome.toLowerCase().includes(termoBusca.toLowerCase()) || 
            (r.tipoCozinha && r.tipoCozinha.toLowerCase().includes(termoBusca.toLowerCase()))
          );
          this.setRestaurants(filteredByTerm);
          this.spinnerService.ocultar();
        },
        error: (err) => {
          this.toastr.error('Erro ao buscar restaurantes por cidade.');
          console.error(err);
          this.spinnerService.ocultar();
        }
      });
    } else if (cidadeBusca) {
      this.restauranteService.getRestaurantesPorCidade(cidadeBusca).subscribe({
        next: (restaurantsPorCidade) => {
          this.setRestaurants(restaurantsPorCidade);
          this.spinnerService.ocultar();
        },
        error: (err) => {
          this.toastr.error('Erro ao buscar restaurantes por cidade.');
          console.error(err);
          this.spinnerService.ocultar();
        }
      });
    } else if (termoBusca) {
      this.restauranteService.getPesquisarRestaurantes(termoBusca, 0, 10).subscribe({
        next: (response: IPesquisaRestauranteResponse) => {
          this.setRestaurants(response.content || []);
          this.spinnerService.ocultar();
        },
        error: (err: any) => {
          this.toastr.error('Erro ao pesquisar restaurantes.');
          console.error(err);
          this.spinnerService.ocultar();
        }
      });
    } else {
      this.restauranteService.getRestaurantes().subscribe({
        next: (allRestaurants) => {
          this.setRestaurants(allRestaurants);
          this.spinnerService.ocultar();
        },
        error: (err) => {
          this.toastr.error('Erro ao carregar todos os restaurantes.');
          console.error(err);
          this.spinnerService.ocultar();
        }
      });
      this.toastr.info('Por favor, digite um termo ou selecione uma cidade para buscar.');
      this.spinnerService.ocultar();
    }
  }

  onCityInput(event: any) {
    const value = event.target.value;
    this.filteredCitySuggestions = this._filter(value, this.todasCidades);
  }

  onCityBlur(event: FocusEvent) {
    setTimeout(() => { this.showCityDropdown = false; }, 120);
  }

  public selectQuery(q: string) {
    this.queryCtrl.setValue(q);
    this.showQueryDropdown = false;
  }

  public getStarCount(r: IRestaurante): number {
    return Math.round((r.mediaAvaliacao || 0) / 2);
  }

  public selectCity(city: string) {
    this.cityCtrl.setValue(city);
    this.showCityDropdown = false;
  }

  groupRestaurantsByCuisine(restaurants: IRestaurante[]): Record<string, IRestaurante[]> {
    if (!Array.isArray(restaurants)) return {};
    return restaurants.reduce((acc: Record<string, IRestaurante[]>, restaurant) => {
      const type = restaurant.tipoCozinha || 'Outros';
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(restaurant);
      return acc;
    }, {});
  }

  formatarEndereco(endereco: IRestaurante['endereco']): string {
    if (!endereco) return 'Endereço não informado';
    return `${endereco.rua}, ${endereco.numero} - ${endereco.bairro}, ${endereco.cidade}`;
  }

  getCuisineTypes(): string[] {
    return this.groupedRestaurants ? Object.keys(this.groupedRestaurants) : [];
  }

  onRestaurantScroll(event: Event, cuisine: string): void {
    const container = event.target as HTMLElement;
    this.checkScrollArrows(container, cuisine);
  }

  canScrollLeft(cuisine: string): boolean {
    return this.scrollStates[cuisine]?.canScrollLeft || false;
  }

  canScrollRight(cuisine: string): boolean {
    return this.scrollStates[cuisine]?.canScrollRight || false;
  }

  checkScrollArrows(container: HTMLElement, cuisine: string): void {
    const canScrollLeft = container.scrollLeft > 0;
    const canScrollRight = container.scrollWidth > container.clientWidth &&
                           container.scrollLeft < container.scrollWidth - container.clientWidth - 5;

    if (this.scrollStates[cuisine] &&
        (this.scrollStates[cuisine].canScrollLeft !== canScrollLeft ||
         this.scrollStates[cuisine].canScrollRight !== canScrollRight)) {
      this.scrollStates[cuisine].canScrollLeft = canScrollLeft;
      this.scrollStates[cuisine].canScrollRight = canScrollRight;
      this.cdr.detectChanges();
    }
  }

  scrollRestaurants(cuisine: string, direction: 'left' | 'right'): void {
    const containers = this.scrollContainers.toArray();
    const containerRef = containers.find(c => c.nativeElement.dataset.cuisine === cuisine);

    if (!containerRef) return;

    const container = containerRef.nativeElement;
    const scrollAmount = container.clientWidth * 0.75;

    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  }

  setRestaurants(restaurants: IRestaurante[]) {
    if (JSON.stringify(this.restaurants) !== JSON.stringify(restaurants)) {
      this.restaurants = restaurants;
      this.groupedRestaurants = this.groupRestaurantsByCuisine(restaurants);
    }
  }

  navigateToRestaurante(r: IRestaurante) {
    this.router.navigate(['/home/agendamento-reservas-restaurante', r.id]);
  }

  getImagemRestaurante(r: IRestaurante): string {
    if (r.imagens && r.imagens.length > 0 && r.imagens[0]) {
      return r.imagens[0].startsWith('/') ? 'http://localhost:8080' + r.imagens[0] : r.imagens[0];
    }
    return 'assets/jpg/restauranteOsso.jpg';
  }

  getEnderecoFormatado(r: IRestaurante): string {
    if (!r.endereco) return 'Endereço não informado';
    const { rua, numero, bairro, cidade, estado } = r.endereco;
    return `${rua}, ${numero} - ${bairro}, ${cidade} - ${estado}`;
  }

  getTotalAvaliacoes(r: IRestaurante): number {
    return r.totalDeAvaliacoes || 0;
  }
}