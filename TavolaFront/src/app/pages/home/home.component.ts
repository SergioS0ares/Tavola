import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, startWith, map } from 'rxjs';

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
    MatAutocompleteModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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

  ngOnInit() {
    this.filteredCities$ = this.cityCtrl.valueChanges.pipe(
      startWith(this.cityCtrl.value ?? ''),
      map(val => this._filter(val ?? '', this.allCities))
    );
    this.filteredQueries$ = this.queryCtrl.valueChanges.pipe(
      startWith(''),
      map(val => this._filter(val ?? '', this.allQueries))
    );
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
