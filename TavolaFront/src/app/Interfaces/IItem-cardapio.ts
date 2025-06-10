export interface IItemCardapio {
  id?: string;                // uuid
  nome: string;              // ex: "Risotto de Funghi"
  descricao?: string;        // ex: "cremoso, com parmesão"
  preco: number;             // ex: 45.90
  imagem?: string;           // URL da imagem
  disponivel: boolean;       // true = disponível
  categoria: {
    nome: string;
  };
  tags: {
    tag: string;
  }[];
} 