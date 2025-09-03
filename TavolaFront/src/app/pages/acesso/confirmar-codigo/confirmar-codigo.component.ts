import { Component, type OnInit, inject } from "@angular/core"
import { CommonModule } from "@angular/common"
import { Router, ActivatedRoute } from "@angular/router"
import { FormsModule } from "@angular/forms"
import { ToastrService } from "ngx-toastr"

// NG-ZORRO IMPORTS
import { NzInputOtpComponent } from "ng-zorro-antd/input"
import { NzButtonModule } from "ng-zorro-antd/button"
import { NzIconModule } from "ng-zorro-antd/icon"

// SEU COMPONENTE DE LAYOUT
import { DefaultLoginLayoutComponent } from "../default-login-layout/default-login-layout.component"

@Component({
  selector: "app-confirmar-codigo",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    // NG-ZORRO MODULES
    NzButtonModule,
    NzIconModule,
    NzInputOtpComponent,
    // SEU COMPONENTE
    DefaultLoginLayoutComponent,
  ],
  templateUrl: "./confirmar-codigo.component.html",
  styleUrls: ["./confirmar-codigo.component.scss"],
})
export class ConfirmarCodigoComponent implements OnInit {
  idUsuario = ""
  codigo = ""
  carregando = false
  reenviando = false
  hasError = false
  statusMessage = ""
  statusType: "success" | "error" | "info" = "info"

  private router = inject(Router)
  private route = inject(ActivatedRoute)
  private toastr = inject(ToastrService)

  ngOnInit() {
    this.idUsuario = this.route.snapshot.params["id"]
    if (!this.idUsuario) {
      this.toastr.warning("Sessão inválida. Redirecionando para login...")
      this.router.navigate(["/login"])
    }
  }

  onCodigoChange() {
    this.hasError = false
    this.statusMessage = ""

    if (this.codigo.length === 6) {
      this.statusMessage = "Código completo! Clique em verificar."
      this.statusType = "success"
    } else if (this.codigo.length > 0) {
      this.statusMessage = `${this.codigo.length}/6 dígitos inseridos`
      this.statusType = "info"
    }
  }

  verificarCodigo() {
    if (!this.isCodigoCompleto()) {
      this.hasError = true
      this.statusMessage = "Por favor, digite o código completo de 6 dígitos."
      this.statusType = "error"
      this.toastr.error("Por favor, digite o código completo de 6 dígitos.")
      return
    }

    this.carregando = true
    this.statusMessage = "Verificando código..."
    this.statusType = "info"

    // Simula a validação com a API
    setTimeout(() => {
      if (this.codigo === "123456") {
        this.statusMessage = "Código verificado com sucesso!"
        this.statusType = "success"
        this.toastr.success("Conta verificada com sucesso!")

        setTimeout(() => {
          this.router.navigate(["/home"])
        }, 1000)
      } else {
        this.hasError = true
        this.statusMessage = "Código inválido ou expirado."
        this.statusType = "error"
        this.toastr.error("Código inválido ou expirado. Tente novamente.")
        this.limparCodigo()
      }
      this.carregando = false
    }, 1500)
  }

  reenviarCodigo() {
    this.reenviando = true
    this.statusMessage = "Reenviando código..."
    this.statusType = "info"

    // Simula reenvio
    setTimeout(() => {
      this.reenviando = false
      this.statusMessage = "Novo código enviado para seu e-mail!"
      this.statusType = "success"
      this.toastr.success("Novo código enviado!")

      // Limpa a mensagem após alguns segundos
      setTimeout(() => {
        this.statusMessage = ""
      }, 3000)
    }, 2000)
  }

  voltarVerificacao() {
    this.router.navigate(["/verificacao-email"])
  }

  isCodigoCompleto(): boolean {
    return this.codigo.length === 6
  }

  getStatusIcon(): string {
    switch (this.statusType) {
      case "success":
        return "check-circle"
      case "error":
        return "close-circle"
      default:
        return "info-circle"
    }
  }

  limparCodigo() {
    this.codigo = ""
    this.hasError = false
    this.statusMessage = ""
  }
}