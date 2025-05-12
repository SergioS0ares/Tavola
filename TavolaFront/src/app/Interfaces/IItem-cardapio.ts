export interface IItemCardapio {
  id?: string;                // uuid
  nome: string;              // ex: "Risotto de Funghi"
  descricao?: string;        // ex: "cremoso, com parmesão"
  preco: number;    
  disponivel?: boolean;         // ex: 45.90
  imagemBase64?: string;           // URL da imagem
  categoria: {
  categoria: {
    nome: string;
  };
  tags: {
    tag: string;
  }[];
}   }[];
