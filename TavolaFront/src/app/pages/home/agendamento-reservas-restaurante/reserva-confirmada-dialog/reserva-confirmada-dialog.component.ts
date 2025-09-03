import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CalendarService } from '../../../../core/services/calendar.service';
import { IDadosEventoCalendario } from '../../../../Interfaces/IDadosEventoCalendario.interface';

// 1. ATUALIZE A INTERFACE para incluir os comentários
export interface DialogDataReservaConfirmada {
  nomeRestaurante: string;
  endereco: string;
  data: string;
  horario: string;
  quantidadePessoas: number;
  comentarios?: string; // Comentários são opcionais
}

@Component({
  selector: 'app-reserva-confirmada-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    NzDividerModule
  ],
  templateUrl: './reserva-confirmada-dialog.component.html',
  styleUrls: ['./reserva-confirmada-dialog.component.scss']
})
export class ReservaConfirmadaDialogComponent {
  
  constructor(
    public dialogRef: MatDialogRef<ReservaConfirmadaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataReservaConfirmada,
    private calendarService: CalendarService
  ) {}

  adicionarAoGoogleCalendar(): void {
    const dataInicioEvento = new Date(`${this.data.data}T${this.data.horario}`);

    // 2. CONSTRUA A DESCRIÇÃO dinamicamente
    let descricaoEvento = `Reserva para ${this.data.quantidadePessoas} ${this.data.quantidadePessoas > 1 ? 'pessoas' : 'pessoa'}.`;
    if (this.data.comentarios) {
      descricaoEvento += `\n\nPreferências: "${this.data.comentarios}"`;
    }

    const dadosEvento: IDadosEventoCalendario = {
      titulo: `Reserva em: ${this.data.nomeRestaurante}`,
      dataInicio: dataInicioEvento,
      duracaoHoras: 2,
      localizacao: this.data.endereco,
      descricao: descricaoEvento // Use a nova descrição
    };

    const link = this.calendarService.criarLinkGoogleCalendar(dadosEvento);
    window.open(link, '_blank');
  }

  // 3. O botão de fechar apenas fecha o diálogo. A navegação será tratada no componente pai.
  fecharDialog(): void {
    this.dialogRef.close();
  }
}