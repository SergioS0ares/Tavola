import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, of } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, FormsModule, ReactiveFormsModule, MatAutocompleteModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  animations: [
    trigger('searchBarAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-24px)' }),
        animate('250ms cubic-bezier(.4,0,.2,1)', style({ opacity: 1, transform: 'none' }))
      ]),
      transition(':leave', [
        animate('200ms cubic-bezier(.4,0,.2,1)', style({ opacity: 0, transform: 'translateY(-24px)' }))
      ])
    ])
  ]
})
export class SearchBarComponent {
  @Input() cidade: string = '';
  @Input() query: string = '';
  @Input() citySuggestions: string[] = [];
  @Input() querySuggestions: string[] = [];
  @Input() showCityDropdown = false;
  @Input() showQueryDropdown = false;
  @Input() cityCtrl: FormControl = new FormControl('');
  @Input() queryCtrl: FormControl = new FormControl('');
  @Input() filteredCities$: Observable<string[]> = of([]);
  @Input() filteredQueries$: Observable<string[]> = of([]);
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