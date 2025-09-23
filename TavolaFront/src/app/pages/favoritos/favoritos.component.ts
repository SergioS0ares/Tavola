import { Component, type OnInit, inject } from "@angular/core"
import { CommonModule } from "@angular/common"
import { Router, RouterModule } from "@angular/router"

// INTERFACES E SERVIÇOS
import { FavoritosService, type IFavorito } from "../../core/services/favoritos.service"
import { GlobalSpinnerService } from "../../core/services/global-spinner.service"
import { AuthService } from "../../core/services/auth.service"

// COMPONENTES DE UI
import { MatCardModule } from "@angular/material/card"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
import { MatChipsModule } from "@angular/material/chips"

@Component({
  selector: "app-favoritos",
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatButtonModule, MatChipsModule],
  templateUrl: "./favoritos.component.html",
  styleUrl: "./favoritos.component.scss",
})
export class FavoritosComponent implements OnInit {
  private favoritosService = inject(FavoritosService)
  private router = inject(Router)
  private spinnerService = inject(GlobalSpinnerService)
  private authService = inject(AuthService)

  public favoritos: IFavorito[] = []

  ngOnInit(): void {
    this.carregarFavoritos()
  }

  private carregarFavoritos(): void {
    this.spinnerService.mostrar()

    this.favoritosService.getFavoritos()
      .subscribe({
        next: (data: IFavorito[]) => {
          this.favoritos = data
          this.spinnerService.ocultar()
        },
        error: (err: any) => {
          console.error("Erro ao buscar favoritos:", err)
          this.spinnerService.ocultar()
        },
      })
  }

  public getImagemUrl(path: string | null): string {
    if (path && path.startsWith("assets/")) {
      return path
    }
    return this.authService.getAbsoluteImageUrl(path)
  }

  public verRestaurante(idRestaurante: string): void {
    if (idRestaurante) {
      this.router.navigate(["/home/agendamento-reservas-restaurante", idRestaurante])
    }
  }

  public getPrecoMedio(valor: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor)
  }

  public getAvaliacaoFormatada(media: number, total: number): string {
    return `${media.toFixed(1)} (${total} avaliações)`
  }
}
