import { Component, type OnInit, type OnDestroy } from "@angular/core"
import { CommonModule } from "@angular/common"
import type { Router } from "@angular/router"
import { NzButtonModule } from "ng-zorro-antd/button"
import { NzIconModule } from "ng-zorro-antd/icon"
import type { NzMessageService } from "ng-zorro-antd/message"
import { NzSpinModule } from "ng-zorro-antd/spin"
import { NzResultModule } from "ng-zorro-antd/result"
import { DefaultLoginLayoutComponent } from "../default-login-layout/default-login-layout.component"

@Component({
  selector: "app-verificacao-email",
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzIconModule, NzSpinModule, NzResultModule, DefaultLoginLayoutComponent],
  templateUrl: "./verificacao-email.component.html",
  styleUrls: ["./verificacao-email.component.scss"],
})
export class VerificacaoEmailComponent implements OnInit, OnDestroy {
  emailUsuario = ""
  reenviarDisabilitado = false
  tempoRestante = 0
  intervalId: any
  isLoading = false
  emailEnviado = true

  constructor(
    private router: Router,
    private message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.emailUsuario =
      localStorage.getItem("emailCadastro") || sessionStorage.getItem("emailCadastro") || "seu-email@exemplo.com"
  }

  async reenviarEmail(): Promise<void> {
    if (this.reenviarDisabilitado) return

    this.isLoading = true

    try {
      // Simula chamada para API de reenvio
      await new Promise((resolve) => setTimeout(resolve, 1500))

      this.message.success("E-mail reenviado com sucesso!")

      this.iniciarCooldown()
    } catch (error) {
      this.message.error("Erro ao reenviar e-mail. Tente novamente.")
    } finally {
      this.isLoading = false
    }
  }

  private iniciarCooldown(): void {
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

  voltarLogin(): void {
    this.router.navigate(["/login"])
  }

  irParaConfirmacao(): void {
    this.router.navigate(["/confirmar-codigo"])
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }
}
