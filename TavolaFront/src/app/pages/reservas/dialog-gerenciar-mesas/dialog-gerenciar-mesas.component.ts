import { Component, Inject, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormBuilder, type FormGroup, Validators, ReactiveFormsModule } from "@angular/forms"
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { MatSelectModule } from "@angular/material/select"
import { MatCheckboxModule } from "@angular/material/checkbox"
import { MatButtonModule } from "@angular/material/button"
import { IMesa } from "../../../Interfaces/IMesa.interface"
import { IDialogGerenciarMesasData } from "../../../Interfaces/IDialogGerenciarMesasData.interface"
import { IAmbiente } from "../../../Interfaces/IAmbiente.interface"
import { MesaService } from "../../../core/services/mesa.service"
import { ToastrService } from "ngx-toastr"
import { finalize } from "rxjs"

@Component({
  selector: "app-dialog-gerenciar-mesas",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  template: `
    <mat-dialog-content class="dialog-content">
      <h2 mat-dialog-title>
        {{ data.modo === 'criar' ? 'Adicionar Mesa' : 'Editar Mesa' }}
      </h2>

      <form [formGroup]="form" class="dialog-form">
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Nome da Mesa</mat-label>
          <input matInput formControlName="nome" placeholder="Ex: Mesa 1, Deck" />
          <mat-error *ngIf="form.get('nome')?.hasError('required')">O nome da mesa é obrigatório.</mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Capacidade</mat-label>
          <input matInput type="number" formControlName="capacidade" placeholder="Ex: 4, 6" />
          <mat-error *ngIf="form.get('capacidade')?.hasError('required')">A capacidade é obrigatória.</mat-error>
          <mat-error *ngIf="form.get('capacidade')?.hasError('min')">A capacidade deve ser no mínimo 1.</mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Tipo</mat-label>
          <mat-select formControlName="tipo">
            <mat-option value="retangular">Retangular</mat-option>
            <mat-option value="circular">Circular</mat-option>
          </mat-select>
          <mat-error *ngIf="form.get('tipo')?.hasError('required')">O tipo é obrigatório.</mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width" *ngIf="data.modo === 'criar'">
          <mat-label>Ambiente</mat-label>
          <mat-select formControlName="ambienteId">
            <mat-option *ngFor="let ambiente of data.ambientes" [value]="ambiente.id">
              {{ ambiente.nome }}
            </mat-option>
          </mat-select>
          <mat-error *ngIf="form.get('ambienteId')?.hasError('required')">O ambiente é obrigatório.</mat-error>
        </mat-form-field>

        <div class="toggle-row">
          <span class="toggle-label">Mesa VIP</span>
          <mat-checkbox formControlName="vip" color="primary"></mat-checkbox>
        </div>

      </form>
    </mat-dialog-content>

    <mat-dialog-actions align="end" class="dialog-actions">
      <button mat-stroked-button color="warn" (click)="cancelar()">Cancelar</button>
      <button mat-flat-button color="primary" [disabled]="form.invalid || isLoading" (click)="salvar()">
        {{ isLoading ? 'Salvando...' : 'Salvar' }}
      </button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      .dialog-content {
        background: #FFFFFF;
        padding: 20px;
        border-radius: 12px 12px 0 0;
        max-height: 80vh;
        overflow-y: auto;
        min-width: 500px;

        h2 {
          color: #3B221B;
          font-size: 24px;
          font-weight: 500;
          margin: 0 0 24px 0;
        }
      }

      .dialog-form {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .full-width {
        width: 100%;
      }

      .toggle-row {
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 8px 0;

        .toggle-label {
          color: #3B221B;
          font-size: 14px;
        }
      }

      .dialog-actions {
        padding: 16px 24px;
        background: #FFFFFF;
        border-radius: 0 0 12px 12px;
        gap: 8px;

        button {
          &[color="primary"] {
            background-color: #F6BD38;
            color: #3B221B;
            font-weight: 500;
            border-radius: 8px;

            &:hover {
              background-color: darken(#F6BD38, 5%);
            }

            &[disabled] {
              background-color: rgba(246, 189, 56, 0.5);
              color: rgba(59, 34, 27, 0.5);
            }
          }

          &[color="warn"] {
            color: #DA4A24;
            border-color: #DA4A24;
            font-weight: 500;
            border-radius: 8px;
            
            &:hover {
              background-color: rgba(218, 74, 36, 0.1);
            }
          }
        }
      }

      ::ng-deep {
        // Estilo dos inputs outline - bordas marrons sempre visíveis
        .mat-mdc-form-field-appearance-outline .mdc-notched-outline__leading,
        .mat-mdc-form-field-appearance-outline .mdc-notched-outline__notch,
        .mat-mdc-form-field-appearance-outline .mdc-notched-outline__trailing {
          border-color: #3B221B !important;
        }

        .mat-mdc-form-field-appearance-outline.mat-focused .mdc-notched-outline__leading,
        .mat-mdc-form-field-appearance-outline.mat-focused .mdc-notched-outline__notch,
        .mat-mdc-form-field-appearance-outline.mat-focused .mdc-notched-outline__trailing {
          border-color: #F6BD38 !important;
        }

        // Força cores do texto
        .mat-mdc-input-element,
        .mat-mdc-select-value-text,
        .mdc-floating-label,
        .mat-mdc-form-field-label {
          color: #3B221B !important;
        }

        // Placeholder
        .mat-mdc-input-element::placeholder {
          color: rgba(59, 34, 27, 0.6) !important;
        }

        // Checkbox amarelo
        .mat-mdc-checkbox.mat-primary .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate) ~ .mdc-checkbox__background {
          border-color: #3B221B !important;
        }
        .mat-mdc-checkbox.mat-primary .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
        .mat-mdc-checkbox.mat-primary .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
          background-color: #F6BD38 !important;
          border-color: #F6BD38 !important;
        }
        .mat-mdc-checkbox.mat-primary .mdc-checkbox__checkmark {
          color: #3B221B !important;
        }

        // Select arrow
        .mat-mdc-select-arrow {
          color: #3B221B;
        }
      }
    `,
  ],
})
export class DialogGerenciarMesasComponent implements OnInit {
  form!: FormGroup
  ambientes: IAmbiente[] = []
  isLoading = false

