export interface LoginResponse {
  token: string;
  refreshToken: string;
  name: string;
  tipoUsuario: 'CLIENTE' | 'RESTAURANTE';
}
