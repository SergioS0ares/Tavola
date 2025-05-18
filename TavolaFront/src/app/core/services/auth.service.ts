import { Injectable } from '@angular/core';

export interface Perfil {
  tipo: 'CLIENTE' | 'RESTAURANTE';
  nome: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _perfil: Perfil | null = null;
  private readonly TOKEN_KEY = 'token';
  private _token: string | null = null;

  constructor() {
    // ao instanciar, já puxa o que está salvo
    this._token = localStorage.getItem(this.TOKEN_KEY);
    console.log('[AuthService] token inicial:', this._token);
  }
  setToken(token: string) {
    this._token = token;
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  clearToken() {
    this._token = null;
    this._perfil = null;
    localStorage.removeItem(this.TOKEN_KEY);
  }

  setPerfil(perfil: Perfil) {
    this._perfil = perfil;
  }

  get perfil(): Perfil | null {
    return this._perfil;
  }

  hasRole(role: 'CLIENTE' | 'RESTAURANTE'): boolean {
    return this.perfil?.tipo === role;
  }
} 