import { Component, EventEmitter, Input, type OnChanges, Output, type SimpleChanges } from "@angular/core"
import { CommonModule } from "@angular/common"
import { NzBadgeModule } from "ng-zorro-antd/badge"
import { NzCalendarModule } from "ng-zorro-antd/calendar"
import { NzButtonModule } from "ng-zorro-antd/button"
import { NzIconModule } from "ng-zorro-antd/icon"
import { FormsModule } from "@angular/forms"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
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
            <nz-badge 
              [nzStatus]="getStatusBadge(reserva.status)" 
              [nzText]="reserva.clienteNome + ' (' + reserva.pessoas + 'P)'">
            </nz-badge>
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
  max-width: 1000px;
  width: 100%;
  height: auto;
  max-height: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
  margin-bottom: 4px;
  
  .ant-badge-status {
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    text-overflow: ellipsis;
    font-size: 12px;
    line-height: 1.3;
    display: block;
    padding: 2px 0;
  }
}

::ng-deep .ant-picker-calendar {
  background: #FFFFFF;
  border-radius: 8px;
  flex: 1;
  overflow: hidden;
  
  .ant-picker-calendar-header {
    padding: 20px;
    border-bottom: 1px solid #e8e8e8;
  }
  
  .ant-picker-content {
    height: auto;
    overflow: visible;
  }
  
  .ant-picker-calendar-date-content {
    height: 110px !important;
    padding: 6px !important;
    overflow: hidden;
  }
  
  .ant-picker-cell {
    border-right: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
    vertical-align: top;
  }
  
  .ant-picker-calendar-date {
    height: 110px;
    overflow: hidden;
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["reservas"]) {
      this.organizarReservasPorData()
    }
  }

  organizarReservasPorData(): void {
    this.reservasPorData = {}

    this.reservas.forEach((reserva) => {
      const dataKey = this.formatarDataKey(reserva.data)

      if (!this.reservasPorData[dataKey]) {
        this.reservasPorData[dataKey] = []
      }

      this.reservasPorData[dataKey].push(reserva)
    })
  }

  formatarDataKey(data: Date): string {
    return `${data.getFullYear()}-${data.getMonth() + 1}-${data.getDate()}`
  }

  getReservasParaData(data: Date): IReserva[] {
    const dataKey = this.formatarDataKey(data)
    return this.reservasPorData[dataKey] || []
  }

  getStatusBadge(status: string): string {
    switch (status) {
      case "confirmada":
        return "success"
      case "pendente":
        return "warning"
      case "cancelada":
        return "error"
      case "espera":
        return "warning"
      default:
        return "default"
    }
  }

  selecionarData(data: Date): void {
    this.dataSeleccionada.emit(data)
  }

  fecharCalendario(): void {
    this.fechar.emit()
  }
}
