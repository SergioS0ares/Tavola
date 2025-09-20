export interface LoginResponse {
  id: string
  token: string;
  refreshToken: string;
  nome: string;
  tipoUsuario: 'CLIENTE' | 'RESTAURANTE';
  imagem: string;
  email?: string;
  imagemBackground?: string | null;
  idVerificacao?: string; // Para quando a conta precisa de verificação
  mensagem?: string; // Mensagem de resposta do backend
}

export interface RegisterResponse {
  mensagem: string;
  idVerificacao: string;
}
