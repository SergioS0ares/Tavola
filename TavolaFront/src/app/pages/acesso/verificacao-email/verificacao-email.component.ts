import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { Router } from "@angular/router"
import { NzButtonModule } from "ng-zorro-antd/button"
import { NzIconModule } from "ng-zorro-antd/icon"
import { NzMessageService } from "ng-zorro-antd/message"

@Component({
  selector: "app-verificacao-email",
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzIconModule],
  templateUrl: "./verificacao-email.component.html",
  styleUrls: ["./verificacao-email.component.scss"],
})
export class VerificacaoEmailComponent implements OnInit {
  emailUsuario = ""
  reenviarDisabilitado = false
  tempoRestante = 0
  intervalId: any

  constructor(
    private router: Router,
    private message: NzMessageService,
  ) {}

  ngOnInit() {
    // Pega o email do localStorage ou sessionStorage se disponível
    this.emailUsuario = localStorage.getItem("emailCadastro") || "seu-email@exemplo.com"
  }

  reenviarEmail() {
    if (this.reenviarDisabilitado) return

    // Simula chamada para API de reenvio
    this.message.success("E-mail reenviado com sucesso!")

    // Desabilita botão por 60 segundos
    this.reenviarDisabilitado = true
    this.tempoRestante = 60

    this.intervalId = setInterval(() => {
      this.tempoRestante--
      if (this.tempoRestante <= 0) {
        this.reenviarDisabilitado = false
        clearInterval(this.intervalId)
      }
    }, 1000)
  }

  voltarLogin() {
    this.router.navigate(["/login"])
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }
}
