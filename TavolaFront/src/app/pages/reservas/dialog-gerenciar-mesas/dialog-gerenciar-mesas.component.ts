import { Component, Inject, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import {  FormBuilder, type FormGroup, Validators, ReactiveFormsModule } from "@angular/forms"
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
  mesa?: any // Replace 'any' with a proper Mesa interface later
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
        background: #FFF8EE; /* Tavola dialog background color */
        padding: 20px;
        border-radius: 12px 12px 0 0;
        max-height: 80vh;
        overflow-y: auto;
        min-width: 400px;

        h2 {
          color: #3B221B;
          font-size: 24px;
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
          color: #3B221B; /* Brown color for label */
          font-size: 14px;
        }
      }

      mat-dialog-actions {
        padding: 16px 20px 20px;
        margin: 0;
        background: #FFF8EE; /* Tavola dialog background color */
        border-top: 1px solid #e0e0e0;
        border-radius: 0 0 12px 12px;

        button {
          &[color="primary"] {
            background-color: #F6BD38; /* Primary button color */
            color: #3B221B; /* Text color for primary button */

            &:hover {
              background-color: darken(#F6BD38, 5%);
            }

            &[disabled] {
              background-color: rgba(246, 189, 56, 0.5);
              color: rgba(59, 34, 27, 0.5);
            }
          }

          &[color="warn"] {
            color: #DA4A24; /* Warn button text color */
            border-color: #DA4A24; /* Warn button border color */
            
            &:hover {
              background-color: rgba(218, 74, 36, 0.1);
            }
          }
        }
      }

      /* Styles for Angular Material components to match theme */
      ::ng-deep {
        .mdc-text-field--outlined {
          --mdc-outlined-text-field-outline-color: rgba(59, 34, 27, 0.2); /* Default border color */
          --mdc-outlined-text-field-focus-outline-color: #DA4A24; /* Accent color */
          --mdc-outlined-text-field-hover-outline-color: rgba(59, 34, 27, 0.4);
          --mdc-outlined-text-field-label-text-color: rgba(59, 34, 27, 0.6); /* Label color */
          --mdc-outlined-text-field-focus-label-text-color: #DA4A24;
        }

        .mat-mdc-input-element,
        .mat-mdc-select-value-text,
        .mdc-floating-label,
        .mat-mdc-form-field-label {
          color: #3B221B !important; /* Text color for inputs and labels */
        }

         .mat-mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate) ~ .mdc-checkbox__background {
           border-color: #3B221B !important; /* Unchecked checkbox border */
         }
         .mat-mdc-checkbox.mat-accent .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
         .mat-mdc-checkbox.mat-accent .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
           background-color: #F6BD38 !important; /* Checked checkbox background (Primary) */
           border-color: #F6BD38 !important; /* Checked checkbox border */
         }

        .mat-mdc-form-field-appearance-outline .mdc-notched-outline__leading,
        .mat-mdc-form-field-appearance-outline .mdc-notched-outline__notch,
        .mat-mdc-form-field-appearance-outline .mdc-notched-outline__trailing {
          border-color: rgba(59, 34, 27, 0.2) !important; /* Default border color */
        }

        &:hover .mat-mdc-form-field-appearance-outline .mdc-notched-outline__leading,
        &:hover .mat-mdc-form-field-appearance-outline .mdc-notched-outline__notch,
        &:hover .mat-mdc-form-field-appearance-outline .mdc-notched-outline__trailing {
          border-color: #F6BD38 !important; /* Hover border color (Primary) */
        }

         .mat-mdc-select-arrow {
           color: #3B221B; /* Select arrow color */
         }

        /* Ensure placeholder color is correct */
        .mat-mdc-form-field-infix::placeholder {
             color: rgba(59, 34, 27, 0.6) !important;
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
    public dialogRef: MatDialogRef<DialogGerenciarMesasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogGerenciarMesasData
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      numero: [this.data.modo === "editar" ? this.data.mesa.numero : "", Validators.required],
      area: [this.data.modo === "editar" ? this.data.mesa.area : "", Validators.required],
      capacidade: [
        this.data.modo === "editar" ? this.data.mesa.capacidade : null,
        [Validators.required, Validators.min(1)],
      ],
      tipo: [this.data.modo === "editar" ? this.data.mesa.tipo : "retangular", Validators.required],
      vip: [this.data.modo === "editar" ? this.data.mesa.vip : false],
      cliente: [null],
    })

    this.filteredClientes = this.form.get("cliente")!.valueChanges.pipe(
      startWith(""),
      map((value) => (typeof value === "string" ? value : value.nome)),
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
      this.dialogRef.close({ ...this.form.value, id: this.data.modo === "editar" ? this.data.mesa.id : undefined }) // Include ID for editing
    }
  }
}
