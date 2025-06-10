import { Component, type OnInit, ViewChild, type TemplateRef, ChangeDetectorRef, LOCALE_ID } from "@angular/core"
import { CommonModule, registerLocaleData, TitleCasePipe } from "@angular/common"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import localePt from "@angular/common/locales/pt"
import { MatDialog } from "@angular/material/dialog"
import { DialogGerenciarMesasComponent } from "./dialog-gerenciar-mesas/dialog-gerenciar-mesas.component"
import { v4 as uuidv4 } from "uuid"
import { CalendarioReservasComponent } from "./calendario-reservas/calendario-reservas.component"

// Angular Material (imports existentes)
import { MatTabsModule } from "@angular/material/tabs"
import { MatCardModule } from "@angular/material/card"
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
import { MatInputModule } from "@angular/material/input"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatDatepickerModule } from "@angular/material/datepicker"
import { MatNativeDateModule } from "@angular/material/core"
import { MatBadgeModule } from "@angular/material/badge"
import { MatDividerModule } from "@angular/material/divider"
import { MatTooltipModule } from "@angular/material/tooltip"
import { MatChipsModule } from "@angular/material/chips"
import { MatSelectModule } from "@angular/material/select"
import { MatCheckboxModule } from "@angular/material/checkbox"
import { MatMenuModule } from "@angular/material/menu"
import { MatAutocompleteModule } from "@angular/material/autocomplete"

// NG-Zorro (imports existentes)
import { NzAvatarModule } from "ng-zorro-antd/avatar"
import { NzTagModule } from "ng-zorro-antd/tag"
import { NzIconModule } from "ng-zorro-antd/icon"
import { NzButtonModule } from "ng-zorro-antd/button"
import { NzEmptyModule } from "ng-zorro-antd/empty"
import { NzModalModule, NzModalService } from "ng-zorro-antd/modal"
import { NZ_ICONS } from "ng-zorro-antd/icon"
import { NZ_I18N, pt_BR } from "ng-zorro-antd/i18n"
import type { IconDefinition } from "@ant-design/icons-angular"
import {
  CarOutline,
  HomeOutline,
  EnvironmentOutline,
  FlagOutline,
  HeartOutline,
  HeartFill,
  LeftOutline,
  RightOutline,
  CalendarOutline,
  ClockCircleOutline,
  TeamOutline,
  CheckCircleOutline,
  ExclamationCircleOutline,
  FireFill,
  CopyOutline,
  CheckOutline,
  PlusOutline,
  DeleteOutline,
  EditOutline,
} from "@ant-design/icons-angular/icons"
import { NzDatePickerModule } from "ng-zorro-antd/date-picker"
import { IReserva } from '../../Interfaces/IReserva.interface';
import { IMesa } from '../../Interfaces/IMesa.interface';
import { ICliente } from '../../Interfaces/ICliente.interface';

registerLocaleData(localePt)

const antIcons: IconDefinition[] = [
  CarOutline,
  HomeOutline,
  EnvironmentOutline,
  FlagOutline,
  HeartOutline,
  HeartFill,
  LeftOutline,
  RightOutline,
  CalendarOutline,
  ClockCircleOutline,
  TeamOutline,
  CheckCircleOutline,
  ExclamationCircleOutline,
  FireFill,
  CopyOutline,
  CheckOutline,
  PlusOutline,
  DeleteOutline,
  EditOutline,
]

@Component({
  selector: "app-reservas",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatDividerModule,
    MatTooltipModule,
    MatChipsModule,
    MatSelectModule,
    MatCheckboxModule,
    NzAvatarModule,
    NzTagModule,
    NzIconModule,
    NzButtonModule,
    NzEmptyModule,
    NzModalModule,
    TitleCasePipe,
    NzDatePickerModule,
    MatMenuModule,
    MatAutocompleteModule,
    CalendarioReservasComponent,
  ],
  templateUrl: "./reservas.component.html",
  styleUrls: ["./reservas.component.scss"],
  providers: [
    { provide: NZ_ICONS, useValue: antIcons },
    { provide: NZ_I18N, useValue: pt_BR },
    { provide: LOCALE_ID, useValue: "pt-BR" },
    NzModalService,
  ],
  animations: [],
})
export class ReservasComponent implements OnInit {
  @ViewChild("modalMesa") modalMesaTemplate!: TemplateRef<any>

