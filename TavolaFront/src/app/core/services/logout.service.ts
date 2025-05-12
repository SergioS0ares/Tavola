import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class LogoutService {
  private router = inject(Router);
  private http = inject(HttpClient);
  private auth = inject(AuthService);

  logout(): void {
    // Limpa token e perfil em memória
    this.auth.clearToken();

    // Chama o backend para limpar o cookie HttpOnly
    this.http.post("http://localhost:8080/auth/logout", {}, { withCredentials: true }).subscribe({
      complete: () => {
        this.router.navigate(["/auth/login"]);
      },
      error: () => {
        this.router.navigate(["/auth/login"]);
      }
    });
  }
}

