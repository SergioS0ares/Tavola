import { Component, type OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

// NG-ZORRO IMPORTS
import { NzInputOtpComponent } from "ng-zorro-antd/input"; // << 1. O NOVO COMPONENTE!
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";

// SEU COMPONENTE DE LAYOUT
import { DefaultLoginLayoutComponent } from "../default-login-layout/default-login-layout.component";

@Component({
  selector: "app-confirmar-codigo",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    // NG-ZORRO MODULES
    NzButtonModule,
    NzIconModule,
    NzInputOtpComponent, // << 2. ADICIONADO AOS IMPORTS
    // SEU COMPONENTE
    DefaultLoginLayoutComponent,
  ],
  templateUrl: "./confirmar-codigo.component.html",
  styleUrls: ["./confirmar-codigo.component.scss"],
})
export class ConfirmarCodigoComponent implements OnInit {
  idUsuario = "";
  codigo = ""; // O código agora é uma string única
  carregando = false;

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private toastr = inject(ToastrService); // << 3. USANDO O TOASTR

  ngOnInit() {
    this.idUsuario = this.route.snapshot.params["id"];
    if (!this.idUsuario) {
      // Usando o Toastr para o alerta
      this.toastr.warning("Sessão inválida. Redirecionando para login...");
      this.router.navigate(["/login"]);
    }
  }

  // A lógica de input manual foi completamente removida!

  verificarCodigo() {
    if (!this.isCodigoCompleto()) {
      this.toastr.error("Por favor, digite o código completo de 6 dígitos.");
      return;
    }

    this.carregando = true;

    // Simula a validação com a API
    setTimeout(() => {
      if (this.codigo === "123456") { // Código de teste
        this.toastr.success("Conta verificada com sucesso!");
        this.router.navigate(["/home"]);
      } else {
        this.toastr.error("Código inválido ou expirado. Tente novamente.");
        this.limparCodigo();
      }
      this.carregando = false;
    }, 1500);
  }
  
  // Limpa o campo do código
  limparCodigo() {
    this.codigo = "";
  }

  voltarVerificacao() {
    this.router.navigate(["/verificacao-email"]);
  }

  isCodigoCompleto(): boolean {
    return this.codigo.length === 6;
  }
}