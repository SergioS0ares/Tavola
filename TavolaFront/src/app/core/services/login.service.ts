import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse, RegisterResponse } from '../../types/login-response.type';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';
import { RefreshResponse } from '../../types/refresh-token.type';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = `${environment.apiUrl}/auth`;

  constructor(private httpClient: HttpClient, private auth: AuthService) {}

  login(email: string, senha: string): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.apiUrl}/login`, { email, senha }, { withCredentials: true }).pipe(
      tap((value) => {
        this.auth.setToken(value.token);
        this.auth.setPerfil({ tipo: value.tipoUsuario, nome: value.nome, imagem: value.imagem });
      })
    );
  }

  signup(data: any): Observable<RegisterResponse> {
    return this.httpClient.post<RegisterResponse>(`${this.apiUrl}/register`, data, { withCredentials: true });
  }

  refreshToken(): Observable<LoginResponse> {
    console.log('[LoginService] calling /auth/refresh');
    return this.httpClient
      .post<LoginResponse>(`${this.apiUrl}/refresh`, {}, { withCredentials: true })
      .pipe(
        tap(res => {
          console.log('[LoginService] refresh response received:', res);
          // atualiza token na AuthService
          this.auth.setToken(res.token);
          // se precisar atualizar perfil:
          this.auth.setPerfil({ tipo: res.tipoUsuario, nome: res.nome, imagem: res.imagem, id: res.id});
        })
      );
  }

  reenviarCodigo(email: string): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/reenviar-codigo`, { email });
  }

  verificarCodigo(idVerificacao: string, codigo: string, mantenhaMeConectado: boolean): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.apiUrl}/verificar`, {
      idVerificacao,
      codigo,
      mantenhaMeConectado
    }).pipe(
      tap((value) => {
        this.auth.setToken(value.token);
        this.auth.setPerfil({ 
          tipo: value.tipoUsuario, 
          nome: value.nome, 
          id: value.id,
          imagem: value.imagem 
        });
      })
    );
  }
}
