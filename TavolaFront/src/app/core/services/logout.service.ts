import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class LogoutService {
  private router = inject(Router);

  logout(): void {
    // Remove o token de autenticação
    localStorage.removeItem("token");
    
    // Remove quaisquer outros dados do usuário que possam existir
    localStorage.clear();
    
    // Redireciona para a página de login
    this.router.navigate(["/auth/login"]);
  }
}

