import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Input() cidade: string = '';
  @Input() query: string = '';
  @Input() citySuggestions: string[] = [];
  @Input() querySuggestions: string[] = [];
  @Input() showCityDropdown = false;
  @Input() showQueryDropdown = false;
  @Output() cidadeChange = new EventEmitter<string>();
  @Output() queryChange = new EventEmitter<string>();
  @Output() search = new EventEmitter<void>();
  @Output() cityInput = new EventEmitter<any>();
  @Output() queryInput = new EventEmitter<any>();
  @Output() selectCity = new EventEmitter<string>();
  @Output() selectQuery = new EventEmitter<string>();
  @Output() cityBlur = new EventEmitter<FocusEvent>();

  onCidadeInput(event: any) { this.cityInput.emit(event); }
  onQueryInput(event: any) { this.queryInput.emit(event); }
  onSelectCity(city: string) { this.selectCity.emit(city); }
  onSelectQuery(query: string) { this.selectQuery.emit(query); }
  onSearch() { this.search.emit(); }
  onCidadeChange(val: string) { this.cidadeChange.emit(val); }
  onQueryChange(val: string) { this.queryChange.emit(val); }
  onCityBlur(event: FocusEvent) { this.cityBlur.emit(event); }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.input-group')) {
      this.showCityDropdown = false;
      this.showQueryDropdown = false;
    }
  }
} 