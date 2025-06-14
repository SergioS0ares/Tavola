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
import { ReservasService } from '../../core/services/reservas.service';
import { ClienteService } from '../../core/services/cliente.service';

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
  private reservasService = inject(ReservasService);
  private clienteService = inject(ClienteService);

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
  isLoading = { ambientes: false, mesas: false, reservas: false };
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
  clientes: ICliente[] = []; // This will no longer be used as client data is in IReserva

  reservasEsperaVisiveis: IReserva[] = [];
  reservasParaCalendario: IReserva[] = [];

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
    this.carregarReservas();
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
    this.carregarReservas()
    this.limparSelecao()
  }

  diaAnterior(): void {
    const novaData = new Date(this.dataAtual)
    novaData.setDate(novaData.getDate() - 1)
    this.dataAtual = novaData
    this.carregarReservas()
    this.limparSelecao()
  }

  temReservasParaPesquisaNoPeriodo(periodo: "Almoço" | "Jantar"): boolean {
    if (!this.pesquisa.trim()) return false

    const termoBusca = this.pesquisa.toLowerCase().trim()
    const reservasDoPeriodo = periodo === "Almoço" ? this.reservasAlmocoVisiveis : this.reservasJantarVisiveis

    if (reservasDoPeriodo.length === 0) return false

    return reservasDoPeriodo.some((reserva: IReserva) => {
      return reserva.cliente.toLowerCase().includes(termoBusca)
    })
  }

  temReservasVisiveisParaPesquisaNoPeriodo(periodo: "Almoço" | "Jantar"): boolean {
    if (!this.pesquisa.trim()) return false
    return periodo === "Almoço" ? this.reservasAlmocoVisiveis.length > 0 : this.reservasJantarVisiveis.length > 0
  }

  existemReservasParaDataAtual(): boolean {
    const dataAtualDia = this.dataAtual.getDate();
    const dataAtualMes = this.dataAtual.getMonth();
    const dataAtualAno = this.dataAtual.getFullYear();

    return this.reservas.some(
      (reserva: IReserva) => {
        const reservaData = new Date(reserva.data);
        return reservaData.getDate() === dataAtualDia &&
               reservaData.getMonth() === dataAtualMes &&
               reservaData.getFullYear() === dataAtualAno;
      }
    );
  }

  aplicarFiltros(): void {
    const dataAtualDia = this.dataAtual.getDate();
    const dataAtualMes = this.dataAtual.getMonth();
    const dataAtualAno = this.dataAtual.getFullYear();

    console.log(`[aplicarFiltros] Filtrando para data: ${this.dataAtual.toLocaleDateString()}`);

    let tempReservas = this.reservas.filter(
      (reserva: IReserva) => {
        const reservaData = new Date(reserva.data);
        const mesmoDia = reservaData.getDate() === dataAtualDia;
        const mesmoMes = reservaData.getMonth() === dataAtualMes;
        const mesmoAno = reservaData.getFullYear() === dataAtualAno;
        
        console.log(`[aplicarFiltros] Comparando reserva: ${reserva.cliente}, Data: ${reservaData.toLocaleDateString()}, Mesmo dia: ${mesmoDia}, Mesmo mês: ${mesmoMes}, Mesmo ano: ${mesmoAno}`);
        
        return mesmoDia && mesmoMes && mesmoAno;
      }
    );

    console.log(`[aplicarFiltros] Reservas filtradas (pré-pesquisa/período): ${tempReservas.length}`);

    if (this.pesquisa && this.pesquisa.trim() !== "") {
      const termoBusca = this.pesquisa.toLowerCase().trim()
      tempReservas = tempReservas.filter((reserva: IReserva) => {
        return reserva.cliente.toLowerCase().includes(termoBusca)
      })
    }

    if (this.periodoFiltro !== "todos") {
      tempReservas = tempReservas.filter((r) => r.periodo === this.periodoFiltro)
    }

    this.reservasVisiveis = [...tempReservas]

    this.reservasAlmocoVisiveis = this.reservasVisiveis.filter((r) => r.periodo === "Almoço")
    this.reservasJantarVisiveis = this.reservasVisiveis.filter((r) => r.periodo === "Jantar")

    console.log(`[aplicarFiltros] Reservas Visíveis: ${this.reservasVisiveis.length}, Almoço: ${this.reservasAlmocoVisiveis.length}, Jantar: ${this.reservasJantarVisiveis.length}`);

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
        return reserva.cliente.toLowerCase().includes(termoBusca)
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
      nzContent: `Deseja reatribuir a reserva de ${reserva.cliente} para ${this.dataAtual.toLocaleDateString("pt-BR")}?`,
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
      return `Ocupada por: ${reserva?.cliente || "Outra reserva"} (${reserva?.horario || ""})`
    }

    if (this.isMesaAtribuidaAReservaAtual(mesa.id)) {
      const cliente = this.reservaSelecionada ? this.reservaSelecionada.cliente : ""
      return `Atribuída a esta reserva (${cliente}, ${this.reservaSelecionada?.horario || ""})`
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

  getReservaPorId(id: string | undefined): IReserva | undefined {
    if (!id) return undefined
    return this.reservas.find((reserva) => reserva.id === id)
  }

  getMesasFormatadas(reserva: IReserva | null): string {
    if (!reserva || !reserva.nomesMesas || reserva.nomesMesas.length === 0) {
      return "N/A";
    }
    return reserva.nomesMesas.join(", ");
  }

  removerMesaDaReserva(reservaId: string, mesaId: string): void {
    const reservaOriginal = this.reservas.find((r) => r.id === reservaId)
    if (reservaOriginal) {
      reservaOriginal.mesaIds = reservaOriginal.mesaIds.filter((id) => id !== mesaId)
      // Also remove from nomesMesas if you want to keep them in sync on the client side
      // This might require a change in how nomesMesas is populated initially if it's not always from mesaIds
      if (reservaOriginal.nomesMesas) {
        const mesaRemovida = this.getMesaPorId(mesaId);
        if (mesaRemovida) {
          reservaOriginal.nomesMesas = reservaOriginal.nomesMesas.filter(name => name !== mesaRemovida.nome);
        }
      }

      if (this.reservaSelecionada && this.reservaSelecionada.id === reservaId) {
        this.reservaSelecionada.mesaIds = [...reservaOriginal.mesaIds]
        this.reservaSelecionada.nomesMesas = [...(reservaOriginal.nomesMesas || [])];
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
      if (reserva.nomesMesas) {
        const mesaRemovida = this.getMesaPorId(mesaId);
        if (mesaRemovida) {
          reserva.nomesMesas = reserva.nomesMesas.filter(name => name !== mesaRemovida.nome);
        }
      }
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
    // Cria um novo objeto Date para garantir que a data seja o início do dia no fuso horário local
    this.dataAtual = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    this.carregarReservas();
    this.limparSelecao();
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

    const clientesUnicos = new Map<string, ICliente>();
    reservasDoDia.forEach(reserva => {
      if (!clientesUnicos.has(reserva.clienteId)) {
        clientesUnicos.set(reserva.clienteId, {
          id: reserva.clienteId,
          nome: reserva.cliente,
          email: reserva.emailCliente,
          telefone: reserva.telefoneCliente,
          avatar: reserva.imagemPerfilCliente,
        });
      }
    });
    return Array.from(clientesUnicos.values());
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
      // Assuming nomesMesas will be updated based on mesaIds after this operation
      this.reservaSelecionada.nomesMesas = novasMesas.map(id => this.getMesaPorId(id)?.nome).filter(Boolean) as string[];

      const reservaOriginal = this.reservas.find((r) => r.id === this.reservaSelecionada!.id)
      if (reservaOriginal) {
        reservaOriginal.mesaIds = novasMesas
        reservaOriginal.nomesMesas = novasMesas.map(id => this.getMesaPorId(id)?.nome).filter(Boolean) as string[];
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
    return this.reservasParaCalendario.map((reserva) => ({
      id: reserva.id,
      clienteId: reserva.clienteId,
      cliente: reserva.cliente || "Cliente não encontrado",
      data: reserva.data,
      status: reserva.status,
      pessoas: reserva.pessoas,
    }));
  }

  selecionarDataDoCalendario(data: Date): void {
    // Cria um novo objeto Date para garantir que a data seja o início do dia no fuso horário local
    this.dataAtual = new Date(data.getFullYear(), data.getMonth(), data.getDate());
    this.carregarReservas();
    this.limparSelecao();
    this.mostrarCalendario = false;
  }

  formatarDataSimples(data: Date): string {
    return data.toLocaleDateString("pt-BR")
  }

  getClienteNomeById(id: string): string {
    return '';
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

  getMesaIdPorNome(mesaNome: string): string | undefined {
    for (const ambiente of this.ambientes) {
      const mesa = ambiente.mesas.find(m => m.nome === mesaNome);
      if (mesa) return mesa.id;
    }
    return undefined;
  }

  carregarReservas(): void {
    const idRestaurante = this.authService.perfil?.id;
    if (!idRestaurante) {
      this.toastr.error("ID do restaurante não encontrado. Faça o login.");
      this.reservas = []; 
      this.aplicarFiltros();
      return;
    }

    this.isLoading.reservas = true;
    
    console.log(`[DEBUG - carregarReservas] this.dataAtual (objeto completo): ${this.dataAtual}`);
    console.log(`[DEBUG - carregarReservas] Ano: ${this.dataAtual.getFullYear()}, Mês (0-indexed): ${this.dataAtual.getMonth()}, Dia: ${this.dataAtual.getDate()}`);

    const ano = this.dataAtual.getFullYear();
    const mes = (this.dataAtual.getMonth() + 1).toString().padStart(2, '0');
    const dia = this.dataAtual.getDate().toString().padStart(2, '0');
    const dataFormatada = `${ano}-${mes}-${dia}`;
    
    console.log(`[carregarReservas] Data selecionada (toLocaleDateString): ${this.dataAtual.toLocaleDateString()}`);
    console.log(`[carregarReservas] Data formatada para API: ${dataFormatada}`);

    this.reservasService.getReservasPorRestaurante(idRestaurante, dataFormatada)
      .pipe(finalize(() => this.isLoading.reservas = false))
      .subscribe({
        next: (response) => {
          console.log('[carregarReservas] Resposta da API:', response);
          this.reservas = response.map((reserva: any) => {
            // Extrai a parte da data "YYYY-MM-DD" e então parseia como uma data local
            const datePart = reserva.data.substring(0, 10); // "YYYY-MM-DD"
            const parts = datePart.split('-'); 
            const dataReserva = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
            console.log(`[carregarReservas] Processando reserva: ${reserva.cliente}, Data original (API): ${reserva.data}, Data parseada (local): ${dataReserva.toLocaleDateString()}, Dia parseado (local): ${dataReserva.getDate()}`);
            
            return {
              id: reserva.id,
              clienteId: reserva.idCliente,
              cliente: reserva.cliente,
              mesaIds: [], 
              data: dataReserva,
              horario: reserva.hora.substring(0, 5),
              periodo: this.determinarPeriodo(reserva.hora),
              pessoas: reserva.pessoas,
              status: this.mapearStatus(reserva.status),
              preferencias: reserva.observacoes,
              restaurante: reserva.restaurante,
              emailCliente: reserva.emailCliente,
              telefoneCliente: reserva.telefoneCliente,
              imagemPerfilCliente: reserva.imagemPerfilCliente,
              nomesMesas: reserva.nomesMesas || [] 
            };
          });
          
          console.log(`[carregarReservas] Total de reservas carregadas: ${this.reservas.length}`);
          this.atualizarStatusMesasOcupadas();
          this.aplicarFiltros();
        },
        error: (error) => {
          console.error('Erro ao carregar reservas:', error);
          this.toastr.error('Erro ao carregar reservas.');
          this.reservas = []; 
          this.aplicarFiltros(); 
        }
      });
  }

  private determinarPeriodo(hora: string): "Almoço" | "Jantar" {
    const horaNum = parseInt(hora.split(':')[0]);
    return horaNum >= 11 && horaNum <= 15 ? "Almoço" : "Jantar";
  }

  private mapearStatus(status: string): "confirmada" | "pendente" | "cancelada" | "finalizada" | "ausente" | "espera" {
    const statusMap: { [key: string]: any } = {
      'ATIVA': 'confirmada',
      'PENDENTE': 'pendente',
      'CANCELADA_CLIENTE': 'cancelada',
      'CANCELADA_RESTAURANTE': 'cancelada',
      'CONCLUIDA': 'finalizada',
      'NAO_COMPARECEU': 'ausente',
      'LISTA_ESPERA': 'espera',
      'CONFIRMADA': 'confirmada'
    };
    return statusMap[status] || 'pendente';
  }

  // Nova função para abrir o calendário e carregar os dados
  abrirCalendario(): void {
    this.mostrarCalendario = true;
    this.carregarReservasParaCalendario(this.dataAtual);
  }

  carregarReservasParaCalendario(data: Date): void {
    const idRestaurante = this.authService.perfil?.id;
    if (!idRestaurante) {
      console.error("ID do restaurante não encontrado para calendário.");
      this.reservasParaCalendario = [];
      return;
    }

    const ano = data.getFullYear();
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const dia = data.getDate().toString().padStart(2, '0');
    const dataFormatada = `${ano}-${mes}-${dia}`;

    this.isLoading.reservas = true; // Use existing isLoading for simplicity or create a new one

    this.reservasService.getReservasParaCalendario(idRestaurante, dataFormatada)
      .pipe(finalize(() => this.isLoading.reservas = false))
      .subscribe({
        next: (response) => {
          this.reservasParaCalendario = response.map((reserva: any) => ({
            id: reserva.id || uuidv4(), // Assuming id might be missing from calendar API
            clienteId: reserva.idCliente || '', // Assuming idCliente might be missing
            cliente: reserva.clienteNome,
            mesaIds: [],
            // Extrai a parte da data "YYYY-MM-DD" e então parseia como uma data local
            data: new Date(
                parseInt(reserva.data.substring(0, 4)), // Ano
                parseInt(reserva.data.substring(5, 7)) - 1, // Mês (0-indexed)
                parseInt(reserva.data.substring(8, 10))  // Dia
            ),
            horario: reserva.hora || '00:00',
            periodo: this.determinarPeriodo(reserva.hora || '00:00'),
            pessoas: reserva.pessoas,
            status: this.mapearStatus(reserva.status),
            preferencias: reserva.observacoes || '',
            restaurante: reserva.restaurante || '',
            emailCliente: reserva.emailCliente || '',
            telefoneCliente: reserva.telefoneCliente || '',
            imagemPerfilCliente: reserva.imagemPerfilCliente || null,
            nomesMesas: reserva.nomesMesas || []
          }));
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Erro ao carregar reservas para calendário:', error);
          this.toastr.error('Erro ao carregar reservas para calendário.');
          this.reservasParaCalendario = [];
        }
      });
  }
}