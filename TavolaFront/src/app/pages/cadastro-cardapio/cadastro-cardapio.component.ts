import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CardapioService } from '../../services/cardapio.service';
import { IItemCardapio } from '../../Interfaces/Iitem-cardapio';
import { ICategoriaComItens } from '../../Interfaces/ICategoriaComItens.interface';
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
    MatTooltipModule,
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

  categorias = [
    { id: '1', nome: 'Entradas' },
    { id: '2', nome: 'Acompanhamento' },
    { id: '3', nome: 'Pratos Principais' },
    { id: '4', nome: 'Sobremesas' },
    { id: '5', nome: 'Bebidas' }
  ];

  categoriasComItens: ICategoriaComItens[] = [];

  // Considera um item como novo se foi adicionado nas últimas 24 horas
  isNovoItem(item: IItemCardapio): boolean {
    const itemDate = new Date(item.dataCriacao || '');
    const now = new Date();
    const diffHours = (now.getTime() - itemDate.getTime()) / (1000 * 60 * 60);
    return diffHours <= 24;
  }

  ngOnInit() {
    this.carregarItens();
    this.atualizarCategoriasComItens();
  }

  private carregarItens() {
    this.service.listarItens().subscribe(itens => {
      this.itens = itens;
      this.atualizarCategoriasComItens();
    });
  }

  private atualizarCategoriasComItens() {
    this.categoriasComItens = this.categorias.map(cat => ({
      ...cat,
      itens: this.itens.filter(item => item.categoriaId === cat.id)
    }));
  }

  atualizarItens(novoItens: IItemCardapio[]) {
    this.itens = novoItens;
    this.atualizarCategoriasComItens();
  }

  // dispara o diálogo para criar
  adicionar() {
    const dialogRef = this.dialog.open(DialogItemCardapioComponent, {
      width: '600px',
      data: { modo: 'criar' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.carregarItens();
      }
    });
  }

  // dispara o diálogo para editar
  editar(item: IItemCardapio) {
    const dialogRef = this.dialog.open(DialogItemCardapioComponent, {
      width: '600px',
      data: { modo: 'editar', item }
    });

    dialogRef.afterClosed().subscribe(result => {
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
