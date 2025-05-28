import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, startWith, map } from 'rxjs';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { StickySearchService } from '../../core/services/sticky-search.service';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

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
export class HomeComponent implements OnInit, AfterViewInit {
  // Substitui cidade:string e query:string por FormControls:
  cityCtrl = new FormControl('Paris');
  queryCtrl = new FormControl('');

  // Listas originais
  allCities = [
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

  // Observables filtrados
  filteredCities$!: Observable<string[]>;
  filteredQueries$!: Observable<string[]>;

  restaurants = [
    { id: '1', nome: "L'Osteria Paris Chatelet", tipo: 'Italiano', avaliacao: 8.0, imagem: 'assets/jpg/restauranteOsso.jpg', endereco: '123 Rue de Rivoli, Paris' },
    { id: '2', nome: 'Café Terry', tipo: 'Francês', avaliacao: 5.0, imagem: 'assets/jpg/restauranteOsso.jpg', endereco: '456 Avenue des Champs-Élysées, Paris' },
    { id: '3', nome: 'Les Rupins', tipo: 'Francês', avaliacao: 3.8, imagem: 'assets/jpg/restauranteOsso.jpg', endereco: '789 Boulevard Saint-Germain, Paris' },
    { id: '5', nome: 'Le Gourmet Burger', tipo: 'Japonês', avaliacao: 4.5, imagem: 'assets/jpg/restauranteOsso.jpg', endereco: '202 Rue de la Huchette, Paris' },
     { id: '6', nome: 'Sushi Place', tipo: 'Japonês', avaliacao: 4.0, imagem: 'assets/jpg/restauranteOsso.jpg', endereco: '303 Rue Sainte-Anne, Paris' },
      { id: '7', nome: 'La Dolce Vita', tipo: 'Japonês', avaliacao: 4.7, imagem: 'assets/jpg/restauranteOsso.jpg', endereco: '404 Rue des Martyrs, Paris' },
    { id: '8', nome: 'Bistro Parisian', tipo: 'Japonês', avaliacao: 4.1, imagem: 'assets/jpg/restauranteOsso.jpg', endereco: '505 Rue de Buci, Paris' }
  ];

  // New property to hold grouped restaurants
  groupedRestaurants: { [key: string]: any[] } = {};

  // Para autocomplete e dropdown
  showCityDropdown = false;
  showQueryDropdown = false;
  cidade = 'Paris';
  query = '';
  filteredCitySuggestions = this.allCities;
  querySuggestions = this.allQueries;

  @ViewChild('searchBarHome', { static: false }) searchBarHome!: ElementRef;
  @ViewChild('banner', { static: false }) bannerRef!: ElementRef;
  @ViewChild('searchSentinel', { static: false }) searchSentinel!: ElementRef;
  stickySearch = false;

  // Use ViewChildren to get all elements with #scrollContainer
  @ViewChildren('scrollContainer') scrollContainers!: QueryList<ElementRef>;

  // Keep track of scroll positions for each cuisine group
  scrollPositions: { [key: string]: number } = {};

  private sidebarSubscription!: Subscription;
  sidebarAberta = true;

  // Output para emitir mudança na cidade do Home
  @Output() cityChangeInHome = new EventEmitter<string>();

  constructor(private stickyService: StickySearchService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.filteredCities$ = this.cityCtrl.valueChanges.pipe(
      startWith(this.cityCtrl.value ?? ''),
      map(val => this._filter(val ?? '', this.allCities))
    );
    this.filteredQueries$ = this.queryCtrl.valueChanges.pipe(
      startWith(''),
      map(val => this._filter(val ?? '', this.allQueries))
    );
    // Sticky inteligente
    setTimeout(() => this.initStickyObserver(), 0);
    // Group restaurants by cuisine type
    this.groupRestaurantsByCuisine();

     // Subscribe to sidebar state changes from the service
     this.sidebarSubscription = this.stickyService.sidebarAberta$.subscribe(aberta => {
       this.sidebarAberta = aberta;
     });

    // Emit initial city value and subscribe to changes
    this.cityChangeInHome.emit(this.cityCtrl.value ?? '');
    this.cityCtrl.valueChanges.subscribe(value => {
      this.cityChangeInHome.emit(value ?? '');
    });
  }

  ngAfterViewInit() {
    if (this.searchSentinel) {
      const obs = new IntersectionObserver(
        ([entry]) => {
          this.stickySearch = !entry.isIntersecting;
          this.stickyService.setSticky(this.stickySearch);
        },
        { threshold: [0] }
      );
      obs.observe(this.searchSentinel.nativeElement);
    }
    // Initialize scroll positions after view is initialized
    this.scrollContainers.changes.subscribe(() => {
       // Re-initialize scroll positions and check arrows when containers change (e.g., data update)
       this.getCuisineTypes().forEach(cuisine => {
         this.scrollPositions[cuisine] = 0;
       });
       this.checkScrollArrows();
    });
     this.checkScrollArrows(); // Initial check
  }

  initStickyObserver() {
    const searchBar = document.getElementById('searchBarHome');
    if (!searchBar) return;
    const observer = new IntersectionObserver(entries => {
      this.stickySearch = !entries[0].isIntersecting;
      this.stickyService.setSticky(this.stickySearch);
    }, { threshold: 0.99 });
    observer.observe(searchBar);
  }

  private _filter(val: string, list: string[]) {
    const filter = val.toLowerCase();
    return list.filter(item =>
      item.toLowerCase().includes(filter)
    );
  }

  onSearch() {
    console.log('Buscar:', this.cityCtrl.value, this.queryCtrl.value);
  }

  public _displayFn(option: string) {
    return option || '';
  }

  onCityInput(event: any) {
    const value = event.target.value.toLowerCase();
    this.filteredCitySuggestions = this.allCities.filter(city => city.toLowerCase().includes(value));
  }

  onCityBlur(event: FocusEvent) {
    setTimeout(() => { this.showCityDropdown = false; }, 120);
  }

  selectQuery(q: string) {
    this.query = q;
    this.queryCtrl.setValue(q, { emitEvent: false });
    this.showQueryDropdown = false;
  }

  public getStarCount(avaliacao: number): number {
    return Math.round(avaliacao / 2);
  }

  public selectCity(city: string) {
    this.cidade = city;
    this.cityCtrl.setValue(city, { emitEvent: false });
    this.showCityDropdown = false;
  }

   // Updated method to group restaurants - initialize scroll position here too
   groupRestaurantsByCuisine(): void {
     this.groupedRestaurants = this.restaurants.reduce((acc: { [key: string]: any[] }, restaurant) => {
       const cuisine = restaurant.tipo;
       // Ensure cuisine is not undefined before using it as an index
       if (cuisine) {
         if (!acc[cuisine]) {
           acc[cuisine] = [];
         }
         acc[cuisine].push(restaurant);
       }
       return acc;
     }, {});
     // Initialize scroll positions when grouping is done
      this.getCuisineTypes().forEach(cuisine => {
       this.scrollPositions[cuisine] = 0;
     });
   }

   getCuisineTypes(): string[] {
     return Object.keys(this.groupedRestaurants);
   }

   // New methods for scrolling
   scrollRestaurants(cuisine: string, direction: 'left' | 'right'): void {
     const index = this.getCuisineTypes().indexOf(cuisine);
     if (index === -1 || !this.scrollContainers || this.scrollContainers.length === 0) return;

     const container = this.scrollContainers.toArray()[index]?.nativeElement;
     if (!container) return;

     const scrollAmount = container.clientWidth * 0.8; // Scroll by 80% of container width

     if (direction === 'left') {
       container.scrollLeft -= scrollAmount;
     } else {
       container.scrollLeft += scrollAmount;
     }
     // Update scroll position for the specific cuisine
     this.scrollPositions[cuisine] = container.scrollLeft;
     // No need to call checkScrollArrows here because the [disabled] binding
     // in the template will react to the scrollLeft change.

     // Manually trigger change detection after scroll
     this.cdr.detectChanges();
   }

   // New methods to determine if scrolling is possible
   canScrollLeft(cuisine: string): boolean {
      const index = this.getCuisineTypes().indexOf(cuisine);
      if (index === -1 || !this.scrollContainers || this.scrollContainers.length === 0) return false;
      const container = this.scrollContainers.toArray()[index]?.nativeElement;
      if (!container) return false;
      // Allow scrolling left if the current scroll position is greater than a small threshold
      return container.scrollLeft > 10; // Use a small threshold due to potential floating point inaccuracies
   }

   canScrollRight(cuisine: string): boolean {
      const index = this.getCuisineTypes().indexOf(cuisine);
      if (index === -1 || !this.scrollContainers || this.scrollContainers.length === 0) return false;
      const container = this.scrollContainers.toArray()[index]?.nativeElement;
       if (!container) return false;
      // Allow scrolling right if there's content beyond the current view
      // Use a small tolerance for comparison due to potential floating point inaccuracies
      return container.scrollWidth > container.clientWidth && container.scrollLeft < container.scrollWidth - container.clientWidth - 10;
   }

   // Method to explicitly check and update arrow visibility state (optional, driven by template binding)
  // updateArrowVisibility(cuisine: string): void {
  //   // This method could be called after scrolling or data changes
  //   // to force an update of the canScrollLeft/Right bindings if needed.
  // }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.sidebarSubscription) {
      this.sidebarSubscription.unsubscribe();
    }
    // Remove resize listener
    window.removeEventListener('resize', this.checkScrollArrows.bind(this));
  }

  // Método para verificar a visibilidade das setas de rolagem
  checkScrollArrows(): void {
    // Add logic to check arrow visibility here
    this.cdr.detectChanges(); // Also trigger change detection here
  }
}
