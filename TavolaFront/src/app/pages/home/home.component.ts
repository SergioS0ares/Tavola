import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cidade = 'Paris';
  query = '';

  // Dropdown controls
  showCityDropdown = false;
  showQueryDropdown = false;

  // Sugestões de cidades
  citySuggestions = [
    'Paris, França',
    'Lisboa, Portugal',
    'Barcelona, Espanha',
    'Roma, Itália',
    'Madri, Espanha',
    'Florença, Itália'
  ];
  filteredCitySuggestions = [...this.citySuggestions];

  // Sugestões de busca
  querySuggestions = [
    'Ver todos os restaurantes',
    'Top 100 Paris',
    'Melhor avaliado',
    'Italiano',
    'Francês',
    'Japonês'
  ];

  onCityInput(event: any) {
    const value = event.target.value.toLowerCase();
    this.filteredCitySuggestions = this.citySuggestions.filter(city => city.toLowerCase().includes(value));
  }

  onCityBlur(event: FocusEvent) {
    // Timeout para permitir clique no dropdown
    setTimeout(() => { this.showCityDropdown = false; }, 120);
  }

  selectCity(city: string) {
    this.cidade = city;
    this.showCityDropdown = false;
    this.filteredCitySuggestions = [...this.citySuggestions];
  }

  selectQuery(query: string) {
    this.query = query;
    this.showQueryDropdown = false;
  }

  onSearch() {
    // Aqui você pode emitir o evento ou filtrar os restaurantes
    console.log('Buscar:', this.cidade, this.query);
  }

  closeDropdowns() {
    this.showCityDropdown = false;
    this.showQueryDropdown = false;
  }
}
