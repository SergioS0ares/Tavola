import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CardapioService } from '../../core/services/cardapio.service';
import { IItemCardapio } from '../../Interfaces/IItem-cardapio';
import { ICategoriaComItens } from '../../Interfaces/ICategoriaComItens.interface';
import { DialogItemCardapioComponent } from './dialog-item-cardapio/dialog-item-cardapio.component';
import Swal from 'sweetalert2';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { GlobalSpinnerComponent } from '../../spin/global-spinner/global-spinner.component';

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
    DialogItemCardapioComponent,
    GlobalSpinnerComponent
  ],
  templateUrl: './cadastro-cardapio.component.html',
  styleUrls: ['./cadastro-cardapio.component.scss']
})
export class CadastroCardapioComponent implements OnInit {
  private service = inject(CardapioService);
  private dialog  = inject(MatDialog);
  private toastr = inject(ToastrService);

  itens: IItemCardapio[] = [];
  defaultImg = 'assets/png/placeholder.png';
  isLoading = false;

  categorias = [
    { id: '1', nome: 'Entradas' },
    { id: '2', nome: 'Acompanhamento' },
    { id: '3', nome: 'Pratos Principais' },
    { id: '4', nome: 'Sobremesas' },
    { id: '5', nome: 'Bebidas' }
  ];

  categoriasComItens: ICategoriaComItens[] = [];

  mensagemSucesso = '';

  ngOnInit() {
    this.carregarItens();
  }

  private carregarItens() {
    this.service.listarItens().subscribe({
      next: (itens) => {
        this.itens = itens.map(item => ({
          ...item,
          categoria: typeof item.categoria === 'string'
            ? { nome: item.categoria }
            : item.categoria,
          tags: (item.tags || []).map((t: any) =>
            typeof t === 'string' ? { tag: t } : t
          ),
          imagem: item.imagem && !item.imagem.startsWith('http')
            ? `${environment.apiUrl}${item.imagem}`
            : item.imagem
        }));
        this.atualizarCategoriasComItens();
      },
      error: (erro) => {
        console.warn('Nenhum item carregado ou erro no backend:', erro);
        this.itens = [];
        this.atualizarCategoriasComItens();
      }
    });
  }

  private atualizarCategoriasComItens() {
    this.categoriasComItens = this.categorias.map(cat => ({
      ...cat,
      itens: this.itens.filter(item => item.categoria && item.categoria.nome === cat.nome)
    }));
  }

  atualizarItens(novoItens: IItemCardapio[]) {
    this.itens = novoItens;
    this.atualizarCategoriasComItens();
  }

  adicionar() {
    const dialogRef = this.dialog.open(DialogItemCardapioComponent, {
      width: '600px',
      data: { modo: 'criar' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const novoItem = {
          ...result,
          categoria: typeof result.categoria === 'string'
            ? { nome: result.categoria }
            : result.categoria,
          tags: (result.tags || []).map((t: any) =>
            typeof t === 'string' ? { tag: t } : t
          )
        };
        this.itens.push(novoItem);
        this.atualizarCategoriasComItens();
        this.toastr.success('Item adicionado com sucesso!');
      }
    });
  }

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
    if (!item.id) return;
    const itemAtualizado = { ...item, disponivel: !item.disponivel };
    this.service.atualizarItem(item.id, itemAtualizado).subscribe({
      next: () => {
        this.carregarItens();
        this.toastr.success('Disponibilidade atualizada!');
      },
      error: () => {
        this.toastr.error('Não foi possível atualizar a disponibilidade.');
      }
    });
  }

  confirmarRemocao(item: IItemCardapio) {
    if (!item.id) {
      Swal.fire({
        title: 'Erro!',
        text: 'Item inválido para remoção.',
        icon: 'error',
        confirmButtonColor: '#F6BD38'
      });
      return;
    }

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
        this.service.removerItem(item.id!).subscribe({
          next: () => {
            this.carregarItens();
            Swal.fire({
              title: 'Removido!',
              text: 'Item removido com sucesso.',
              icon: 'success',
              confirmButtonColor: '#F6BD38'
            });
          },
          error: (erro) => {
            console.error('Erro ao remover item:', erro);
            Swal.fire({
              title: 'Erro!',
              text: 'Não foi possível remover o item.',
              icon: 'error',
              confirmButtonColor: '#F6BD38'
            });
          }
        });
      }
    });
  }
}
