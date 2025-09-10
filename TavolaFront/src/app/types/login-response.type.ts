export interface LoginResponse {
  id: string
  token: string;
  refreshToken: string;
  nome: string;
  tipoUsuario: 'CLIENTE' | 'RESTAURANTE';
  imagem: string;
  email?: string;
  imagemBackground?: string | null;
}

export interface RegisterResponse {
  mensagem: string;
  idVerificacao: string;
}
