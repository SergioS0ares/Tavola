import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { Mesa, GarcomInfo } from '../../../core/services/painel-garcom.service';

export interface DialogMesaData {
  mesa: Mesa;
  garcom: GarcomInfo;
  garconsDisponiveis?: GarcomInfo[];
}

@Component({
  selector: 'app-dialog-mesa-acoes',
  standalone: true,
  imports: [
    CommonModule, 
    MatDialogModule, 
    MatButtonModule, 
    MatIconModule, 
    MatFormFieldModule,
    MatSelectModule,
    NzAvatarModule
  ],
  templateUrl: './dialog-mesa-acoes.component.html',
  styleUrls: ['./dialog-mesa-acoes.component.scss']
})
export class DialogMesaAcoesComponent {
  
  garconsParaAdicionar: GarcomInfo[] = [];

  constructor(
    public dialogRef: MatDialogRef<DialogMesaAcoesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogMesaData
  ) {
    console.log('DialogMesaAcoes - Dados recebidos:', this.data);
    this.filtrarGarconsParaAdicionar();
  }

  // Ações principais
  ocuparMesa(): void {
    this.dialogRef.close({ acao: 'ocupar_mesa' });
  }

  executarAcaoPrincipal(): void {
    this.dialogRef.close({ acao: 'iniciar_atendimento' });
  }

  // Ações secundárias
  verCardapio(): void {
    this.dialogRef.close({ acao: 'ver_cardapio' });
  }

  // Filtra a lista de garçons disponíveis
  private filtrarGarconsParaAdicionar(): void {
    if (!this.data.garconsDisponiveis) {
      this.garconsParaAdicionar = [];
      return;
    }
    const idsAtendendo = this.data.mesa.garcomsAtendendo || [];
    this.garconsParaAdicionar = this.data.garconsDisponiveis.filter(
      garcom => !idsAtendendo.includes(garcom.id)
    );
  }

  // Chamado pelo (selectionChange) do mat-select
  adicionarGarcomSelecionado(garcomId: string): void {
    if (garcomId) {
      this.dialogRef.close({ acao: 'adicionar_garcom_especifico', garcomId: garcomId });
    }
  }

  removerGarcom(garcomId: string): void {
    this.dialogRef.close({ acao: 'remover_garcom', garcomId: garcomId });
  }

  liberarMesa(): void {
    this.dialogRef.close({ acao: 'liberar_mesa' });
  }

  fechar(): void {
    this.dialogRef.close();
  }

  // Helpers para a UI
  getStatusText(status: string): string {
    const texts: { [key: string]: string } = {
      'LIVRE': 'Livre',
      'OCUPADA': 'Ocupada',
      'RESERVADA': 'Reservada',
      'EM_ATENDIMENTO': 'Em Atendimento'
    };
    return texts[status] || status;
  }
  
  getAcaoPrincipalTexto(): string {
    const status = this.data.mesa.status;
    if (status === 'LIVRE' || status === 'RESERVADA' || status === 'OCUPADA') {
      return 'Iniciar Atendimento';
    }
    // Adicione mais lógicas se necessário
    return 'Ação';
  }

  // Função para buscar dados do garçom
  getGarcomInfo(id: string): GarcomInfo | undefined {
    // Se não passou a lista, retorna um mock simples
    if (!this.data.garconsDisponiveis) {
      return id === this.data.garcom.id ? this.data.garcom : undefined; 
    }
    return this.data.garconsDisponiveis.find(g => g.id === id);
  }
}
