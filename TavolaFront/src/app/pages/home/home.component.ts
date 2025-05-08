import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, startWith, map } from 'rxjs';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { StickySearchService } from '../../core/services/sticky-search.service';

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
    SearchBarComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  // Substitui cidade:string e query:string por FormControls:
  cityCtrl  = new FormControl('Paris');
  queryCtrl = new FormControl('');

  // Listas originais
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

  // Observables filtrados
  filteredCities$!: Observable<string[]>;
  filteredQueries$!: Observable<string[]>;

  restaurants = [
    {
      nome: 'L\'Osteria Paris Chatelet',
      tipo: 'Italiano',
      avaliacao: 4.8,
      imagem: 'assets/jpg/restauranteOsso.jpg'
    },
    {
      nome: 'Café Terry',
      tipo: 'Francês',
      avaliacao: 4.5,
      imagem: 'assets/jpg/restauranteOsso.jpg'
    },
    {
      nome: 'Les Rupins',
      tipo: 'Francês',
      avaliacao: 3.8,
      imagem: 'assets/jpg/restauranteOsso.jpg'
    },
    {
      nome: 'L\'Imperatif',
      tipo: 'Francês',
      avaliacao: 2.2,
      imagem: 'assets/jpg/restauranteOsso.jpg'
    },
    {
      nome: 'L\'Imperatif',
      tipo: 'Francês',
      avaliacao: 2.2,
      imagem: 'assets/jpg/restauranteOsso.jpg'
    }
  ];

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

  constructor(private stickyService: StickySearchService) {}

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
  }

  ngAfterViewInit() {
    if (this.searchBarHome) {
      const observer = new IntersectionObserver(entries => {
        const entry = entries[0];
        this.stickySearch = !entry.isIntersecting;
        this.stickyService.setSticky(this.stickySearch);
      }, { threshold: 0 });
      observer.observe(this.searchBarHome.nativeElement);
    }
    if (this.bannerRef) {
      const observer = new IntersectionObserver(entries => {
        const entry = entries[0];
        this.stickySearch = !entry.isIntersecting;
        this.stickyService.setSticky(this.stickySearch);
      }, { threshold: 0.1 });
      observer.observe(this.bannerRef.nativeElement);
    }
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
    this.showQueryDropdown = false;
  }

  public getStarCount(avaliacao: number): number {
    return Math.round(avaliacao / 2);
  }

  public selectCity(city: string) {
    this.cidade = city;
    this.showCityDropdown = false;
  }
}
