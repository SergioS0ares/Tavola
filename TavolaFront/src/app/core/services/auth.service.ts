// auth.service.ts
import { Injectable } from '@angular/core';

export interface Perfil {
  tipo: 'CLIENTE' | 'RESTAURANTE';
  nome: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'token';
  private readonly USER_NAME_KEY = 'userName';
  private readonly USER_TYPE_KEY = 'tipoUsuario';

  private _token: string | null = null;
  private _perfil: Perfil | null = null;

  constructor() {
    this._token = localStorage.getItem(this.TOKEN_KEY);
    const nome = localStorage.getItem(this.USER_NAME_KEY);
    const tipo = localStorage.getItem(this.USER_TYPE_KEY) as 'CLIENTE' | 'RESTAURANTE' | null;
    if (nome && tipo) {
      this._perfil = { nome, tipo };
    }
    // console.log('[AuthService] Estado inicial:', { token: this._token, perfil: this._perfil });
  }

  setAuthData(token: string, nome: string, tipoUsuario: 'CLIENTE' | 'RESTAURANTE') {
    this.setToken(token);
    this.setPerfil({ nome, tipo: tipoUsuario });
    localStorage.setItem(this.USER_NAME_KEY, nome);
    localStorage.setItem(this.USER_TYPE_KEY, tipoUsuario);
  }

  setToken(token: string) {
    this._token = token;
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    // Poderia ler de this._token, mas ler de localStorage garante consistência entre abas/sessões
    return localStorage.getItem(this.TOKEN_KEY);
  }

  setPerfil(perfil: Perfil) {
    this._perfil = perfil;
    localStorage.setItem(this.USER_NAME_KEY, perfil.nome);
    localStorage.setItem(this.USER_TYPE_KEY, perfil.tipo);
  }

  get perfil(): Perfil | null {
    if (this._perfil) {
      return this._perfil;
    }
    // Tenta recarregar do localStorage se o estado interno estiver nulo mas o token existir
    const nome = localStorage.getItem(this.USER_NAME_KEY);
    const tipo = localStorage.getItem(this.USER_TYPE_KEY) as 'CLIENTE' | 'RESTAURANTE' | null;
    if (nome && tipo && this.getToken()) {
      this._perfil = { nome, tipo };
      return this._perfil;
    }
    return null;
  }

  clearAuthData() { // Método para logout
    this._token = null;
    this._perfil = null;
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_NAME_KEY);
    localStorage.removeItem(this.USER_TYPE_KEY);
    // localStorage.removeItem('refreshToken'); // Se você gerencia o refreshToken aqui também
    // console.log('[AuthService] Dados de autenticação limpos.');
  }

  hasRole(role: 'CLIENTE' | 'RESTAURANTE'): boolean {
    return this.perfil?.tipo === role;
  }
}