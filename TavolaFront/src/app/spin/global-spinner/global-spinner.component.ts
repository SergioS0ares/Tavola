import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-global-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './global-spinner.component.html',
  styleUrls: ['./global-spinner.component.scss'],
})
export class GlobalSpinnerComponent {
  // Nenhuma lógica extra necessária para o novo spinner
}
