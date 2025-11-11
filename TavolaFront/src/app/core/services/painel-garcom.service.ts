import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, interval } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { RestauranteService } from './restaurante.service';
import { AuthService } from './auth.service';
import { IAmbienteDashboard, IMesaDashboard } from '../../Interfaces/IDashboardAmbiente.interface';
import { IGarcomInfo } from '../../Interfaces/IGarcomInfo.interface';
import { IReservaPainel } from '../../Interfaces/IReservaPainel.interface';
import { IReserva } from '../../Interfaces/IReserva.interface';
import { IMesaPainel } from '../../Interfaces/IMesaPainel.interface';
import { IAmbientePainel } from '../../Interfaces/IAmbientePainel.interface';
import { IPedidoItem } from '../../Interfaces/IPedidoItem.interface';
import { IPedido } from '../../Interfaces/IPedido.interface';

// Re-exportar interfaces para compatibilidade com componentes existentes
export type GarcomInfo = IGarcomInfo;
export type Reserva = IReservaPainel;
export type Mesa = IMesaPainel;
export type Ambiente = IAmbientePainel;
export type PedidoItem = IPedidoItem;
export type Pedido = IPedido;
export type { IReserva };

@Injectable({
  providedIn: 'root'
})
export class PainelGarcomService {
  private restauranteService = inject(RestauranteService);
  private authService = inject(AuthService);

  // 1. OS "ESTADOS" SIMULADOS DO WEBSOCKET
  // Estes são os "corações" do nosso WebSocket simulado.
  // Qualquer atualização aqui será emitida para todos os subscritores.
  
  // Usamos BehaviorSubject para que novos subscritores recebam o valor mais recente.
  private readonly _ambientes = new BehaviorSubject<IAmbientePainel[]>([]);
  private readonly _pedidosAtivos = new BehaviorSubject<IPedido[]>([]);

  // Lista mock de garçons disponíveis
  private mockGarcons: IGarcomInfo[] = [
    { id: '1', nome: 'sergiosoares0226@gmail.com', foto: 'assets/png/avatar-padrao-garcom-tavola.png', turno: 'Manhã', inicioTurno: new Date() },
    { id: 'garcom-2', nome: 'Maria Silva', foto: undefined, turno: 'Manhã', inicioTurno: new Date() },
    { id: 'garcom-3', nome: 'Carlos Pereira', foto: 'assets/png/avatar-padrao-garcom-tavola.png', turno: 'Tarde', inicioTurno: new Date() },
  ];

  // 2. OS OBSERVABLES PÚBLICOS
  // O teu componente (painel-garcom.component.ts) vai subscrever a estes.
  public readonly ambientes$: Observable<IAmbientePainel[]> = this._ambientes.asObservable();
  public readonly pedidosAtivos$: Observable<IPedido[]> = this._pedidosAtivos.asObservable();

  constructor() {
    // Timer removido - será controlado pelo componente
  }

  /**
   * Obtém o ID do restaurante do usuário logado
   */
  private getIdRestaurante(): string {
    const perfil = this.authService.perfil;
    return perfil?.id || '';
  }

  // --- MÉTODOS PÚBLICOS (API Real) ---

  /**
   * Carrega os ambientes e mesas da API para uma data específica
   */
  public carregarAmbientes(data: Date): Observable<IAmbientePainel[]> {
    const idRestaurante = '873880ed-f72a-4010-810f-aaf3f12b236e';
    if (!idRestaurante) {
      console.error('[PainelGarcomService] ID do restaurante não encontrado');
      return this._ambientes.asObservable();
    }
    
    return this.restauranteService.getAmbientes(idRestaurante, data).pipe(
      map((ambientesApi: IAmbienteDashboard[]) => {
        // Mapeia os dados da API para o formato esperado pelo componente
        const ambientesMapeados: IAmbientePainel[] = ambientesApi.map(ambienteApi => ({
          id: ambienteApi.id,
          nome: ambienteApi.nome,
          mesas: ambienteApi.mesas.map(mesaApi => this.mapearMesaApiParaMesa(mesaApi))
        }));
        
        // Atualiza o BehaviorSubject
        this._ambientes.next(ambientesMapeados);
        return ambientesMapeados;
      }),
      catchError(error => {
        console.error('[PainelGarcomService] Erro ao carregar ambientes:', error);
        // Em caso de erro, retorna os dados mock
        const dadosMock = this.gerarAmbientesMock();
        this._ambientes.next(dadosMock);
        return this._ambientes.asObservable();
      })
    );
  }

