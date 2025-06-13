import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { GlobalSpinnerService } from '../../core/services/global-spinner.service';

@Component({
  selector: "app-global-spinner",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./global-spinner.component.html",
  styleUrls: ["./global-spinner.component.scss"],
})
export class GlobalSpinnerComponent {
  visivel = false

  constructor(private spinnerService: GlobalSpinnerService) {
    this.spinnerService.visibilidade$.subscribe((v) => (this.visivel = v))
  }
}
