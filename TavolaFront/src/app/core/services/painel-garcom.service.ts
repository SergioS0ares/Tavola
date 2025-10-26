import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, interval } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

// Interfaces
export interface GarcomInfo {
  id: string;
  nome: string;
  foto?: string;
  turno: string;
  inicioTurno: Date;
}

export interface Reserva {
  id: string;
  cliente: string;
  horario: string;
  pessoas: number;
  telefone?: string;
}

export interface IReserva {
  id: string;
  cliente: string;
  data: Date;
  horario: string;
  pessoas: number;
  status: string;
  telefone?: string;
}

export interface Mesa {
  id: string;
  nome: string;
  capacidade: number;
  tipo: 'retangular' | 'circular';
  vip: boolean;
  status: 'LIVRE' | 'OCUPADA' | 'RESERVADA' | 'EM_ATENDIMENTO';
  inicioOcupacao?: Date;         // Para cálculo do timer
  tempoOcupacaoDisplay?: string; // Para exibição na UI
  reserva?: Reserva;
  garcomsAtendendo?: string[]; // IDs dos garçons
}

export interface Ambiente {
  id: string;
  nome: string;
  mesas: Mesa[];
}

export interface PedidoItem {
  id: string;
  nome: string;
  quantidade: number;
  preco: number;
  observacoes?: string;
  status: 'PENDENTE' | 'PREPARANDO' | 'PRONTO' | 'ENTREGUE';
}

export interface Pedido {
  id: string;
  mesaId: string;
  mesaNome: string;
  status: 'ATIVO' | 'PREPARANDO' | 'PRONTO' | 'ENTREGUE';
  itens: PedidoItem[];
  total: number;
  dataCriacao: Date;
  garcomId: string;
}

@Injectable({
  providedIn: 'root'
})
export class PainelGarcomService {

  // 1. OS "ESTADOS" SIMULADOS DO WEBSOCKET
  // Estes são os "corações" do nosso WebSocket simulado.
  // Qualquer atualização aqui será emitida para todos os subscritores.
  
  // Usamos BehaviorSubject para que novos subscritores recebam o valor mais recente.
  private readonly _ambientes = new BehaviorSubject<Ambiente[]>([]);
  private readonly _pedidosAtivos = new BehaviorSubject<Pedido[]>([]);

  // Lista mock de garçons disponíveis
  private mockGarcons: GarcomInfo[] = [
    { id: '1', nome: 'sergiosoares0226@gmail.com', foto: 'assets/png/avatar-padrao-garcom-tavola.png', turno: 'Manhã', inicioTurno: new Date() },
    { id: 'garcom-2', nome: 'Maria Silva', foto: undefined, turno: 'Manhã', inicioTurno: new Date() },
    { id: 'garcom-3', nome: 'Carlos Pereira', foto: 'assets/png/avatar-padrao-garcom-tavola.png', turno: 'Tarde', inicioTurno: new Date() },
  ];

  // 2. OS OBSERVABLES PÚBLICOS
  // O teu componente (painel-garcom.component.ts) vai subscrever a estes.
  public readonly ambientes$: Observable<Ambiente[]> = this._ambientes.asObservable();
  public readonly pedidosAtivos$: Observable<Pedido[]> = this._pedidosAtivos.asObservable();

  constructor() {
    // 3. INICIAR OS MOCKS
    // Isto simula o "GET" inicial ao carregar a página.
    this.carregarDadosIniciaisMock();
    
    // 4. SIMULAR ATUALIZAÇÕES DO WEBSOCKET
    // A cada 30 segundos, vamos simular uma mesa a ser ocupada.
    interval(30000).subscribe(() => this.simularMudancaStatusMesa());
  }

  // --- MÉTODOS PÚBLICOS (Simulando API) ---

  // Simula o GET /ambientes
  public carregarDadosIniciaisMock(): void {
    const dadosAmbientes = this.gerarAmbientesMock();
    const dadosPedidos = this.gerarPedidosMock();
    
    this._ambientes.next(dadosAmbientes);
    this._pedidosAtivos.next(dadosPedidos);
  }

  // Simula um POST /mesas/{id}/iniciar-atendimento
  public iniciarAtendimento(mesaId: string, garcomId: string): void {
    const ambientesAtuais = this._ambientes.getValue();
    
    const novosAmbientes: Ambiente[] = ambientesAtuais.map(amb => ({
      ...amb,
      mesas: amb.mesas.map(mesa => {
        if (mesa.id === mesaId && (mesa.status === 'LIVRE' || mesa.status === 'RESERVADA' || mesa.status === 'OCUPADA')) {
          console.log(`[SERVIÇO MOCK] Iniciando atendimento na mesa ${mesaId} por ${garcomId}`);
          const mesaAtualizada: Mesa = {
            ...mesa,
            status: 'EM_ATENDIMENTO',
            inicioOcupacao: new Date(), // INICIA O TIMER!
            garcomsAtendendo: [garcomId]
          };
          return mesaAtualizada;
        }
        return mesa;
      })
    }));
    
    // Emite a atualização do "WebSocket"
    this._ambientes.next(novosAmbientes);
  }

