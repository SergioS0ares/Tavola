export interface IRestaurante {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  endereco: {
    cep: string;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: string;
    complemento?: string;
  };
  tipoCozinha: string;
  descricao?: string;
  imagens: string[];
  mediaAvaliacao: number;
  totalDeAvaliacoes: number;
  horariosFuncionamento?: { diaSemana: string; abertura: string; fechamento: string }[];
  servicos?: string[];
  coordenadas?: { latitude: number; longitude: number };
} 