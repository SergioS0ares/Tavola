export interface IMesa {
  id: string;
  nome: string; // Ex: "05", "Deck VIP"
  tipo: 'retangular' | 'circular' | string; // Use string para flexibilidade
  capacidade: number;
  vip: boolean;
  ambienteId: string;

  // Propriedades adicionadas pelo frontend para controle de UI
  ocupada?: boolean;
  reservaId?: string;
}