  /**
   * Mapeia uma mesa da API para o formato usado no componente
   */
  private mapearMesaApiParaMesa(mesaApi: IMesaDashboard): IMesaPainel {
    const mesa = mesaApi.mesa;
    const reservas = mesaApi.reservas || [];
    const atendimentos = mesaApi.atendimentos || [];

    // Pega a primeira reserva ativa (se houver)
    const reservaAtiva = reservas.find(r => r.status === 'ATIVA');
    
    // Mapeia os IDs dos garçons dos atendimentos
    const garcomsAtendendo = atendimentos
      .filter(a => a.garcomId)
      .map(a => a.garcomId!)
      .filter((id): id is string => !!id);

    return {
      id: mesa.id,
      nome: mesa.nome,
      capacidade: mesa.capacidade,
      tipo: mesa.tipo as 'retangular' | 'circular',
      vip: mesa.vip,
      status: (mesa.status || 'LIVRE') as 'LIVRE' | 'OCUPADA' | 'RESERVADA' | 'EM_ATENDIMENTO',
      inicioOcupacao: atendimentos[0]?.inicioAtendimento 
        ? new Date(atendimentos[0].inicioAtendimento as string) 
        : undefined,
      tempoOcupacaoDisplay: undefined, // Será calculado pelo componente
      reserva: reservaAtiva ? {
        id: reservaAtiva.id,
        cliente: reservaAtiva.cliente || reservaAtiva.clienteId, // Usa o nome do cliente ou ID como fallback
        horario: reservaAtiva.horario.split(':').slice(0, 2).join(':'), // Formata HH:MM
        pessoas: reservaAtiva.pessoas,
        telefone: reservaAtiva.telefoneCliente // Usa telefoneCliente se disponível
      } : undefined,
      garcomsAtendendo: garcomsAtendendo.length > 0 ? garcomsAtendendo : [],
      clienteNome: mesa.clienteNome // Nome do cliente quando a mesa foi ocupada
    };
  }

  // Método mantido para compatibilidade (usado em alguns lugares)
  public carregarDadosIniciaisMock(): void {
    const dadosAmbientes = this.gerarAmbientesMock();
    const dadosPedidos = this.gerarPedidosMock();
    
    this._ambientes.next(dadosAmbientes);
    this._pedidosAtivos.next(dadosPedidos);
  }

