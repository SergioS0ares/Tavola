import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../../types/login-response.type';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = "http://localhost:8080/auth";

  constructor(private httpClient: HttpClient, private auth: AuthService) {}

  login(email: string, senha: string): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.apiUrl}/login`, { email, senha }).pipe(
      tap((value) => {
        this.auth.setTokens(value.token, value.refreshToken);
        this.auth.setPerfil({ tipo: value.tipoUsuario, nome: value.name });
      })
    );
  }

  signup(data: any): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.apiUrl}/register`, data).pipe(
      tap((value) => {
        this.auth.setTokens(value.token, value.refreshToken);
        this.auth.setPerfil({ tipo: value.tipoUsuario, nome: value.name });
      })
    );
  }
}
