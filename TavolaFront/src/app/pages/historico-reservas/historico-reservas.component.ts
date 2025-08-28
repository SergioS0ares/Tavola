import { Component, type OnInit, inject } from "@angular/core"
import { CommonModule, DatePipe } from "@angular/common"
import { Router, RouterModule } from "@angular/router"
import { of } from "rxjs"
import { delay, finalize } from "rxjs/operators"

// INTERFACES E SERVIÇOS
import type { IReservaHistorico } from "../../Interfaces/IReservaHistorico.interface"
import { AuthService } from "../../core/services/auth.service"
import { GlobalSpinnerService } from "../../core/services/global-spinner.service"

// COMPONENTES DE UI
import { MatCardModule } from "@angular/material/card"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"


const mockHistoricoReservas: IReservaHistorico[] = [
  {
    idReserva: "1",
    idRestaurante: "rest1",
    nomeRestaurante: "Cantina da Nona",
    imagemRestaurante: "assets/jpg/restauranteModelo.jpg",
    enderecoResumido: "Setor Bueno, Goiânia",
    data: "2025-08-20",
    horario: "20:30",
    quantidadePessoas: 2,
    status: "CONCLUÍDA",
    comentariosPreferenciaReserva: "Mesa perto da janela, por favor. É uma comemoração de aniversário.",
  },
  {
    idReserva: "2",
    idRestaurante: "rest2",
    nomeRestaurante: "Sushi Prime",
    imagemRestaurante: "assets/jpg/restauranteModelo.jpg",
    enderecoResumido: "Jardim Goiás, Goiânia",
    data: "2025-08-15",
    horario: "19:00",
    quantidadePessoas: 4,
    status: "CONCLUÍDA",
  },
  {
    idReserva: "3",
    idRestaurante: "rest3",
    nomeRestaurante: "Steak House Imperial",
    imagemRestaurante: "assets/jpg/restauranteModelo.jpg",
    enderecoResumido: "Setor Marista, Goiânia",
    data: "2025-07-28",
    horario: "21:00",
    quantidadePessoas: 3,
    status: "CANCELADA",
  },
  {
    idReserva: "4",
    idRestaurante: "rest1",
    nomeRestaurante: "Cantina da Nona",
    imagemRestaurante: "assets/jpg/restauranteModelo.jpg",
    enderecoResumido: "Setor Bueno, Goiânia",
    data: "2025-09-10",
    horario: "12:00",
    quantidadePessoas: 5,
    status: "CONFIRMADA",
    comentariosPreferenciaReserva: "Precisaremos de uma cadeira de bebê.",
  },
]

@Component({
  selector: "app-historico-reservas",
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: "./historico-reservas.component.html",
  styleUrl: "./historico-reservas.component.scss",
  providers: [DatePipe],
})
export class HistoricoReservasComponent implements OnInit {
  private authService = inject(AuthService)
  private router = inject(Router)
  private datePipe = inject(DatePipe)
  private spinnerService = inject(GlobalSpinnerService)

  public historicoAgrupado: { mesAno: string; reservas: IReservaHistorico[] }[] = []

  ngOnInit(): void {
    this.spinnerService.mostrar()

    of(mockHistoricoReservas)
      .pipe(
        delay(1500),
        finalize(() => this.spinnerService.ocultar()),
      )
      .subscribe({
        next: (data: IReservaHistorico[]) => {
          this.historicoAgrupado = this.agruparReservasPorMes(data)
        },
        error: (err: any) => {
          console.error("Erro ao buscar histórico de reservas:", err)
        },
      })
  }

  private agruparReservasPorMes(reservas: IReservaHistorico[]): { mesAno: string; reservas: IReservaHistorico[] }[] {
    if (!reservas || reservas.length === 0) {
      return []
    }
    const sortedReservas = reservas.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())

    const grupos: { [key: string]: IReservaHistorico[] } = {}

    for (const reserva of sortedReservas) {
      const mesAno = this.datePipe.transform(reserva.data, "MMMM 'de' yyyy", "pt-BR")
      const chave = mesAno!.charAt(0).toUpperCase() + mesAno!.slice(1)

      if (!grupos[chave]) {
        grupos[chave] = []
      }
      grupos[chave].push(reserva)
    }

    return Object.keys(grupos).map((chave) => ({
      mesAno: chave,
      reservas: grupos[chave],
    }))
  }

  public getIconePorStatus(status: string): string {
    switch (status) {
      case "CONCLUÍDA":
        return "check_circle"
      case "CONFIRMADA":
        return "schedule"
      case "CANCELADA":
        return "cancel"
      default:
        return "circle"
    }
  }

  public getStatusText(status: string): string {
    switch (status) {
      case "CONCLUÍDA":
        return "Concluída"
      case "CONFIRMADA":
        return "Confirmada"
      case "CANCELADA":
        return "Cancelada"
      default:
        return status
    }
  }

  public getImagemUrl(path: string | null): string {
    if (path && path.startsWith("assets/")) {
      return path
    }
    return this.authService.getAbsoluteImageUrl(path)
  }

  public verRestaurante(idRestaurante: string): void {
    if (idRestaurante) {
      this.router.navigate(["/restaurante", idRestaurante])
    }
  }

  public reservarNovamente(idRestaurante: string): void {
    if (idRestaurante) {
      this.router.navigate(["/restaurante", idRestaurante])
    }
  }
}
