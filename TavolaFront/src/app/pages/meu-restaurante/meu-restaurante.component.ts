import { Component, inject, type OnInit, ChangeDetectorRef } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormBuilder, type FormGroup, type FormArray, Validators, ReactiveFormsModule } from "@angular/forms"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { MatSelectModule } from "@angular/material/select"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
import { MatChipsModule } from "@angular/material/chips"
import { MatAutocompleteModule } from "@angular/material/autocomplete"
import { MatCardModule } from "@angular/material/card"
import { MatDividerModule } from "@angular/material/divider"
// NG-Zorro imports
import { NzModalModule } from "ng-zorro-antd/modal"
import { NzImageModule } from "ng-zorro-antd/image"
import Swal from "sweetalert2"
import { GlobalSpinnerComponent } from "../../spin/global-spinner/global-spinner.component"

import { RestauranteService } from "../../core/services/restaurante.service"
import { AuthService } from "../../core/services/auth.service"
import { ToastrService } from "ngx-toastr"
import { environment } from "../../../environments/environment"

@Component({
  selector: "app-meu-restaurante",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatCardModule,
    MatDividerModule,
    // NG-Zorro imports
    NzModalModule,
    NzImageModule,
    GlobalSpinnerComponent,
  ],
  templateUrl: "./meu-restaurante.component.html",
  styleUrls: ["./meu-restaurante.component.scss"],
})
export class MeuRestauranteComponent implements OnInit {
  restauranteForm!: FormGroup
  isLoading = true
  isGalleryVisible = false

  tiposCozinha = [
    "Italiana",
    "Brasileira",
    "Japonesa",
    "Hamburgueria",
    "Chinesa",
    "Mexicana",
    "Árabe",
    "Francesa",
    "Indiana",
    "Outros",
  ]

  todosServicos = [
    { nome: "Wi-Fi gratuito", icone: "wifi" },
    { nome: "Aceita cartões", icone: "credit_card" },
    { nome: "Acessível para cadeirantes", icone: "accessible" },
    { nome: "Estacionamento", icone: "local_parking" },
    { nome: "Ideal para crianças", icone: "child_friendly" },
    { nome: "Música ao vivo", icone: "music_note" },
    { nome: "Permite animais", icone: "pets" },
    { nome: "Valet (serviço de manobrista)", icone: "hail" },
    { nome: "Ar-condicionado", icone: "ac_unit" },
    { nome: "Bar completo", icone: "local_bar" },
    { nome: "Área externa", icone: "deck" },
  ]

  imagensBase64: string[] = []
  previews: { url: string; tipo: "principal" | "galeria" }[] = []

  private auth = inject(AuthService)
  private fb = inject(FormBuilder)
  private restauranteService = inject(RestauranteService)
  private cdr = inject(ChangeDetectorRef)
  private toastr = inject(ToastrService)

  ngOnInit(): void {
    this.iniciarFormulario()
    this.carregarDadosDoRestaurante()
  }

  iniciarFormulario(): void {
    this.restauranteForm = this.fb.group({
      tipoCozinha: ["", Validators.required],
      descricao: ["", Validators.required],
      servicos: [[]],
      horariosFuncionamento: this.fb.array([]),
    })
  }

  carregarDadosDoRestaurante(): void {
    const idRestaurante = this.auth.perfil?.id;
    if (!idRestaurante) {
      this.toastr.error("ID do restaurante não encontrado. Faça login novamente.")
      this.isLoading = false
      return
    }

    this.restauranteService.findById(idRestaurante).subscribe({
      next: (data) => {
        this.restauranteForm.patchValue({
          tipoCozinha: data.tipoCozinha,
          descricao: data.descricao,
          servicos: data.servicos || [],
        })

        const horariosArray = this.restauranteForm.get("horariosFuncionamento") as FormArray
        horariosArray.clear()
        data.horariosFuncionamento?.forEach((h) => horariosArray.push(this.criarGrupoHorario(h)))

        this.imagensBase64 = (data.imagens || []).map((img) =>
          img.startsWith("data:") ? img : this.getCorretedImageUrl(img),
        )
        this.atualizarPreviews()

        this.isLoading = false
      },
      error: () => {
        this.toastr.error("Erro ao carregar os dados do restaurante.")
        this.isLoading = false
      },
    })
  }

  get horariosFormArray(): FormArray {
    return this.restauranteForm.get("horariosFuncionamento") as FormArray
  }

  criarGrupoHorario(horario?: { diaSemana: string; abertura: string; fechamento: string }): FormGroup {
    return this.fb.group({
      diaSemana: [horario?.diaSemana || "", Validators.required],
      abertura: [horario?.abertura || "", Validators.required],
      fechamento: [horario?.fechamento || "", Validators.required],
    })
  }