  // Simula um POST /mesas/{id}/liberar
  public liberarMesa(mesaId: string): void {
    const ambientesAtuais = this._ambientes.getValue();
    
    const novosAmbientes: Ambiente[] = ambientesAtuais.map(amb => ({
      ...amb,
      mesas: amb.mesas.map(mesa => {
        if (mesa.id === mesaId) {
          console.log(`[SERVIÇO MOCK] Liberando mesa ${mesaId}`);
          const mesaAtualizada: Mesa = {
            ...mesa,
            status: 'LIVRE',
            inicioOcupacao: undefined,
            tempoOcupacaoDisplay: undefined,
            garcomsAtendendo: [],
            reserva: undefined // Limpa a reserva
          };
          return mesaAtualizada;
        }
        return mesa;
      })
    }));
    
    this._ambientes.next(novosAmbientes);
  }
  
  // Simula um POST /pedidos
  public criarNovoPedido(mesaId: string, itens: PedidoItem[], garcomId: string): void {
    const ambientes = this._ambientes.getValue();
    const mesa = ambientes.flatMap(a => a.mesas).find(m => m.id === mesaId);
    
    const novoPedido: Pedido = {
      id: `p-${Math.floor(Math.random() * 1000)}`,
      mesaId: mesaId,
      mesaNome: mesa?.nome || 'Desconhecida',
      status: 'ATIVO',
      itens: itens, // Recebe os itens do dialog do cardápio
      total: itens.reduce((acc, item) => acc + (item.preco * item.quantidade), 0),
      dataCriacao: new Date(),
      garcomId: garcomId
    };

    const pedidosAtuais = this._pedidosAtivos.getValue();
    this._pedidosAtivos.next([...pedidosAtuais, novoPedido]);
  }
  
  // Simula um PUT /pedidos/{id}/adicionar-item
  public adicionarItemPedido(pedidoId: string, item: PedidoItem): void {
    const pedidosAtuais = this._pedidosAtivos.getValue();
    
    const novosPedidos = pedidosAtuais.map(pedido => {
      if (pedido.id === pedidoId) {
        // Lógica para adicionar ou incrementar item
        const itemExistente = pedido.itens.find(i => i.id === item.id);
        let novosItens;
        if (itemExistente) {
          novosItens = pedido.itens.map(i => i.id === item.id ? { ...i, quantidade: i.quantidade + 1 } : i);
        } else {
          novosItens = [...pedido.itens, { ...item, quantidade: 1 }];
        }
        
        return {
          ...pedido,
          itens: novosItens,
          total: novosItens.reduce((acc, i) => acc + (i.preco * i.quantidade), 0)
        };
      }
      return pedido;
    });
    
    this._pedidosAtivos.next(novosPedidos);
  }

  // Simula um DELETE /pedidos/{id}
  public removerPedido(pedidoId: string): void {
    const pedidosAtuais = this._pedidosAtivos.getValue();
    const pedidosFiltrados = pedidosAtuais.filter(p => p.id !== pedidoId);
    this._pedidosAtivos.next(pedidosFiltrados);
  }

  public getPedidosAtuais(): Pedido[] {
    return this._pedidosAtivos.getValue();
  }

  public ocuparMesa(mesaId: string): void {
    const ambientesAtuais = this._ambientes.getValue();
    const novosAmbientes: Ambiente[] = ambientesAtuais.map(amb => ({
      ...amb,
      mesas: amb.mesas.map(mesa => {
        if (mesa.id === mesaId && mesa.status === 'LIVRE') {
          console.log(`[SERVIÇO MOCK] Ocupando mesa ${mesaId}`);
          return {
            ...mesa,
            status: 'OCUPADA' as const,
            inicioOcupacao: new Date()
          };
        }
        return mesa;
      })
    }));
    this._ambientes.next(novosAmbientes);
  }

