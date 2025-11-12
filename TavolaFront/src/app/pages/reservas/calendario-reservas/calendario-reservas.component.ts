import { Component, EventEmitter, Input, type OnChanges, Output, type SimpleChanges, Optional, Inject } from "@angular/core"
import { CommonModule } from "@angular/common"
import { NzBadgeModule } from "ng-zorro-antd/badge"
import { NzCalendarModule } from "ng-zorro-antd/calendar"
import { NzButtonModule } from "ng-zorro-antd/button"
import { NzIconModule } from "ng-zorro-antd/icon"
import { FormsModule } from "@angular/forms"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
import { MatTooltipModule } from "@angular/material/tooltip"
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog"
import { IReserva } from "../../../Interfaces/IReserva.interface"

@Component({
  selector: "app-calendario-reservas",
  standalone: true,
  imports: [
    CommonModule,
    NzBadgeModule,
    NzCalendarModule,
    NzButtonModule,
    NzIconModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  template: `
  <div class="calendario-container">
    <div class="calendario-header">
      <h3>Calendário de Reservas</h3>
      <button mat-icon-button (click)="fecharCalendario()" class="fechar-btn">
        <mat-icon>close</mat-icon>
      </button>
    </div>
    
    <nz-calendar [nzFullscreen]="true" (nzSelectChange)="selecionarData($event)">
      <ul *nzDateCell="let date" class="eventos-dia">
        <ng-container *ngIf="getReservasParaData(date).length > 0">
          <li *ngFor="let reserva of getReservasParaData(date); let i = index" class="evento-item">
            <div class="reserva-info" [matTooltip]="getTooltipReserva(reserva)" matTooltipClass="tavola-tooltip">
              <div class="cliente-info">
                <span class="cliente-nome">{{ reserva.cliente }}</span>
                <span class="pessoas-info">
                  <mat-icon>person</mat-icon>
                  {{ reserva.pessoas }}
                </span>
              </div>
              <div class="horario-info">
                <mat-icon>schedule</mat-icon>
                <span>{{ reserva.horario }}</span>
              </div>
              <div class="status-badge" [ngClass]="'status-' + reserva.status.toLowerCase()">
                <mat-icon>{{ getStatusIcon(reserva.status) }}</mat-icon>
                <span>{{ getStatusText(reserva.status) }}</span>
              </div>
            </div>
          </li>
        </ng-container>
      </ul>
    </nz-calendar>
  </div>
`,
  styles: [
    `
.calendario-container {
  background-color: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 24px;
  max-width: 100%;
  width: 100%;
  min-height: 600px;
  max-height: 90vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #F6BD38;
    border-radius: 4px;
    
    &:hover {
      background: #e6a82e;
    }
  }
}

.calendario-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-shrink: 0;
  
  h3 {
    margin: 0;
    color: #3B221B;
    font-size: 22px;
    font-weight: 500;
  }
  
  .fechar-btn {
    color: #3B221B;
    width: 40px;
    height: 40px;
  }
}

.eventos-dia {
  list-style: none;
  margin: 0;
  padding: 6px;
  max-height: 140px;
  overflow-y: auto;
  overflow-x: hidden;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #F6BD38;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #e6a82e;
  }
}

.evento-item {
  margin-bottom: 6px;
  
  .reserva-info {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 8px;
    border: 1px solid #e8e8e8;
    transition: all 0.2s ease;
    cursor: pointer;
    
    &:hover {
      background-color: #f0f0f0;
      border-color: #F6BD38;
      transform: translateY(-1px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .cliente-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 4px;
      
      .cliente-nome {
        font-weight: 600;
        color: #3B221B;
        font-size: 13px;
      }
      
      .pessoas-info {
        display: flex;
        align-items: center;
        gap: 4px;
        color: #666;
        font-size: 11px;
        
        mat-icon {
          font-size: 14px;
          width: 14px;
          height: 14px;
          line-height: 14px;
        }
      }
    }
    
    .horario-info {
      display: flex;
      align-items: center;
      gap: 4px;
      color: #666;
      font-size: 11px;
      margin-bottom: 4px;
      
      mat-icon {
        font-size: 14px;
        width: 14px;
        height: 14px;
        line-height: 14px;
      }
    }
    
    .status-badge {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 2px 6px;
      border-radius: 12px;
      font-size: 10px;
      font-weight: 600;
      width: fit-content;
      
      mat-icon {
        font-size: 12px;
        width: 12px;
        height: 12px;
        line-height: 12px;
      }
      
      &.status-confirmada {
        background-color: #e8f5e8;
        color: #4CAF50;
      }
      
      &.status-ativa {
        background-color: #e8f5e8;
        color: #4CAF50;
      }
      
      &.status-concluida {
        background-color: #e8f5e8;
        color: #4CAF50;
      }
      
      &.status-pendente {
        background-color: #fff3e0;
        color: #FF9800;
      }
      
      &.status-lista_espera {
        background-color: #fff3e0;
        color: #FF9800;
      }
      
      &.status-cancelada_restaurante {
        background-color: #ffebee;
        color: #F44336;
      }
      
      &.status-nao_compareceu {
        background-color: #ffebee;
        color: #F44336;
      }
    }
  }
}

::ng-deep .ant-picker-calendar {
  background: #FFFFFF;
  border-radius: 8px;
  flex: 1;
  overflow: visible;
  min-height: 500px;
  
  .ant-picker-calendar-header {
    padding: 20px;
    border-bottom: 1px solid #e8e8e8;
    flex-shrink: 0;
  }
  
  .ant-picker-content {
    height: auto;
    overflow: visible;
    flex: 1;
  }
  
  .ant-picker-calendar-date-content {
    height: 110px !important;
    padding: 6px !important;
    overflow-y: auto;
    overflow-x: hidden;
    
    &::-webkit-scrollbar {
      width: 4px;
    }
    
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #F6BD38;
      border-radius: 2px;
    }
  }
  
  .ant-picker-cell {
    border-right: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
    vertical-align: top;
  }
  
  .ant-picker-calendar-date {
    height: 110px;
    overflow: visible;
  }
}

::ng-deep .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner {
  background: #fff !important;
  color: #3B221B !important;
  border: 2px solid #F6BD38 !important;
  border-radius: 8px !important;
}

::ng-deep .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before {
  border-color: #F6BD38 !important;
}

::ng-deep .ant-badge-status-success {
  background-color: #4CAF50 !important;
}

::ng-deep .ant-badge-status-warning {
  background-color: #F6BD38 !important;
}

::ng-deep .ant-badge-status-error {
  background-color: #DA4A24 !important;
}

::ng-deep .ant-badge-status-default {
  background-color: #9E9E9E !important; /* Cor cinza para status padrão/desconhecido */
}

@media (max-width: 800px) {
  .calendario-container {
    max-width: 98vw;
    padding: 8px;
  }
  ::ng-deep .ant-picker-calendar-date-content,
  ::ng-deep .ant-picker-calendar-date {
    height: 80px !important;
  }
}
`,
  ],
})
export class CalendarioReservasComponent implements OnChanges {
  @Input() reservas: IReserva[] = []
  @Output() dataSeleccionada = new EventEmitter<Date>()
  @Output() fechar = new EventEmitter<void>()

  reservasPorData: { [key: string]: IReserva[] } = {}
  reservasInternas: IReserva[] = []

  constructor(
    @Optional() public dialogRef?: MatDialogRef<CalendarioReservasComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data?: { reservas?: IReserva[], initialDate?: Date }
  ) {
    // Se estiver dentro de um dialog, usa os dados do dialog
    if (this.dialogRef && this.data) {
      this.reservasInternas = this.data.reservas || []
      this.organizarReservasPorData()
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["reservas"]) {
      // Se não estiver em dialog, usa os @Input
      if (!this.dialogRef) {
        this.reservasInternas = this.reservas
      }
      this.organizarReservasPorData()
    }
  }

  organizarReservasPorData(): void {
    this.reservasPorData = {}
    const reservasParaUsar = this.dialogRef ? this.reservasInternas : this.reservas

    reservasParaUsar.forEach((reserva) => {
      const dataKey = this.formatarDataKey(reserva.data)

      if (!this.reservasPorData[dataKey]) {
        this.reservasPorData[dataKey] = []
      }

      this.reservasPorData[dataKey].push(reserva)
    })
  }

  formatarDataKey(data: Date): string {
    const ano = data.getFullYear();
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const dia = data.getDate().toString().padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
  }

  getReservasParaData(data: Date): IReserva[] {
    const dataKey = this.formatarDataKey(data)
    return this.reservasPorData[dataKey] || []
  }

  getStatusBadge(status: string): string {
    switch (status) {
      case "CONFIRMADA":
      case "ATIVA":
      case "CONCLUIDA":
        return "success"
      case "PENDENTE":
      case "LISTA_ESPERA":
        return "warning"
      case "CANCELADA_RESTAURANTE":
      case "NAO_COMPARECEU":
        return "error"
      default:
        return "default"
    }
  }

  selecionarData(data: Date): void {
    // Se estiver em dialog, fecha o dialog e retorna a data
    if (this.dialogRef) {
      this.dialogRef.close(data)
    } else {
      // Se não estiver em dialog, emite o evento
      this.dataSeleccionada.emit(data)
    }
  }

  fecharCalendario(): void {
    // Se estiver em dialog, fecha sem retornar dados
    if (this.dialogRef) {
      this.dialogRef.close()
    } else {
      // Se não estiver em dialog, emite o evento
      this.fechar.emit()
    }
  }

  getTooltipStatus(status: string): string {
    switch (status) {
      case "CONFIRMADA":
        return "Reserva confirmada"
      case "ATIVA":
        return "Reserva ativa"
      case "CONCLUIDA":
        return "Reserva concluída"
      case "PENDENTE":
        return "Reserva pendente"
      case "LISTA_ESPERA":
        return "Reserva na lista de espera"
      case "CANCELADA_RESTAURANTE":
        return "Reserva cancelada pelo restaurante"
      case "NAO_COMPARECEU":
        return "Cliente não compareceu"
      default:
        return "Status desconhecido"
    }
  }

  getTooltipReserva(reserva: IReserva): string {
    return `${reserva.cliente} - ${reserva.pessoas} pessoas às ${reserva.horario}`;
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case "CONFIRMADA":
      case "ATIVA":
      case "CONCLUIDA":
        return "check_circle"
      case "PENDENTE":
      case "LISTA_ESPERA":
        return "schedule"
      case "CANCELADA_RESTAURANTE":
      case "NAO_COMPARECEU":
        return "cancel"
      default:
        return "help"
    }
  }

  getStatusText(status: string): string {
    switch (status) {
      case "CONFIRMADA":
        return "Confirmada"
      case "ATIVA":
        return "Ativa"
      case "CONCLUIDA":
        return "Concluída"
      case "PENDENTE":
        return "Pendente"
      case "LISTA_ESPERA":
        return "Lista de Espera"
      case "CANCELADA_RESTAURANTE":
        return "Cancelada"
      case "NAO_COMPARECEU":
        return "Não Compareceu"
      default:
        return "Desconhecido"
    }
  }
}