  addHorario(): void {
    this.horariosFormArray.push(this.criarGrupoHorario())
  }

  removeHorario(index: number): void {
    this.horariosFormArray.removeAt(index)
  }

  onFileSelected(event: Event, tipo: "principal" | "galeria"): void {
    const input = event.target as HTMLInputElement
    if (input.files && input.files.length > 0) {
      Array.from(input.files).forEach((file) => {
        const reader = new FileReader()
        reader.onload = () => {
          const base64String = reader.result as string
          // Sempre armazene como data:image/jpeg;base64, para uploads
          const finalString = "data:image/jpeg;base64," + base64String.split(",")[1]

          if (tipo === "principal") {
            // Remove o primeiro item (que é a imagem principal atual), se houver
            if (this.imagensBase64.length > 0) {
              this.imagensBase64.shift()
            }
            this.imagensBase64.unshift(finalString) // Adiciona a nova imagem principal no início
          } else {
            this.imagensBase64.push(finalString)
          }
          this.atualizarPreviews()
        }
        reader.readAsDataURL(file)
      })
    }
  }

  removerImagem(index: number): void {
    this.imagensBase64.splice(index, 1)
    this.atualizarPreviews()
  }

  get imagemPrincipal(): { url: string; tipo: "principal" | "galeria" } | null {
    const principal = this.previews.find((p) => p.tipo === "principal")
    return principal || null
  }

  // Método para remover imagem principal
  removerImagemPrincipal(): void {
    // A imagem principal é sempre a primeira no array
    if (this.imagensBase64.length > 0) {
      this.imagensBase64.splice(0, 1)
      this.atualizarPreviews()
      this.toastr.success('Imagem principal removida com sucesso!')
    }
  }

  private atualizarPreviews(): void {
    this.previews = this.imagensBase64.map((imgBase64OrUrl, index) => ({
      url: imgBase64OrUrl.startsWith("data:") ? imgBase64OrUrl : this.getCorretedImageUrl(imgBase64OrUrl),
      tipo: index === 0 ? "principal" : "galeria", // Primeira imagem é sempre principal
    }))
    this.cdr.detectChanges()
  }

  private isPrincipalImage(imgString: string): boolean {
    // A imagem principal é sempre a primeira no array imagensBase64
    return this.imagensBase64.length > 0 && this.imagensBase64[0] === imgString
  }

  private getCorretedImageUrl(path: string): string {
    if (!path) return ""
    if (path.startsWith("http")) return path
    return `${environment.apiUrl}${path}`
  }

  salvarAlteracoes(): void {
    if (this.restauranteForm.invalid) {
      this.toastr.error("Por favor, preencha todos os campos obrigatórios.")
      return
    }

    const formValue = this.restauranteForm.getRawValue()
    console.log('formValue.servicos antes do mapeamento:', formValue.servicos);
    const servicosNomes = formValue.servicos as string[];
    console.log('servicosNomes após o mapeamento:', servicosNomes);

    const payload = {
      tipoCozinha: formValue.tipoCozinha,
      descricao: formValue.descricao,
      horariosFuncionamento: formValue.horariosFuncionamento,
      nomesServicos: servicosNomes,
      imagens: this.imagensBase64,
    }

    Swal.fire({
      title: "Confirmar alterações?",
      text: "Os dados do seu restaurante serão atualizados.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#F6BD38",
      cancelButtonColor: "#3B221B",
      confirmButtonText: "Sim, salvar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.restauranteService.updateRestaurante(payload).subscribe({
          next: () => {
            Swal.fire("Sucesso!", "Seu restaurante foi atualizado.", "success")
          },
          error: () => {
            Swal.fire("Erro!", "Não foi possível atualizar os dados.", "error")
          },
        })
      }
    })
  }

  openGallery(): void {
    this.isGalleryVisible = true
  }

  closeGallery(): void {
    this.isGalleryVisible = false
  }

  // Placeholder toggle methods for HTML consistency
  toggleEditInfo(): void {
    console.log("Toggle Edit Info clicked")
    // Implement actual edit logic here if needed
  }

  toggleEditHorarios(): void {
    console.log("Toggle Edit Horarios clicked")
    // Implement actual edit logic here if needed
  }

  toggleEditServicos(): void {
    console.log("Toggle Edit Servicos clicked")
    // Implement actual edit logic here if needed
  }

  get galeriaPreviews(): { url: string; tipo: "principal" | "galeria" }[] {
    return this.previews.filter((p) => p.tipo === "galeria")
  }
}
