export interface LoginResponse {
  id: string
  token: string;
  refreshToken: string;
  nome: string;
  tipoUsuario: 'CLIENTE' | 'RESTAURANTE';
  imagem: string;
}