  public adicionarGarcomAMesa(mesaId: string, garcomId: string): void {
    const ambientesAtuais = this._ambientes.getValue();
    const novosAmbientes: Ambiente[] = ambientesAtuais.map(amb => ({
      ...amb,
      mesas: amb.mesas.map(mesa => {
        if (mesa.id === mesaId && mesa.status === 'EM_ATENDIMENTO') {
          console.log(`[SERVIÇO MOCK] Adicionando garçom ${garcomId} à mesa ${mesaId}`);
          const garcomsAtendendo = [...(mesa.garcomsAtendendo || [])];
          if (!garcomsAtendendo.includes(garcomId)) {
            garcomsAtendendo.push(garcomId);
          }
          return {
            ...mesa,
            garcomsAtendendo
          };
        }
        return mesa;
      })
    }));
    this._ambientes.next(novosAmbientes);
  }

  public removerGarcomDaMesa(mesaId: string, garcomId: string): void {
    const ambientesAtuais = this._ambientes.getValue();
    const novosAmbientes: Ambiente[] = ambientesAtuais.map(amb => ({
      ...amb,
      mesas: amb.mesas.map(mesa => {
        if (mesa.id === mesaId && mesa.status === 'EM_ATENDIMENTO') {
          console.log(`[SERVIÇO MOCK] Removendo garçom ${garcomId} da mesa ${mesaId}`);
          const garcomsAtendendo = [...(mesa.garcomsAtendendo || [])];
          const index = garcomsAtendendo.indexOf(garcomId);
          if (index > -1) {
            garcomsAtendendo.splice(index, 1);
          }
          
          // Se não há mais garçons atendendo, volta para OCUPADA
          let statusAtualizado: Mesa['status'] = mesa.status;
          if (garcomsAtendendo.length === 0) {
            statusAtualizado = 'OCUPADA';
          }
          
          return {
            ...mesa,
            status: statusAtualizado,
            garcomsAtendendo
          };
        }
        return mesa;
      })
    }));
    this._ambientes.next(novosAmbientes);
  }

  public getAmbientesAtuais(): Ambiente[] {
    return this._ambientes.getValue();
  }

  public atualizarAmbientes(ambientes: Ambiente[]): void {
    this._ambientes.next(ambientes);
  }

  public getGarconsDisponiveis(): GarcomInfo[] {
    return this.mockGarcons;
  }

  // --- MÉTODOS PRIVADOS DE SIMULAÇÃO ---

  // Simula uma atualização via WebSocket (ex: um cliente sentou sozinho)
  private simularMudancaStatusMesa(): void {
    const ambientesAtuais = this._ambientes.getValue();
    if (ambientesAtuais.length === 0) return;

    // Tenta encontrar uma mesa livre para ocupar
    let mesaLivre: Mesa | undefined;
    let ambIndex = -1;
    let mesaIndex = -1;
    
    for (let i = 0; i < ambientesAtuais.length; i++) {
      const j = ambientesAtuais[i].mesas.findIndex(m => m.status === 'LIVRE');
      if (j !== -1) {
        mesaLivre = ambientesAtuais[i].mesas[j];
        ambIndex = i;
        mesaIndex = j;
        break;
      }
    }
    
    if (mesaLivre) {
      console.log(`[WEBSOCKET SIMULADO] Mesa ${mesaLivre.nome} foi OCUPADA.`);
      
      const novosAmbientes = [...ambientesAtuais];
      novosAmbientes[ambIndex] = {
        ...novosAmbientes[ambIndex],
        mesas: [...novosAmbientes[ambIndex].mesas]
      };
      
      const mesaAtualizada: Mesa = {
        ...mesaLivre,
        status: 'OCUPADA', // Cliente avulso
        inicioOcupacao: new Date() // Inicia o timer
      };
      novosAmbientes[ambIndex].mesas[mesaIndex] = mesaAtualizada;
      
      this._ambientes.next(novosAmbientes);
    }
  }

