import { Injectable } from '@angular/core';

export interface Perfil {
  tipo: 'CLIENTE' | 'RESTAURANTE';
  nome: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _perfil: Perfil | null = null;
  private _token: string | null = null;

  setToken(token: string) {
    this._token = token;
  }

  getToken(): string | null {
    return this._token;
  }

  clearToken() {
    this._token = null;
    this._perfil = null;
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