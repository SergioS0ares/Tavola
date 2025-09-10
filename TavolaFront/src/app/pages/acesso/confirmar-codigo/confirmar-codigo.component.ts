import { Component, type OnInit, inject } from "@angular/core"
import { CommonModule } from "@angular/common"
import { Router, ActivatedRoute } from "@angular/router"
import { FormsModule } from "@angular/forms"
import { ToastrService } from "ngx-toastr"
import { LoginService } from "../../../core/services/login.service"

// NG-ZORRO IMPORTS
import { NzInputOtpComponent } from "ng-zorro-antd/input"
import { NzButtonModule } from "ng-zorro-antd/button"
import { NzIconModule, NZ_ICONS } from "ng-zorro-antd/icon"
import { NzCheckboxModule } from "ng-zorro-antd/checkbox"
import {
  SafetyCertificateOutline,
  LoadingOutline,
  ClockCircleOutline,
  ReloadOutline,
  CheckCircleOutline,
  CloseCircleOutline,
  InfoCircleOutline
} from '@ant-design/icons-angular/icons'

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
    NzCheckboxModule,
    // SEU COMPONENTE
    DefaultLoginLayoutComponent,
  ],
  templateUrl: "./confirmar-codigo.component.html",
  styleUrls: ["./confirmar-codigo.component.scss"],
  providers: [
    {
      provide: NZ_ICONS,
      useValue: [
        SafetyCertificateOutline,
        LoadingOutline,
        ClockCircleOutline,
        ReloadOutline,
        CheckCircleOutline,
        CloseCircleOutline,
        InfoCircleOutline
      ]
    }
  ]
})
export class ConfirmarCodigoComponent implements OnInit {
  idVerificacao = ""
  codigo = ""
  carregando = false
  reenviando = false
  hasError = false
  statusMessage = ""
  statusType: "success" | "error" | "info" = "info"
  mantenhaMeConectado = false
  emailUsuario = ""

  private router = inject(Router)
  private route = inject(ActivatedRoute)
  private toastr = inject(ToastrService)
  private loginService = inject(LoginService)

  ngOnInit() {
    this.idVerificacao = this.route.snapshot.params["id"]
    this.emailUsuario = localStorage.getItem("emailCadastro") || ""
    if (!this.idVerificacao) {
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

    this.loginService.verificarCodigo(this.idVerificacao, this.codigo, this.mantenhaMeConectado).subscribe({
      next: (res) => {
        this.statusMessage = "Código verificado com sucesso!"
        this.statusType = "success"
        this.toastr.success("Conta verificada com sucesso!")

        // Limpa os dados temporários
        localStorage.removeItem('emailCadastro')
        localStorage.removeItem('idVerificacao')

        setTimeout(() => {
          // Redireciona baseado no tipo de usuário
          if (res.tipoUsuario === 'CLIENTE') {
            this.router.navigate(["/home"])
          } else {
            this.router.navigate(["/reserva"])
          }
        }, 1000)
      },
      error: (err: any) => {
        this.hasError = true
        const errorMessage = err.error?.erro || "Código inválido ou expirado. Tente novamente."
        this.statusMessage = errorMessage
        this.statusType = "error"
        this.toastr.error(errorMessage)
        this.limparCodigo()
      },
      complete: () => {
        this.carregando = false
      }
    })
  }

  reenviarCodigo() {
    this.reenviando = true
    this.statusMessage = "Reenviando código..."
    this.statusType = "info"

    this.loginService.reenviarCodigo(this.emailUsuario).subscribe({
      next: () => {
        this.reenviando = false
        this.statusMessage = "Novo código enviado para seu e-mail!"
        this.statusType = "success"
        this.toastr.success("Novo código enviado!")

        // Limpa a mensagem após alguns segundos
        setTimeout(() => {
          this.statusMessage = ""
        }, 3000)
      },
      error: (err: any) => {
        this.reenviando = false
        const errorMessage = err.error?.message || "Erro ao reenviar código. Tente novamente."
        this.statusMessage = errorMessage
        this.statusType = "error"
        this.toastr.error(errorMessage)
      }
    })
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