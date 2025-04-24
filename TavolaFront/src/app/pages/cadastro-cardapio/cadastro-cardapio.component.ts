import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CardapioService } from '../../services/cardapio.service';
import { IItemCardapio } from '../../Interfaces/Iitem-cardapio';
// antes, onde já tinha import do FormItem...
import { DialogItemCardapioComponent } from './dialog-item-cardapio/dialog-item-cardapio.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-cardapio',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatSlideToggleModule,
    DialogItemCardapioComponent
  ],
  templateUrl: './cadastro-cardapio.component.html',
  styleUrls: ['./cadastro-cardapio.component.scss']
})
export class CadastroCardapioComponent implements OnInit {
  private service = inject(CardapioService);
  private dialog  = inject(MatDialog);

  itens: IItemCardapio[] = [];
  defaultImg = 'assets/png/placeholder.png';

  ngOnInit() {
    this.carregarItens();
  }

  private carregarItens() {
    this.service.listarItens().subscribe(x => this.itens = x);
  }

  // dispara o diálogo para criar
  adicionar() {
    const ref = this.dialog.open(DialogItemCardapioComponent, {
      width: '500px',
      panelClass: ['dialog-cardapio', 'mat-elevation-z8'],
      data: { modo: 'criar' }
    });
    
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.carregarItens();
      }
    });
  }

  // dispara o diálogo para editar
  editar(item: IItemCardapio) {
    const ref = this.dialog.open(DialogItemCardapioComponent, {
      width: '500px',
      panelClass: ['dialog-cardapio', 'mat-elevation-z8'],
      data: { modo: 'editar', item }
    });
    
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.carregarItens();
      }
    });
  }

  toggleDisponibilidade(item: IItemCardapio) {
    const itemAtualizado = { ...item, disponivel: !item.disponivel };
    this.service.atualizarItem(itemAtualizado);
    this.carregarItens();
  }

  confirmarRemocao(item: IItemCardapio) {
    Swal.fire({
      title: 'Tem certeza?',
      text: `Deseja remover "${item.nome}" do cardápio?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DA4A24',
      cancelButtonColor: '#3B221B',
      confirmButtonText: 'Sim, remover',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.removerItem(item.id);
        this.carregarItens();
        Swal.fire({
          title: 'Removido!',
          text: 'Item removido com sucesso.',
          icon: 'success',
          confirmButtonColor: '#F6BD38'
        });
      }
    });
  }
}