  constructor(
    private fb: FormBuilder,
    private mesaService: MesaService,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: IDialogGerenciarMesasData,
    public dialogRef: MatDialogRef<DialogGerenciarMesasComponent>
  ) {
    dialogRef.disableClose = true
    if (data.ambientes) {
      this.ambientes = data.ambientes
    }
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [this.data.modo === "editar" ? this.data.mesa?.nome || "" : "", Validators.required],
      capacidade: [
        this.data.modo === "editar" ? this.data.mesa?.capacidade || null : null,
        [Validators.required, Validators.min(1)],
      ],
      tipo: [this.data.modo === "editar" ? this.data.mesa?.tipo || "retangular" : "retangular", Validators.required],
      vip: [this.data.modo === "editar" ? this.data.mesa?.vip || false : false],
      ambienteId: [this.data.modo === "editar" ? this.data.mesa?.ambienteId : this.data.idAmbiente, this.data.modo === "criar" ? Validators.required : []],
    })

    if (this.data.modo === "editar") {
      this.form.get("ambienteId")?.disable()
    }
  }

  cancelar(): void {
    this.dialogRef.close()
  }

  salvar(): void {
    if (this.form.valid) {
      this.isLoading = true
      const mesaData = {
        nome: this.form.get("nome")?.value,
        tipo: this.form.get("tipo")?.value,
        capacidade: this.form.get("capacidade")?.value,
        vip: this.form.get("vip")?.value,
      }

      if (this.data.modo === "criar") {
        const ambienteId = this.form.get("ambienteId")?.value
        this.mesaService.postCriarMesa(ambienteId, mesaData)
          .pipe(finalize(() => this.isLoading = false))
          .subscribe({
            next: () => {
              this.toastr.success("Mesa criada com sucesso!")
              this.dialogRef.close(true)
            },
            error: () => this.toastr.error("Erro ao criar mesa.")
          })
      } else {
        this.mesaService.putAtualizarMesa(this.data.mesa!.id, mesaData)
          .pipe(finalize(() => this.isLoading = false))
          .subscribe({
            next: () => {
              this.toastr.success("Mesa atualizada com sucesso!")
              this.dialogRef.close(true)
            },
            error: () => this.toastr.error("Erro ao atualizar mesa.")
          })
      }
    }
  }
}