  // Simula um POST /mesas/{id}/iniciar-atendimento
  public iniciarAtendimento(mesaId: string, garcomId: string): void {
    const ambientesAtuais = this._ambientes.getValue();
    
    const novosAmbientes: IAmbientePainel[] = ambientesAtuais.map(amb => ({
      ...amb,
      mesas: amb.mesas.map(mesa => {
        if (mesa.id === mesaId && (mesa.status === 'LIVRE' || mesa.status === 'RESERVADA' || mesa.status === 'OCUPADA')) {
          console.log(`[SERVIÇO MOCK] Iniciando atendimento na mesa ${mesaId} por ${garcomId}`);
          const mesaAtualizada: IMesaPainel = {
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
    
    const novosAmbientes: IAmbientePainel[] = ambientesAtuais.map(amb => ({
      ...amb,
      mesas: amb.mesas.map(mesa => {
        if (mesa.id === mesaId) {
          console.log(`[SERVIÇO MOCK] Liberando mesa ${mesaId}`);
          const mesaAtualizada: IMesaPainel = {
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
  public criarNovoPedido(mesaId: string, itens: IPedidoItem[], garcomId: string): void {
    const ambientes = this._ambientes.getValue();
    const mesa = ambientes.flatMap(a => a.mesas).find(m => m.id === mesaId);
    
    const novoPedido: IPedido = {
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
  public adicionarItemPedido(pedidoId: string, item: IPedidoItem): void {
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

  public getPedidosAtuais(): IPedido[] {
    return this._pedidosAtivos.getValue();
  }

  public ocuparMesa(mesaId: string): void {
    const ambientesAtuais = this._ambientes.getValue();
    const novosAmbientes: IAmbientePainel[] = ambientesAtuais.map(amb => ({
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
    const novosAmbientes: IAmbientePainel[] = ambientesAtuais.map(amb => ({
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
    const novosAmbientes: IAmbientePainel[] = ambientesAtuais.map(amb => ({
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
          let statusAtualizado: IMesaPainel['status'] = mesa.status;
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

  public getAmbientesAtuais(): IAmbientePainel[] {
    return this._ambientes.getValue();
  }

  public atualizarAmbientes(ambientes: IAmbientePainel[]): void {
    this._ambientes.next(ambientes);
  }

  public getGarconsDisponiveis(): IGarcomInfo[] {
    return this.mockGarcons;
  }

  // --- MÉTODOS PRIVADOS DE SIMULAÇÃO ---

  // Simula uma atualização via WebSocket (ex: um cliente sentou sozinho)
  private simularMudancaStatusMesa(): void {
    const ambientesAtuais = this._ambientes.getValue();
    if (ambientesAtuais.length === 0) return;

    // Tenta encontrar uma mesa livre para ocupar
    let mesaLivre: IMesaPainel | undefined;
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
      
      const mesaAtualizada: IMesaPainel = {
        ...mesaLivre,
        status: 'OCUPADA', // Cliente avulso
        inicioOcupacao: new Date() // Inicia o timer
      };
      novosAmbientes[ambIndex].mesas[mesaIndex] = mesaAtualizada;
      
      this._ambientes.next(novosAmbientes);
    }
  }

  // Teu gerador de Mocks (movido para o serviço)
  private gerarAmbientesMock(): IAmbientePainel[] {
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
  
  private gerarPedidosMock(): IPedido[] {
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
        clienteId: 'cliente-1',
        cliente: 'João Silva',
        mesaIds: [],
        data: new Date(data.getFullYear(), data.getMonth(), data.getDate()),
        horario: '19:30',
        periodo: 'Jantar',
        pessoas: 4,
        status: 'CONFIRMADA',
        preferencias: '',
        restaurante: '',
        emailCliente: 'joao@email.com',
        telefoneCliente: '(11) 99999-9999',
        imagemPerfilCliente: null,
        nomesMesas: null
      },
      {
        id: '2',
        clienteId: 'cliente-2',
        cliente: 'Maria Santos',
        mesaIds: [],
        data: new Date(data.getFullYear(), data.getMonth(), data.getDate() + 1),
        horario: '20:00',
        periodo: 'Jantar',
        pessoas: 2,
        status: 'PENDENTE',
        preferencias: '',
        restaurante: '',
        emailCliente: 'maria@email.com',
        telefoneCliente: '(11) 88888-8888',
        imagemPerfilCliente: null,
        nomesMesas: null
      },
      {
        id: '3',
        clienteId: 'cliente-3',
        cliente: 'Pedro Costa',
        mesaIds: [],
        data: new Date(data.getFullYear(), data.getMonth(), data.getDate() - 1),
        horario: '18:30',
        periodo: 'Jantar',
        pessoas: 6,
        status: 'CONFIRMADA',
        preferencias: '',
        restaurante: '',
        emailCliente: 'pedro@email.com',
        telefoneCliente: '(11) 77777-7777',
        imagemPerfilCliente: null,
        nomesMesas: null
      }
    ];

    return reservas;
  }
}