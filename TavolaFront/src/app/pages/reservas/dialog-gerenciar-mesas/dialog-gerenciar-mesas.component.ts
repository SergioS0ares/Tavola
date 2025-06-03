import { Component, Inject, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormBuilder, type FormGroup, Validators, ReactiveFormsModule } from "@angular/forms"
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { MatSelectModule } from "@angular/material/select"
import { MatCheckboxModule } from "@angular/material/checkbox"
import { MatButtonModule } from "@angular/material/button"
import { MatAutocompleteModule } from "@angular/material/autocomplete"
import { type Observable, map, startWith } from "rxjs"

export interface Cliente {
  id: number
  nome: string
}

export interface DialogGerenciarMesasData {
  modo: "criar" | "editar"
  mesa?: any
  areas: string[]
  clientesDoDia: Cliente[]
}

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
    MatAutocompleteModule,
  ],
  template: `
    <mat-dialog-content class="dialog-content">
      <h2 mat-dialog-title>
        {{ data.modo === 'criar' ? 'Adicionar Mesa' : 'Editar Mesa' }}
      </h2>

      <form [formGroup]="form" class="dialog-form">
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Número/Nome da Mesa</mat-label>
          <input matInput formControlName="numero" placeholder="Ex: 1, Mesa 5, Deck" />
          <mat-error *ngIf="form.get('numero')?.hasError('required')">O número/nome da mesa é obrigatório.</mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Área</mat-label>
          <mat-select formControlName="area">
            <mat-option *ngFor="let area of data.areas" [value]="area">
              {{ area }}
            </mat-option>
          </mat-select>
           <mat-error *ngIf="form.get('area')?.hasError('required')">A área é obrigatória.</mat-error>
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

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Cliente (Opcional)</mat-label>
          <input type="text" matInput formControlName="cliente" [matAutocomplete]="auto">
          <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayFn">
            <mat-option *ngFor="let cliente of filteredClientes | async" [value]="cliente">
              {{ cliente.nome }}
            </mat-option>
          </mat-autocomplete>
        </mat-form-field>

        <div class="toggle-row">
          <span class="toggle-label">Mesa VIP</span>
          <mat-checkbox formControlName="vip" color="primary"></mat-checkbox>
        </div>

      </form>
    </mat-dialog-content>

    <mat-dialog-actions align="end" class="dialog-actions">
      <button mat-stroked-button color="warn" (click)="cancelar()">Cancelar</button>
      <button mat-flat-button color="primary" [disabled]="form.invalid" (click)="salvar()">Salvar</button>
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
        // Estilo dos inputs outline - bordas marrons
        .mat-mdc-form-field-appearance-outline {
          .mdc-notched-outline__leading,
          .mdc-notched-outline__notch,
          .mdc-notched-outline__trailing {
            border-color: #3B221B !important;
            border-width: 1px !important;
          }

          &:hover .mdc-notched-outline__leading,
          &:hover .mdc-notched-outline__notch,
          &:hover .mdc-notched-outline__trailing {
            border-color: #F6BD38 !important;
          }

          &.mat-focused .mdc-notched-outline__leading,
          &.mat-focused .mdc-notched-outline__notch,
          &.mat-focused .mdc-notched-outline__trailing {
            border-color: #3B221B !important;
            border-width: 2px !important;
          }
        }

        // Força cores do texto
        .mat-mdc-input-element,
        .mat-mdc-select-value-text,
        .mdc-floating-label,
        .mat-mdc-form-field-label {
          color: #3B221B !important;
        }

        // Placeholder
        .mat-mdc-form-field-infix::placeholder {
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

        // Autocomplete
        .mat-mdc-autocomplete-panel {
          background-color: #FFFFFF !important;
          border: 1px solid rgba(246, 189, 56, 0.3);

          .mat-mdc-option {
            color: #3B221B !important;

            &:hover {
              background-color: rgba(246, 189, 56, 0.1) !important;
            }
          }
        }
      }
    `,
  ],
})
export class DialogGerenciarMesasComponent implements OnInit {
  form!: FormGroup
  filteredClientes!: Observable<Cliente[]>;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogGerenciarMesasData,
    public dialogRef: MatDialogRef<DialogGerenciarMesasComponent>
  ) {
    // Remover o X de fechar
    dialogRef.disableClose = true
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      numero: [this.data.modo === "editar" ? this.data.mesa?.numero || "" : "", Validators.required],
      area: [this.data.modo === "editar" ? this.data.mesa?.area || "" : "", Validators.required],
      capacidade: [
        this.data.modo === "editar" ? this.data.mesa?.capacidade || null : null,
        [Validators.required, Validators.min(1)],
      ],
      tipo: [this.data.modo === "editar" ? this.data.mesa?.tipo || "retangular" : "retangular", Validators.required],
      vip: [this.data.modo === "editar" ? this.data.mesa?.vip || false : false],
      cliente: [null],
    })

    this.filteredClientes = this.form.get("cliente")!.valueChanges.pipe(
      startWith(""),
      map((value) => (typeof value === "string" ? value : value?.nome || "")),
      map((nome) => (nome ? this._filter(nome) : this.data.clientesDoDia.slice())),
    )
  }

  displayFn(cliente: Cliente): string {
    return cliente && cliente.nome ? cliente.nome : ""
  }

  private _filter(nome: string): Cliente[] {
    const filterValue = nome.toLowerCase()
    return this.data.clientesDoDia.filter((cliente) => cliente.nome.toLowerCase().includes(filterValue))
  }

  cancelar(): void {
    this.dialogRef.close()
  }

  salvar(): void {
    if (this.form.valid) {
      const resultado = {
        modo: this.data.modo,
        mesa: {
          ...this.form.value,
          id: this.data.modo === "editar" ? this.data.mesa?.id : undefined,
        },
      }
      this.dialogRef.close(resultado)
    }
  }
}