  dataAtual: Date = new Date(2025, 4, 30)
  filtroPesquisa = ""
  areasMesa: string[] = ["Salão Principal", "Deck", "Mezanino", "Área Externa"]
  areaAtiva: string = this.areasMesa[0]
  periodoFiltro: "todos" | "Almoço" | "Jantar" = "todos"
  reservaSelecionada: IReserva | null = null
  abaAtiva = "Reservas"
  pesquisa = ""
  pesquisaEspera = ""
  mostrarCalendario = false

  // Mock data (como no seu código)
  clientes: ICliente[] = [
    {
      id: "c1",
      nome: "Ana Silva",
      email: "ana.silva@email.com",
      telefone: "(11) 98765-4321",
      avatar: "assets/png/avatar-padrao-tavola-cordeirinho.png",
    },
    {
      id: "c2",
      nome: "Carlos Pereira",
      email: "carlos.pereira@email.com",
      telefone: "(21) 91234-5678",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: "c3",
      nome: "Beatriz Costa",
      email: "beatriz.costa@email.com",
      telefone: "(31) 95555-5555",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    // Added new clients
    {
      id: "c4",
      nome: "Fernando Rocha",
      email: "fernando.rocha@email.com",
      telefone: "(41) 99888-7777",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: "c5",
      nome: "Gabriela Lima",
      email: "gabriela.lima@email.com",
      telefone: "(51) 97777-6666",
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      id: "c6",
      nome: "Eduardo Gomes",
      email: "eduardo.gomes@email.com",
      telefone: "(61) 96666-5555",
      avatar: "https://randomuser.me/api/portraits/men/60.jpg",
    },
  ]

  reservas: IReserva[] = [
    {
      id: "r1",
      clienteId: "c1",
      clienteNome: this.getClienteNomeById("c1"),
      mesaIds: ["m1", "m2"],
      data: new Date(),
      horario: "12:30",
      periodo: "Almoço",
      pessoas: 4,
      status: "confirmada",
      preferencias: "Mesa perto da janela, por favor.",
    },
    {
      id: "r2",
      clienteId: "c2",
      clienteNome: this.getClienteNomeById("c2"),
      mesaIds: ["m5"],
      data: new Date(),
      horario: "20:00",
      periodo: "Jantar",
      pessoas: 2,
      status: "pendente",
      preferencias: "Sem cebola.",
    },
    // Added new reservations for various dates, times, and statuses
    {
      id: "r3",
      clienteId: "c4",
      clienteNome: this.getClienteNomeById("c4"),
      mesaIds: ["m4"],
      data: new Date(new Date().setDate(new Date().getDate() + 1)), // Tomorrow
      horario: "13:00",
      periodo: "Almoço",
      pessoas: 6,
      status: "confirmada",
      preferencias: "Reunião de negócios.",
    },
    {
      id: "r4",
      clienteId: "c5",
      clienteNome: this.getClienteNomeById("c5"),
      mesaIds: ["m8"],
      data: new Date(new Date().setDate(new Date().getDate() + 2)), // Day after tomorrow
      horario: "19:30",
      periodo: "Jantar",
      pessoas: 2,
      status: "pendente",
      preferencias: "",
    },
    {
      id: "r5",
      clienteId: "c6",
      clienteNome: this.getClienteNomeById("c6"),
      mesaIds: [], // No table assigned yet
      data: new Date(new Date().setDate(new Date().getDate() - 1)), // Yesterday
      horario: "21:00",
      periodo: "Jantar",
      pessoas: 3,
      status: "cancelada",
      preferencias: "Problema familiar.",
    },
    {
      id: "r6",
      clienteId: "c1",
      clienteNome: this.getClienteNomeById("c1"),
      mesaIds: ["m1", "m2", "m3"],
      data: new Date(2025, 4, 30), // May 30, 2025
      horario: "19:00",
      periodo: "Jantar",
      pessoas: 8,
      status: "confirmada",
      preferencias: "Aniversário.",
    },
    {
      id: "r7",
      clienteId: "c2",
      clienteNome: this.getClienteNomeById("c2"),
      mesaIds: ["m5"],
      data: new Date(2025, 4, 31), // May 31, 2025
      horario: "13:00",
      periodo: "Almoço",
      pessoas: 2,
      status: "confirmada",
      preferencias: "Mesa externa.",
    },
    {
      id: "r8",
      clienteId: "c4",
      clienteNome: this.getClienteNomeById("c4"),
      mesaIds: ["m6", "m7"],
      data: new Date(2025, 4, 31), // May 31, 2025
      horario: "20:30",
      periodo: "Jantar",
      pessoas: 10,
      status: "pendente",
      preferencias: "Evento corporativo.",
    },
  ]

  reservasEspera: IReserva[] = [
    {
      id: "re1",
      clienteId: "c1",
      clienteNome: this.getClienteNomeById("c1"),
      mesaIds: ["m1", "m2", "m3"],
      data: new Date(2025, 4, 28), // May 28, 2025
      horario: "19:00",
      periodo: "Jantar",
      pessoas: 8,
      status: "espera",
      preferencias: "Aniversário.",
    },
  ]

  mesas: IMesa[] = [
    { id: "m1", numero: "01", tipo: "retangular", area: "Salão Principal", vip: false, ocupada: false, capacidade: 4 },
    { id: "m2", numero: "02", tipo: "retangular", area: "Salão Principal", vip: false, ocupada: false, capacidade: 4 },
    { id: "m3", numero: "03", tipo: "retangular", area: "Salão Principal", vip: false, ocupada: false, capacidade: 2 },
    { id: "m4", numero: "VIP 1", tipo: "circular", area: "Salão Principal", vip: true, ocupada: false, capacidade: 6 },
    { id: "m5", numero: "A1", tipo: "retangular", area: "Área Externa", vip: false, ocupada: false, capacidade: 4 },
    { id: "m6", numero: "A2", tipo: "retangular", area: "Área Externa", vip: false, ocupada: false, capacidade: 4 },
    {
      id: "m7",
      numero: "VIP Lounge",
      tipo: "circular",
      area: "Área Externa",
      vip: true,
      ocupada: false,
      capacidade: 8,
    },
    { id: "m8", numero: "T1", tipo: "retangular", area: "Terraço", vip: false, ocupada: false, capacidade: 2 },
  ]

  areas = ["Salão Principal", "Área Externa", "Terraço"]

  reservasVisiveis: IReserva[] = []
  reservasAlmocoVisiveis: IReserva[] = []
  reservasJantarVisiveis: IReserva[] = []
  reservasEsperaVisiveis: IReserva[] = []

  mesaEditando: IMesa = this.criarMesaPadrao()

  // Propriedades para o CRUD de áreas
  editandoIndex: number | null = null;
  valorEditado = '';
  adicionandoArea = false;
  nomeNovaArea = '';

  // --- LÓGICA DE CONTROLE DAS ABAS (MAIS ROBUSTA) ---
  get areaAtivaIndex(): number {
    const index = this.areasMesa.indexOf(this.areaAtiva);
    return index === -1 ? 0 : index;
  }

  set areaAtivaIndex(index: number) {
    // Só altera a aba se não estiver no meio de uma edição
    if (this.editandoIndex === null && index >= 0 && index < this.areasMesa.length) {
      this.areaAtiva = this.areasMesa[index];
    }
  }

  // --- MÉTODOS DO CRUD DE ÁREAS (REVISADOS E CORRIGIDOS) ---
  iniciarEdicao(index: number, nomeAtual: string): void {
    // Cancela qualquer outra edição ou adição antes de iniciar uma nova
    this.cancelarAdicionar();
    if (this.editandoIndex !== null) {
      this.salvarEdicao(this.editandoIndex);
    }
    this.editandoIndex = index;
    this.valorEditado = nomeAtual;
  }

  cancelarEdicao(): void {
    this.editandoIndex = null;
    this.valorEditado = '';
  }

  salvarEdicao(index: number): void {
    if (this.editandoIndex === null || index !== this.editandoIndex) return;

    const novoNome = this.valorEditado.trim();
    const nomeAntigo = this.areasMesa[index];

    if (novoNome && novoNome !== nomeAntigo) {
      // Verifica se o novo nome já existe (ignorando o caso atual)
      if (this.areasMesa.find((area, i) => area.toLowerCase() === novoNome.toLowerCase() && i !== index)) {
        // Opcional: Adicionar uma notificação ao usuário de que o nome já existe
        console.warn(`A área "${novoNome}" já existe.`);
      } else {
        this.areasMesa[index] = novoNome;
        this.mesas.forEach(mesa => {
          if (mesa.area === nomeAntigo) {
            mesa.area = novoNome;
          }
        });
        if (this.areaAtiva === nomeAntigo) {
          this.areaAtiva = novoNome;
        }
      }
    }
    this.cancelarEdicao();
  }

  ativarModoAdicionar(): void {
    this.cancelarEdicao(); // Garante que não estamos editando e adicionando ao mesmo tempo
    this.adicionandoArea = true;
  }

  salvarNovaArea(): void {
    if (!this.adicionandoArea) return; // Previne chamada dupla pelo blur

    const novoNome = this.nomeNovaArea.trim();
    if (novoNome && !this.areasMesa.find(a => a.toLowerCase() === novoNome.toLowerCase())) {
      this.areasMesa.push(novoNome);
      // Força a seleção da nova aba
      setTimeout(() => {
        this.areaAtivaIndex = this.areasMesa.length - 1;
        this.cdr.detectChanges();
      });
    }
    this.cancelarAdicionar();
  }

  cancelarAdicionar(): void {
    this.adicionandoArea = false;
    this.nomeNovaArea = '';
  }

  confirmarRemocaoArea(index: number): void {
    const areaParaRemover = this.areasMesa[index];

    if (!areaParaRemover) {
      console.error("Erro: Tentativa de remover área com índice inválido:", index);
      return;
    }

    const mesasNaArea = this.mesas.filter(m => m.area === areaParaRemover);
    let conteudoModal = `Tem certeza que deseja remover a área "<b>${areaParaRemover}</b>"?`;
    if (mesasNaArea.length > 0) {
      conteudoModal += `<br><br><p class="aviso-remocao"><b>Atenção:</b> ${mesasNaArea.length} mesa(s) nesta área também serão removidas permanentemente.</p>`;
    }

    this.modalService.confirm({
      nzTitle: 'Confirmar Remoção',
      nzContent: conteudoModal,
      nzOkText: 'Sim, remover',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzCancelText: 'Cancelar',
      nzOnOk: () => this.removerArea(index)
    });
  }

  private removerArea(index: number): void {
    const areaRemovida = this.areasMesa[index];
    
    // Remove todas as mesas da área
    this.mesas = this.mesas.filter(m => m.area !== areaRemovida);
    
    // Remove a área
    this.areasMesa.splice(index, 1);
    
    // Se a área removida era a ativa, seleciona a primeira área disponível
    if (this.areaAtiva === areaRemovida) {
      this.areaAtiva = this.areasMesa[0] || '';
    }
    
    // Força atualização da view
    this.cdr.detectChanges();
  }

  constructor(
    private modalService: NzModalService,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.aplicarFiltros()
    this.aplicarFiltrosEspera()
    this.nzDatePickerChange(this.dataAtual)
  }

  criarMesaPadrao(): IMesa {
    return { id: "", numero: "", tipo: "retangular", area: this.areaAtiva, vip: false, ocupada: false, capacidade: 2 }
  }

  proximoDia(): void {
    const novaData = new Date(this.dataAtual)
    novaData.setDate(novaData.getDate() + 1)
    this.dataAtual = novaData
    this.aplicarFiltros()
    this.limparSelecao()
  }

  diaAnterior(): void {
    const novaData = new Date(this.dataAtual)
    novaData.setDate(novaData.getDate() - 1)
    this.dataAtual = novaData
    this.aplicarFiltros()
    this.limparSelecao()
  }

  temReservasParaPesquisaNoPeriodo(periodo: "Almoço" | "Jantar"): boolean {
    if (!this.pesquisa.trim()) return false

    const termoBusca = this.pesquisa.toLowerCase().trim()
    const reservasDoPeriodo = periodo === "Almoço" ? this.reservasAlmocoVisiveis : this.reservasJantarVisiveis

    if (reservasDoPeriodo.length === 0) return false

    return reservasDoPeriodo.some((reserva: IReserva) => {
      const cliente = this.getClientePorId(reserva.clienteId)
      return cliente && cliente.nome.toLowerCase().includes(termoBusca)
    })
  }

  temReservasVisiveisParaPesquisaNoPeriodo(periodo: "Almoço" | "Jantar"): boolean {
    if (!this.pesquisa.trim()) return false
    return periodo === "Almoço" ? this.reservasAlmocoVisiveis.length > 0 : this.reservasJantarVisiveis.length > 0
  }

  existemReservasParaDataAtual(): boolean {
    const dataFormatada = this.dataAtual.toLocaleDateString("pt-BR")
    return this.reservas.some(
      (reserva: IReserva) => new Date(reserva.data).toLocaleDateString("pt-BR") === dataFormatada,
    )
  }

  aplicarFiltros(): void {
    const dataFormatada = this.dataAtual.toLocaleDateString("pt-BR")

    let tempReservas = this.reservas.filter(
      (reserva: IReserva) => new Date(reserva.data).toLocaleDateString("pt-BR") === dataFormatada,
    )

    if (this.pesquisa && this.pesquisa.trim() !== "") {
      const termoBusca = this.pesquisa.toLowerCase().trim()
      tempReservas = tempReservas.filter((reserva: IReserva) => {
        const cliente = this.getClientePorId(reserva.clienteId)
        return cliente && cliente.nome.toLowerCase().includes(termoBusca)
      })
    }

    if (this.periodoFiltro !== "todos") {
      tempReservas = tempReservas.filter((r) => r.periodo === this.periodoFiltro)
    }

    this.reservasVisiveis = [...tempReservas]

    this.reservasAlmocoVisiveis = this.reservasVisiveis.filter((r) => r.periodo === "Almoço")
    this.reservasJantarVisiveis = this.reservasVisiveis.filter((r) => r.periodo === "Jantar")

    if (this.periodoFiltro === "Almoço") {
      this.reservasJantarVisiveis = []
    } else if (this.periodoFiltro === "Jantar") {
      this.reservasAlmocoVisiveis = []
    }

    if (this.reservaSelecionada && !this.reservasVisiveis.find((r) => r.id === this.reservaSelecionada!.id)) {
      this.reservaSelecionada = null
    }
    this.atualizarStatusMesas()
    this.cdr.detectChanges()
  }

  aplicarFiltrosEspera(): void {
    let tempReservas = [...this.reservasEspera]

    if (this.pesquisaEspera && this.pesquisaEspera.trim() !== "") {
      const termoBusca = this.pesquisaEspera.toLowerCase().trim()
      tempReservas = tempReservas.filter((reserva: IReserva) => {
        const cliente = this.getClientePorId(reserva.clienteId)
        return cliente && cliente.nome.toLowerCase().includes(termoBusca)
      })
    }

    this.reservasEsperaVisiveis = [...tempReservas]
    this.cdr.detectChanges()
  }

  limparPesquisaEspera(): void {
    this.pesquisaEspera = ""
    this.aplicarFiltrosEspera()
  }

  reatribuirReserva(reserva: IReserva, event: Event): void {
    event.stopPropagation()

    this.modalService.confirm({
      nzTitle: "Reatribuir Reserva",
      nzContent: `Deseja reatribuir a reserva de ${this.getClientePorId(reserva.clienteId)?.nome} para ${this.dataAtual.toLocaleDateString("pt-BR")}?`,
      nzOkText: "Sim, reatribuir",
      nzOkType: "primary",
      nzCancelText: "Cancelar",
      nzOnOk: () => {
        // Remover da lista de espera
        this.reservasEspera = this.reservasEspera.filter((r) => r.id !== reserva.id)

        // Atualizar data e status
        reserva.data = new Date(this.dataAtual)
        reserva.status = "pendente"

        // Adicionar às reservas normais
        this.reservas.push(reserva)

        // Atualizar filtros
        this.aplicarFiltros()
        this.aplicarFiltrosEspera()

        console.log("Reserva reatribuída:", reserva)
      },
    })
  }

  getTooltipStatus(status: string): string {
    switch (status) {
      case "confirmada":
        return "Reserva Confirmada"
      case "pendente":
        return "Aguardando Confirmação"
      case "cancelada":
        return "Reserva Cancelada"
      case "finalizada":
        return "Reserva Finalizada"
      case "ausente":
        return "Cliente Não Compareceu"
      default:
        return "Status Desconhecido"
    }
  }

  getClasseMesa(mesa: IMesa): string {
    const classes = []

    if (mesa.tipo === "circular") {
      classes.push("mesa-circular")
    }

    if (mesa.vip) {
      classes.push("mesa-vip")
    }

    if (this.isMesaOcupadaPorOutraReserva(mesa.id)) {
      classes.push("mesa-ocupada")
    }

    if (this.isMesaAtribuidaAReservaAtual(mesa.id)) {
      classes.push("mesa-atribuida-reserva-atual")
    }

    return classes.join(" ")
  }

  getTooltipMesa(mesa: IMesa): string {
    if (this.isMesaOcupadaPorOutraReserva(mesa.id)) {
      const reserva = this.getReservaPorId(mesa.reservaId!)
      const cliente = reserva ? this.getClientePorId(reserva.clienteId) : null
      return `Ocupada por: ${cliente?.nome || "Outra reserva"} (${reserva?.horario || ""})`
    }

    if (this.isMesaAtribuidaAReservaAtual(mesa.id)) {
      const cliente = this.reservaSelecionada ? this.getClientePorId(this.reservaSelecionada.clienteId) : null
      return `Atribuída a esta reserva (${cliente?.nome || ""}, ${this.reservaSelecionada?.horario || ""})`
    }

    return `Disponível - Capacidade: ${mesa.capacidade || "N/A"} pessoas`
  }

  limparPesquisa(): void {
    this.pesquisa = ""
    this.aplicarFiltros()
  }

  abrirModalAdicionarReserva(): void {
    console.log("Abrir modal para adicionar nova reserva. Payload para backend seria:", {
      idRestaurante: "ID_RESTAURANTE_AQUI",
      dataReserva: this.dataAtual.toISOString().split("T")[0],
    })
  }

  selecionarReserva(reserva: IReserva): void {
    this.reservaSelecionada = this.reservaSelecionada?.id === reserva.id ? null : reserva
    if (this.reservaSelecionada && this.reservaSelecionada.mesaIds.length > 0) {
      const primeiraMesa = this.getMesaPorId(this.reservaSelecionada.mesaIds[0])
      if (primeiraMesa) {
        this.areaAtiva = primeiraMesa.area
      }
    }
  }

  fecharDetalhes(): void {
    this.reservaSelecionada = null
  }

  mudarAba(event: any): void {
    this.abaAtiva = event.tab.textLabel
  }

  mudarArea(event: any): void {
    this.areaAtiva = event.tab.textLabel
  }

  formatarData(data: Date): string {
    if (!data) return ""
    return new Date(data).toLocaleDateString("pt-BR", { weekday: "short", day: "2-digit", month: "short" })
  }

  getMesasPorArea(area: string): IMesa[] {
    return this.mesas.filter((mesa) => mesa.area === area)
  }

  isMesaOcupada(mesaId: string): boolean {
    return this.reservasVisiveis.some((reserva) => reserva.mesaIds.includes(mesaId))
  }

  isMesaOcupadaPorOutraReserva(mesaId: string): boolean {
    if (this.reservaSelecionada && this.reservaSelecionada.mesaIds.includes(mesaId)) {
      return false
    }
    const mesa = this.getMesaPorId(mesaId)
    return mesa?.ocupada || false
  }

  isMesaAtribuidaAReservaAtual(mesaId: string): boolean {
    return !!this.reservaSelecionada && this.reservaSelecionada.mesaIds.includes(mesaId)
  }

  toggleMesaParaReserva(mesa: IMesa): void {
    if (!this.reservaSelecionada || this.isMesaOcupadaPorOutraReserva(mesa.id)) {
      return // Cannot assign if no reservation is selected or if the table is occupied by another reservation
    }

    const indexNaReserva = this.reservaSelecionada.mesaIds.indexOf(mesa.id)
    if (indexNaReserva > -1) {
      this.reservaSelecionada.mesaIds.splice(indexNaReserva, 1)
    } else {
      this.reservaSelecionada.mesaIds.push(mesa.id)
    }
    this.atualizarStatusMesas()
  }

  atualizarStatusMesas(): void {
    this.mesas.forEach((mesa) => {
      const reservaAssociada = this.reservasVisiveis.find((r) => r.mesaIds.includes(mesa.id))
      if (reservaAssociada) {
        mesa.ocupada = true
        mesa.reservaId = reservaAssociada.id
      } else {
        mesa.ocupada = false
        mesa.reservaId = undefined
      }
    })
  }

  getMesaPorId(id: string): IMesa | undefined {
    return this.mesas.find((mesa) => mesa.id === id)
  }

  getClientePorId(id: string): ICliente | undefined {
    return this.clientes.find((cliente) => cliente.id === id)
  }

  getReservaPorId(id: string | undefined): IReserva | undefined {
    if (!id) return undefined
    return this.reservas.find((reserva) => reserva.id === id)
  }

  getMesasFormatadas(reserva: IReserva | null): string {
    if (!reserva || !reserva.mesaIds || reserva.mesaIds.length === 0) {
      return "N/A"
    }
    return (
      reserva.mesaIds
        .map((id) => this.getMesaPorId(id)?.numero)
        .filter(Boolean)
        .join(", ") || "N/A"
    )
  }

  removerMesaDaReserva(reservaId: string, mesaId: string): void {
    const reservaOriginal = this.reservas.find((r) => r.id === reservaId)
    if (reservaOriginal) {
      reservaOriginal.mesaIds = reservaOriginal.mesaIds.filter((id) => id !== mesaId)
      if (this.reservaSelecionada && this.reservaSelecionada.id === reservaId) {
        this.reservaSelecionada.mesaIds = [...reservaOriginal.mesaIds]
      }
      this.atualizarStatusMesas()
    }
  }

  abrirModalAdicionarMesa(mesa?: IMesa): void {
    this.mesaEditando = mesa ? { ...mesa } : this.criarMesaPadrao()
    this.modalService.create({
      nzTitle: this.mesaEditando.id ? "Editar Mesa" : "Adicionar Nova Mesa",
      nzContent: this.modalMesaTemplate,
      nzFooter: [
        { label: "Cancelar", onClick: () => this.fecharModalMesa(true) },
        { label: "Salvar", type: "primary", onClick: () => this.salvarMesa() },
      ],
      nzOnCancel: () => this.fecharModalMesa(true),
    })
  }

  salvarMesa(): void {
    if (!this.mesaEditando.numero.trim() || !this.mesaEditando.area) {
      console.error("Número/Nome e Área da mesa são obrigatórios.")
      return
    }
    if (this.mesaEditando.id) {
      const index = this.mesas.findIndex((m) => m.id === this.mesaEditando.id)
      if (index !== -1) {
        this.mesas[index] = { ...this.mesaEditando }
      }
    } else {
      this.mesaEditando.id = `m${Date.now()}`
      this.mesas.push({ ...this.mesaEditando })
    }
    this.atualizarStatusMesas()
    this.fecharModalMesa(true)
  }

  excluirMesa(mesaId: string): void {
    this.mesas = this.mesas.filter((m) => m.id !== mesaId)
    this.reservas.forEach((reserva) => {
      reserva.mesaIds = reserva.mesaIds.filter((id) => id !== mesaId)
    })
    if (this.reservaSelecionada && this.reservaSelecionada.mesaIds.includes(mesaId)) {
      this.removerMesaDaReserva(this.reservaSelecionada.id, mesaId)
    }
    this.atualizarStatusMesas()
    this.fecharModalMesa(true)
  }

  fecharModalMesa(isFromModalService = false): void {
    if (isFromModalService) {
      this.modalService.closeAll()
    }
    this.mesaEditando = this.criarMesaPadrao()
  }

  abrirModalGerenciarMesas(mesa?: IMesa): void {
    const dialogRef = this.dialog.open(DialogGerenciarMesasComponent, {
      data: {
        modo: mesa ? "editar" : "criar",
        mesa: mesa || null,
        areas: this.areasMesa,
        clientesDoDia: this.getClientesDodia(),
      },
      width: "500px",
      disableClose: true,
    })

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.mesa) {
        if (result.modo === "criar") {
          const novaMesa: IMesa = {
            id: uuidv4(),
            numero: result.mesa.numero,
            area: result.mesa.area,
            capacidade: result.mesa.capacidade,
            tipo: result.mesa.tipo,
            vip: result.mesa.vip,
            ocupada: false,
          }
          this.mesas.push(novaMesa)

          // Vincular ao cliente/reserva do dia se selecionado
          if (result.mesa.cliente && result.mesa.cliente.id) {
            const reservaDoCliente = this.reservas.find(
              (r) =>
                r.clienteId === result.mesa.cliente.id &&
                new Date(r.data).toLocaleDateString("pt-BR") === this.dataAtual.toLocaleDateString("pt-BR"),
            )
            if (reservaDoCliente && !reservaDoCliente.mesaIds.includes(novaMesa.id)) {
              reservaDoCliente.mesaIds.push(novaMesa.id)
            }
          }
        } else if (result.modo === "editar") {
          const index = this.mesas.findIndex((m) => m.id === result.mesa.id)
          if (index > -1) {
            this.mesas[index] = {
              ...this.mesas[index],
              numero: result.mesa.numero,
              area: result.mesa.area,
              capacidade: result.mesa.capacidade,
              tipo: result.mesa.tipo,
              vip: result.mesa.vip,
            }

            // Atualizar vínculo com cliente/reserva se necessário
            if (result.mesa.cliente && result.mesa.cliente.id) {
              const reservaDoCliente = this.reservas.find(
                (r) =>
                  r.clienteId === result.mesa.cliente.id &&
                  new Date(r.data).toLocaleDateString("pt-BR") === this.dataAtual.toLocaleDateString("pt-BR"),
              )
              if (reservaDoCliente && !reservaDoCliente.mesaIds.includes(result.mesa.id)) {
                reservaDoCliente.mesaIds.push(result.mesa.id)
              }
            }
          }
        }
        this.atualizarStatusMesas()
        this.cdr.detectChanges()
        console.log("Mesa salva:", result)
      }
    })
  }

  nzDatePickerChange(date: Date): void {
    this.dataAtual = date
    this.aplicarFiltros()
    this.limparSelecao()
  }

  limparSelecao(): void {
    this.reservaSelecionada = null
    this.cdr.detectChanges()
  }

  editarMesa(mesa: IMesa): void {
    this.abrirModalGerenciarMesas(mesa)
  }

  confirmarRemocaoMesa(mesa: IMesa): void {
    this.modalService.confirm({
      nzTitle: "Tem certeza?",
      nzContent: `Deseja remover a mesa "${mesa.numero}"?`,
      nzOkText: "Sim, remover",
      nzOkType: "primary",
      nzOkDanger: true,
      nzCancelText: "Cancelar",
      nzOnOk: () => this.excluirMesa(mesa.id),
    })
  }

  getClientesDodia(): ICliente[] {
    const dataFormatada = this.dataAtual.toLocaleDateString("pt-BR")
    const reservasDoDia = this.reservas.filter(
      (reserva) => new Date(reserva.data).toLocaleDateString("pt-BR") === dataFormatada,
    )

    const clienteIds = [...new Set(reservasDoDia.map((r) => r.clienteId))]
    return this.clientes.filter((cliente) => clienteIds.includes(cliente.id))
  }

  atualizarStatusReserva(novoStatus: string): void {
    if (this.reservaSelecionada) {
      this.reservaSelecionada.status = novoStatus as any
      // Atualizar no array principal
      const reservaOriginal = this.reservas.find((r) => r.id === this.reservaSelecionada!.id)
      if (reservaOriginal) {
        reservaOriginal.status = novoStatus as any
        // Se mudou para espera, mover para lista de espera
        if (novoStatus === "espera") {
          this.reservasEspera.push(reservaOriginal)
          this.reservas = this.reservas.filter((r) => r.id !== reservaOriginal.id)
          this.reservaSelecionada = null
          this.aplicarFiltros()
          this.aplicarFiltrosEspera()
        }
      }
    }
  }

  atualizarMesasReserva(novasMesas: string[]): void {
    if (this.reservaSelecionada) {
      this.reservaSelecionada.mesaIds = novasMesas
      // Atualizar no array principal
      const reservaOriginal = this.reservas.find((r) => r.id === this.reservaSelecionada!.id)
      if (reservaOriginal) {
        reservaOriginal.mesaIds = novasMesas
      }
      this.atualizarStatusMesas()
    }
  }

  getMesasDisponiveis(): IMesa[] {
    return this.mesas.filter(
      (mesa) => !mesa.ocupada || (this.reservaSelecionada && this.reservaSelecionada.mesaIds.includes(mesa.id)),
    )
  }

  getReservasParaCalendario(): any[] {
    return [...this.reservas, ...this.reservasEspera].map((reserva) => ({
      data: reserva.data,
      clienteId: reserva.clienteId,
      clienteNome: this.getClientePorId(reserva.clienteId)?.nome || "Cliente não encontrado",
      status: reserva.status,
      pessoas: reserva.pessoas,
    }))
  }

  selecionarDataDoCalendario(data: Date): void {
    this.dataAtual = data
    this.aplicarFiltros()
    this.limparSelecao()
    this.mostrarCalendario = false
  }

  formatarDataSimples(data: Date): string {
    return data.toLocaleDateString("pt-BR")
  }

  getClienteNomeById(id: string): string {
    const cliente = this.clientes?.find((c) => c.id === id)
    return cliente ? cliente.nome : ''
  }
}