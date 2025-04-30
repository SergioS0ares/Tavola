import { Injectable } from '@angular/core';

export interface Perfil {
  tipo: 'CLIENTE' | 'RESTAURANTE';
  nome: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _perfil: Perfil | null = null;

  setTokens(token: string, refresh: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refresh);
  }

  setPerfil(perfil: Perfil) {
    this._perfil = perfil;
    localStorage.setItem('tipoUsuario', perfil.tipo);
    localStorage.setItem('userName', perfil.nome);
  }

  get perfil(): Perfil | null {
    if (this._perfil) return this._perfil;
    const tipo = localStorage.getItem('tipoUsuario') as Perfil['tipo'];
    const nome = localStorage.getItem('userName') || '';
    if (tipo && nome) {
      this._perfil = { tipo, nome };
      return this._perfil;
    }
    return null;
  }

  hasRole(role: 'CLIENTE' | 'RESTAURANTE'): boolean {
    return this.perfil?.tipo === role;
  }
} 