  // Teu gerador de Mocks (movido para o serviço)
  private gerarAmbientesMock(): Ambiente[] {
    // Lógica para carregar reservas do dia (baseado na dataAtual)
    // Por agora, vamos mockar algumas
    const reservaMesa5 = {
      id: 'res-123',
      cliente: 'Cliente 5',
      horario: '18:00',
      pessoas: 7,
      telefone: '(11) 99999-9999'
    };
    
    return [
      {
        id: '1',
        nome: 'Salão Principal',
        mesas: [
          { id: 'salao-1', nome: 'Salão 1', capacidade: 4, tipo: 'retangular', vip: false, status: 'LIVRE', garcomsAtendendo: [] },
          { id: 'salao-2', nome: 'Salão 2', capacidade: 6, tipo: 'circular', vip: true, status: 'OCUPADA', inicioOcupacao: new Date(Date.now() - 30 * 60 * 1000), garcomsAtendendo: [] },
          { id: 'salao-3', nome: 'Salão 3', capacidade: 2, tipo: 'retangular', vip: false, status: 'LIVRE', garcomsAtendendo: [] },
          { id: 'salao-4', nome: 'Salão 4', capacidade: 8, tipo: 'retangular', vip: true, status: 'EM_ATENDIMENTO', inicioOcupacao: new Date(Date.now() - 15 * 60 * 1000), garcomsAtendendo: ['garcom-1'] },
          { id: 'salao-5', nome: 'Salão 5', capacidade: 7, tipo: 'retangular', vip: false, status: 'RESERVADA', reserva: reservaMesa5, garcomsAtendendo: [] },
          { id: 'salao-6', nome: 'Salão 6', capacidade: 6, tipo: 'circular', vip: true, status: 'LIVRE', garcomsAtendendo: [] },
        ]
      },
      {
        id: '2',
        nome: 'Varanda',
        mesas: [
          { id: 'varanda-1', nome: 'Varanda 1', capacidade: 4, tipo: 'retangular', vip: false, status: 'LIVRE', garcomsAtendendo: [] },
          { id: 'varanda-2', nome: 'Varanda 2', capacidade: 6, tipo: 'circular', vip: false, status: 'OCUPADA', inicioOcupacao: new Date(Date.now() - 45 * 60 * 1000), garcomsAtendendo: [] },
          { id: 'varanda-3', nome: 'Varanda 3', capacidade: 2, tipo: 'retangular', vip: false, status: 'LIVRE', garcomsAtendendo: [] },
          { id: 'varanda-4', nome: 'Varanda 4', capacidade: 8, tipo: 'retangular', vip: true, status: 'LIVRE', garcomsAtendendo: [] },
        ]
      },
      {
        id: '3',
        nome: 'Área VIP',
        mesas: [
          { id: 'vip-1', nome: 'VIP 1', capacidade: 6, tipo: 'circular', vip: true, status: 'LIVRE', garcomsAtendendo: [] },
          { id: 'vip-2', nome: 'VIP 2', capacidade: 8, tipo: 'retangular', vip: true, status: 'EM_ATENDIMENTO', inicioOcupacao: new Date(Date.now() - 20 * 60 * 1000), garcomsAtendendo: ['garcom-1'] },
          { id: 'vip-3', nome: 'VIP 3', capacidade: 4, tipo: 'circular', vip: true, status: 'LIVRE', garcomsAtendendo: [] },
          { id: 'vip-4', nome: 'VIP 4', capacidade: 10, tipo: 'retangular', vip: true, status: 'LIVRE', garcomsAtendendo: [] },
        ]
      }
    ];
  }
  
  private gerarPedidosMock(): Pedido[] {
     return [
        {
          id: 'p-001',
          mesaId: 'salao-1',
          mesaNome: 'Salão 1',
          status: 'ATIVO',
          itens: [
            { id: '1', nome: 'Pizza Margherita', quantidade: 1, preco: 45.90, status: 'PENDENTE' },
            { id: '2', nome: 'Coca-Cola 350ml', quantidade: 2, preco: 8.50, status: 'PENDENTE' }
          ],
          total: 62.90,
          dataCriacao: new Date(),
          garcomId: 'garcom-1'
        },
        {
          id: 'p-002',
          mesaId: 'vip-2',
          mesaNome: 'VIP 2',
          status: 'ATIVO',
          itens: [
            { id: '3', nome: 'Sushi Especial', quantidade: 1, preco: 89.90, status: 'PENDENTE' },
            { id: '4', nome: 'Sake Premium', quantidade: 1, preco: 45.00, status: 'PENDENTE' }
          ],
          total: 134.90,
          dataCriacao: new Date(),
          garcomId: 'garcom-1'
        }
     ];
  }

  // Método para buscar reservas para o calendário (mock)
  getReservasParaCalendarioMock(data: Date): IReserva[] {
    // Mock de reservas para o calendário
    const reservas: IReserva[] = [
      {
        id: '1',
        cliente: 'João Silva',
        data: new Date(data.getFullYear(), data.getMonth(), data.getDate()),
        horario: '19:30',
        pessoas: 4,
        status: 'CONFIRMADA',
        telefone: '(11) 99999-9999'
      },
      {
        id: '2',
        cliente: 'Maria Santos',
        data: new Date(data.getFullYear(), data.getMonth(), data.getDate() + 1),
        horario: '20:00',
        pessoas: 2,
        status: 'PENDENTE',
        telefone: '(11) 88888-8888'
      },
      {
        id: '3',
        cliente: 'Pedro Costa',
        data: new Date(data.getFullYear(), data.getMonth(), data.getDate() - 1),
        horario: '18:30',
        pessoas: 6,
        status: 'CONFIRMADA',
        telefone: '(11) 77777-7777'
      }
    ];

    return reservas;
  }
}