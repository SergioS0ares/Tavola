import { Component, type OnInit, ViewChild, type TemplateRef, ChangeDetectorRef, LOCALE_ID, inject } from "@angular/core"
import { CommonModule, registerLocaleData, TitleCasePipe } from "@angular/common"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import localePt from "@angular/common/locales/pt"
import { MatDialog } from "@angular/material/dialog"
import { DialogGerenciarMesasComponent } from "./dialog-gerenciar-mesas/dialog-gerenciar-mesas.component"
import { v4 as uuidv4 } from "uuid"
import { CalendarioReservasComponent } from "./calendario-reservas/calendario-reservas.component"
import { finalize } from 'rxjs'
import Swal from 'sweetalert2'
import { MatTabsModule, MatTabChangeEvent } from "@angular/material/tabs"

// Angular Material (imports existentes)
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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

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
import { IAmbiente } from '../../Interfaces/IAmbiente.interface';

// Seus Serviços
import { AmbienteService } from '../../core/services/ambiente.service';
import { MesaService } from '../../core/services/mesa.service';
import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

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
    MatProgressSpinnerModule,
    DialogGerenciarMesasComponent,
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

  // Injeção de dependências
  private ambienteService = inject(AmbienteService);
  private mesaService = inject(MesaService);
  private authService = inject(AuthService);
  private dialog = inject(MatDialog);
  private cdr = inject(ChangeDetectorRef);
  private toastr = inject(ToastrService);
  private modalService = inject(NzModalService);

  // --- NOVO MODELO DE DADOS ---
  ambientes: IAmbiente[] = [];
  ambienteAtivo: IAmbiente | null = null;
  
  // --- DADOS DE RESERVA (Serão populados pela API futuramente) ---
  reservaSelecionada: IReserva | null = null;
  reservas: IReserva[] = []; // Por enquanto vazio
  reservasVisiveis: IReserva[] = [];
  reservasEspera: IReserva[] = [];
  reservasAlmocoVisiveis: IReserva[] = [];
  reservasJantarVisiveis: IReserva[] = [];

  // --- ESTADO DA UI ---
  isLoading = { ambientes: false, mesas: false };
  editandoIndex: number | null = null;
  valorEditado = '';
  adicionandoArea = false;
  nomeNovaArea = '';
  mesaEditando: IMesa = this.criarMesaPadrao();

  dataAtual: Date = new Date();
  filtroPesquisa = "";
  periodoFiltro: "todos" | "Almoço" | "Jantar" = "todos";
  abaAtiva = "Reservas";
  pesquisa = "";
  pesquisaEspera = "";
  mostrarCalendario = false;

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

  reservasEsperaVisiveis: IReserva[] = []

  // --- LÓGICA DE CONTROLE DAS ABAS (MAIS ROBUSTA) ---
  mudarAba(event: MatTabChangeEvent): void {
    const index = event.index;
    if (this.editandoIndex === null && index < this.ambientes.length) {
      this.ambienteAtivo = this.ambientes[index];
      this.cdr.detectChanges();
    }
  }

  // --- MÉTODOS DO CRUD DE ÁREAS (REVISADOS E CORRIGIDOS) ---
  iniciarEdicao(event: Event, index: number): void {
    event.stopPropagation();
    this.cancelarAdicionar();
    if (this.editandoIndex !== null) {
      this.salvarEdicao(this.editandoIndex);
    }
    this.editandoIndex = index;
    this.valorEditado = this.ambientes[index].nome;
  }

  cancelarEdicao(): void {
    this.editandoIndex = null;
    this.valorEditado = '';
  }

  salvarEdicao(index: number): void {
    if (this.editandoIndex === null || index !== this.editandoIndex) return;

    const novoNome = this.valorEditado.trim();
    const ambiente = this.ambientes[index];

    if (novoNome && novoNome !== ambiente.nome) {
      if (this.ambientes.some((a, i) => a.nome.toLowerCase() === novoNome.toLowerCase() && i !== index)) {
        this.toastr.warning(`O ambiente "${novoNome}" já existe.`);
        this.cancelarEdicao();
        return;
      }
      this.ambienteService.putAtualizarAmbiente(ambiente.id, { nome: novoNome }).subscribe({
        next: () => {
          this.toastr.success(`Ambiente "${ambiente.nome}" atualizado para "${novoNome}".`);
          this.carregarAmbientes();
        },
        error: () => this.toastr.error("Erro ao atualizar o ambiente."),
        complete: () => this.cancelarEdicao(),
      });
    } else {
      this.cancelarEdicao();
    }
  }

  ativarModoAdicionar(): void {
    this.cancelarEdicao();
    this.adicionandoArea = true;
  }

  salvarNovaArea(): void {
    if (!this.adicionandoArea) return;

    const novoNome = this.nomeNovaArea.trim();
    if (novoNome && !this.ambientes.find(a => a.nome.toLowerCase() === novoNome.toLowerCase())) {
      this.ambienteService.postCriarAmbiente({ nome: novoNome }).subscribe({
        next: () => {
          this.toastr.success(`Ambiente "${novoNome}" criado com sucesso.`);
          this.carregarAmbientes();
        },
        error: () => this.toastr.error("Erro ao criar o ambiente."),
        complete: () => this.cancelarAdicionar(),
      });
    }
    this.cancelarAdicionar();
  }

  cancelarAdicionar(): void {
    this.adicionandoArea = false;
    this.nomeNovaArea = '';
  }

  confirmarRemocaoArea(event: Event, ambiente: IAmbiente): void {
    event.stopPropagation();
    Swal.fire({
      title: `Remover "${ambiente.nome}"?`,
      html: `Isso removerá o ambiente e todas as <b>${ambiente.mesas.length}</b> mesas contidas nele. Esta ação não pode ser desfeita.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, remover',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        this.ambienteService.deleteRemoverAmbiente(ambiente.id).subscribe({
          next: () => {
            this.toastr.success(`Ambiente "${ambiente.nome}" removido.`);
            this.ambienteAtivo = null;
            this.carregarAmbientes();
          },
          error: () => this.toastr.error("Erro ao remover o ambiente."),
        });
      }
    });
  }

  ngOnInit(): void {
    this.carregarAmbientes();
    this.aplicarFiltros();
    this.aplicarFiltrosEspera();
  }

  criarMesaPadrao(): IMesa {
    return { 
      id: "", 
      nome: "", 
      tipo: "retangular", 
      ambienteId: this.ambienteAtivo?.id || "", 
      vip: false, 
      ocupada: false, 
      capacidade: 2 
    }
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
        const ambiente = this.ambientes.find(a => a.mesas.some(m => m.id === primeiraMesa.id));
        if (ambiente) {
          this.ambienteAtivo = ambiente;
        }
      }
    }
  }

  fecharDetalhes(): void {
    this.reservaSelecionada = null
  }

  mudarArea(event: any): void {
    const index = event.index;
    if (this.editandoIndex === null && index < this.ambientes.length) {
      this.ambienteAtivo = this.ambientes[index];
    }
  }

  formatarData(data: Date): string {
    if (!data) return ""
    return new Date(data).toLocaleDateString("pt-BR", { weekday: "short", day: "2-digit", month: "short" })
  }

  getMesasPorArea(area: string): IMesa[] {
    const ambiente = this.ambientes.find(a => a.nome === area);
    return ambiente?.mesas || [];
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
    this.ambientes.forEach(ambiente => {
      ambiente.mesas.forEach(mesa => {
        const reservaAssociada = this.reservasVisiveis.find((r) => r.mesaIds.includes(mesa.id))
        if (reservaAssociada) {
          mesa.ocupada = true
          mesa.reservaId = reservaAssociada.id
        } else {
          mesa.ocupada = false
          mesa.reservaId = undefined
        }
      });
    });
  }

  getMesaPorId(id: string): IMesa | undefined {
    for (const ambiente of this.ambientes) {
      const mesa = ambiente.mesas.find(m => m.id === id);
      if (mesa) return mesa;
    }
    return undefined;
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
        .map((id) => this.getMesaPorId(id)?.nome)
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
    if (!this.mesaEditando.nome.trim() || !this.mesaEditando.ambienteId) {
      console.error("Nome e Ambiente da mesa são obrigatórios.")
      return
    }

    const ambiente = this.ambientes.find(a => a.id === this.mesaEditando.ambienteId);
    if (!ambiente) {
      console.error("Ambiente não encontrado.")
      return;
    }

    if (this.mesaEditando.id) {
      const index = ambiente.mesas.findIndex((m) => m.id === this.mesaEditando.id)
      if (index !== -1) {
        ambiente.mesas[index] = { ...this.mesaEditando }
      }
    } else {
      this.mesaEditando.id = `m${Date.now()}`
      ambiente.mesas.push({ ...this.mesaEditando })
    }
    this.atualizarStatusMesas()
    this.fecharModalMesa(true)
  }

  excluirMesa(mesaId: string): void {
    for (const ambiente of this.ambientes) {
      ambiente.mesas = ambiente.mesas.filter((m) => m.id !== mesaId)
    }
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

  abrirModalGerenciarMesas(modo: 'criar' | 'editar', mesa?: IMesa): void {
    if (modo === 'criar' && (!this.ambienteAtivo || this.ambienteAtivo.id === "")) {
      this.toastr.info("Por favor, selecione ou crie um ambiente primeiro para adicionar mesas.");
      return;
    }
    
    const dialogRef = this.dialog.open(DialogGerenciarMesasComponent, {
      data: {
        modo: modo,
        mesa: mesa || null,
        idAmbiente: this.ambienteAtivo?.id,
        ambientes: this.ambientes,
      },
      width: '500px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(sucesso => {
      if (sucesso) {
        this.carregarAmbientes();
      }
    });
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
    this.abrirModalGerenciarMesas('editar', mesa)
  }

  confirmarRemocaoMesa(event: Event, mesa: IMesa): void {
    event.stopPropagation();
    Swal.fire({
      title: `Remover a mesa "${mesa.nome}"?`,
      text: "Esta ação não pode ser desfeita.",
      icon: 'warning',
      confirmButtonColor: '#d33',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sim, remover'
    }).then((result) => {
      if (result.isConfirmed) {
        this.mesaService.deleteRemoverMesa(mesa.id).subscribe({
          next: () => {
            this.toastr.success(`Mesa "${mesa.nome}" removida.`);
            this.carregarAmbientes();
          },
          error: () => this.toastr.error("Erro ao remover a mesa."),
        });
      }
    });
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
      const reservaOriginal = this.reservas.find((r) => r.id === this.reservaSelecionada!.id)
      if (reservaOriginal) {
        reservaOriginal.status = novoStatus as any
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
      const reservaOriginal = this.reservas.find((r) => r.id === this.reservaSelecionada!.id)
      if (reservaOriginal) {
        reservaOriginal.mesaIds = novasMesas
      }
      this.atualizarStatusMesas()
    }
  }

  getMesasDisponiveis(): IMesa[] {
    const mesasDisponiveis: IMesa[] = [];
    this.ambientes.forEach(ambiente => {
      mesasDisponiveis.push(...ambiente.mesas.filter(
        mesa => !mesa.ocupada || (this.reservaSelecionada && this.reservaSelecionada.mesaIds.includes(mesa.id))
      ));
    });
    return mesasDisponiveis;
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

  carregarAmbientes(): void {
    const idRestaurante = this.authService.perfil?.id;
    if (!idRestaurante) {
      this.toastr.error("ID do restaurante não encontrado. Faça o login.");
      return;
    }

    this.isLoading.ambientes = true;
    this.ambienteService.getListarAmbientes()
      .pipe(finalize(() => this.isLoading.ambientes = false))
      .subscribe({
        next: (data) => {
          this.ambientes = data;
          if (this.ambienteAtivo) {
            this.ambienteAtivo = this.ambientes.find(a => a.id === this.ambienteAtivo!.id) || null;
          }
          if (!this.ambienteAtivo && this.ambientes.length > 0) {
            this.ambienteAtivo = this.ambientes[0];
          }
          this.atualizarStatusMesasOcupadas();
          this.cdr.detectChanges();
        },
        error: () => this.toastr.error("Falha ao carregar os ambientes."),
      });
  }
  
  atualizarStatusMesasOcupadas(): void {
    const idsMesasOcupadas = new Set<string>();
    this.reservas.forEach(reserva => {
        (reserva.mesaIds || []).forEach(idMesa => idsMesasOcupadas.add(idMesa));
    });

    this.ambientes.forEach(ambiente => {
        ambiente.mesas.forEach(mesa => {
            mesa.ocupada = idsMesasOcupadas.has(mesa.id);
            mesa.reservaId = undefined;
        });
    });
    this.cdr.detectChanges();
  }

  getAmbientePorMesa(mesaId: string): IAmbiente | undefined {
    return this.ambientes.find(ambiente => 
      ambiente.mesas.some(mesa => mesa.id === mesaId)
    );
  }
}