export interface IItemCardapio {
  id: string;                // uuid ou código interno
  nome: string;              // ex: "Risotto de Funghi"
  descricao?: string;        // ex: "cremoso, com parmesão"
  preco: number;             // ex: 45.90
  imagemBase64?: string;     // só para mock, depois será URL
  categoriaId?: string;      // se usar categorias separadas
  disponivel: boolean;       // true = disponível
  tempoPreparo?: number;     // minutos
  tags?: string[];           // ex: ["Vegano","Sem Glúten"]
  ordem?: number;            // posição no grid
}
