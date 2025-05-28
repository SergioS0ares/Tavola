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
import { RouterModule } from '@angular/router';

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
  cityCtrl  = new FormControl('Paris');
  queryCtrl = new FormControl('');

  allCities  = [
    'Paris, França',
    'Lisboa, Portugal',
    'Barcelona, Espanha',
    'Roma, Itália',
    'Madri, Espanha',
    'Florença, Itália'
  ];
  allQueries = [
    'Ver todos os restaurantes',
    'Top 100 Paris',
    'Melhor avaliado',
    'Italiano',
    'Francês',
    'Japonês'
  ];

  filteredCities$!: Observable<string[]>;
  filteredQueries$!: Observable<string[]>;

  filteredCitySuggestions: string[] = [];
  querySuggestions: string[] = [];

  showCityDropdown = false;
  showQueryDropdown = false;
  cidade = 'Paris';
  query = '';

  restaurants: any[] = [
    { id: '1', nome: 'L\'Osteria Paris Chatelet', tipo: 'Italiano', avaliacao: 8.0, imagem: 'assets/jpg/restauranteModelo.jpg', endereco: 'Rua das Flores, 123, Paris' },
    { id: '2', nome: 'Café Terry', tipo: 'Francês', avaliacao: 5.0, imagem: 'assets/jpg/restauranteModelo.jpg', endereco: 'Avenida Principal, 456, Paris' },
    { id: '3', nome: 'Les Rupins', tipo: 'Francês', avaliacao: 3.8, imagem: 'assets/jpg/restauranteModelo.jpg', endereco: 'Praça Central, 789, Paris' },
    { id: '4', nome: 'Le Gourmet Burger', tipo: 'Hamburgueria', avaliacao: 4.5, imagem: 'assets/jpg/restauranteModelo.jpg', endereco: 'Rua do Sabor, 101, Paris' },
    { id: '5', nome: 'Sushi Place', tipo: 'Japonês', avaliacao: 4.0, imagem: 'assets/jpg/restauranteModelo.jpg', endereco: 'Alameda dos Peixes, 202, Paris' },
    { id: '6', nome: 'La Dolce Vita', tipo: 'Italiano', avaliacao: 4.7, imagem: 'assets/jpg/restauranteModelo.jpg', endereco: 'Via Roma, 303, Paris' },
    { id: '7', nome: 'Bistro Parisian', tipo: 'Francês', avaliacao: 4.1, imagem: 'assets/jpg/restauranteModelo.jpg', endereco: 'Rue de la Paix, 404, Paris' },
    { id: '8', nome: 'Cantina da Nonna', tipo: 'Italiano', avaliacao: 9.2, imagem: 'assets/jpg/restauranteModelo.jpg', endereco: 'Travessa da Massa, 505, Paris' },
    { id: '9', nome: 'Temaki Express', tipo: 'Japonês', avaliacao: 3.5, imagem: 'assets/jpg/restauranteModelo.jpg', endereco: 'Rua do Sushi, 606, Paris' },
    { id: '10', nome: 'El Fuego Mexicano', tipo: 'Mexicano', avaliacao: 4.9, imagem: 'assets/jpg/restauranteModelo.jpg', endereco: 'Calle del Sol, 707, Paris' },
  ];

  groupedRestaurants: { [cuisine: string]: any[] } = {};

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
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.filteredCitySuggestions = [...this.allCities];
    this.querySuggestions = [...this.allQueries];

    this.filteredCities$ = this.cityCtrl.valueChanges.pipe(
      startWith(this.cityCtrl.value ?? ''),
      map(val => this._filter(val ?? '', this.allCities))
    );
    this.filteredQueries$ = this.queryCtrl.valueChanges.pipe(
      startWith(''),
      map(val => this._filter(val ?? '', this.allQueries))
    );

    this.groupedRestaurants = this.groupRestaurantsByCuisine(this.restaurants);

    this.getCuisineTypes().forEach(cuisine => {
      this.scrollStates[cuisine] = { canScrollLeft: false, canScrollRight: false };
    });

    this.sidebarSubscription = this.stickyService.sidebarAberta$.subscribe(isOpen => {
      this.isSidebarOpen = isOpen;
      this.scrollContainers.forEach(containerRef => {
        const cuisine = containerRef.nativeElement.dataset.cuisine;
        if (cuisine) this.checkScrollArrows(containerRef.nativeElement, cuisine);
      });
      this.cdr.detectChanges();
    });

    // --- CORREÇÃO: Usar searchSentinel para o IntersectionObserver ---
    // O IntersectionObserver deve observar o elemento '#searchSentinel' que é um ponto de referência
    // para a posição da search bar original.
    setTimeout(() => {
        if (this.searchSentinel) {
            this.initStickyObserver(this.searchSentinel.nativeElement);
        }
    }, 0);
    // --- FIM DA CORREÇÃO ---
  }

  ngAfterViewInit() {
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

  // --- CORREÇÃO: Ajustar a lógica do IntersectionObserver ---
  initStickyObserver(elementToObserve: HTMLElement) {
    const observer = new IntersectionObserver(entries => {
      // isIntersecting é true quando o elemento está visível (seja entrando ou saindo)
      // Queremos que stickySearch seja true QUANDO o elemento NÃO ESTÁ visível (sumiu da tela)
      this.stickySearch = !entries[0].isIntersecting;
      this.stickyService.setSticky(this.stickySearch);
      this.cdr.detectChanges(); // Força detecção de mudanças
    }, {
      // rootMargin permite expandir ou encolher a área de observação
      // '0px 0px -100% 0px' significa que a observação ocorre 100% abaixo do elemento raiz
      // Isso faz com que isIntersecting seja false quando o elemento está TOTALMENTE acima do viewport
      // ou totalmente abaixo do viewport.
      // Para o seu caso, queremos que ele se torne sticky quando a barra de pesquisa original
      // some da parte superior da tela.
      // Um threshold de 0.0 (0%) ou uma pequena margem superior negativa pode ser mais adequado.
      threshold: [0, 1] // Observa quando 0% ou 100% do elemento está visível
    });
    observer.observe(elementToObserve);
  }
  // --- FIM DA CORREÇÃO ---

  private _filter(val: string, list: string[]): string[] {
    const filterValue = val.toLowerCase();
    return list.filter(item => item.toLowerCase().includes(filterValue));
  }

  onSearch() {
    console.log('Buscar:', this.cityCtrl.value, this.queryCtrl.value);
  }

  onCityInput(event: any) {
    const value = event.target.value;
    this.filteredCitySuggestions = this.allCities.filter(city => city.includes(value));
  }

  onCityBlur(event: FocusEvent) {
    setTimeout(() => { this.showCityDropdown = false; }, 120);
  }

  selectQuery(q: string) {
    this.queryCtrl.setValue(q);
    this.query = q;
    this.showQueryDropdown = false;
  }

  public getStarCount(avaliacao: number): number {
    return Math.round(avaliacao / 2);
  }

  public selectCity(city: string) {
    this.cityCtrl.setValue(city);
    this.cidade = city;
    this.showCityDropdown = false;
  }

  groupRestaurantsByCuisine(restaurants: any[]): { [cuisine: string]: any[] } {
    return restaurants.reduce((acc, restaurant) => {
      const type = restaurant.tipo || 'Outros';
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(restaurant);
      return acc;
    }, {});
  }

  getCuisineTypes(): string[] {
    return Object.keys(this.groupedRestaurants);
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
}