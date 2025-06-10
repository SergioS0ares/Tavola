export interface LoginResponse {
  id: string
  token: string;
  refreshToken: string;
  name: string;
  tipoUsuario: 'CLIENTE' | 'RESTAURANTE';
}
