import { Component, OnInit, inject } from '@angular/core';
import { CommonModule }             from '@angular/common';
import { MatCardModule }            from '@angular/material/card';
import { MatIconModule }            from '@angular/material/icon';
import { MatButtonModule }          from '@angular/material/button';
import { MatMenuModule }            from '@angular/material/menu';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { CardapioService }          from '../../services/cardapio.service';
import { IItemCardapio } from '../../Interfaces/Iitem-cardapio';

@Component({
  selector: 'app-cadastro-cardapio',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule
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
    // carrega lista inicial (do mock)
    this.service.listarItens().subscribe(x => this.itens = x);
  }

  // dispara o diálogo para criar
  adicionar() {
    // exemplo: abrir MatDialog com um componente de formulário
    // quando fechar, recarrega
    const ref = this.dialog.open(CadastroCardapioComponent, { width: '400px', data: { modo:'criar' } });
    ref.afterClosed().subscribe(ok => ok && this.reload());
  }

  // dispara o diálogo para editar
  editar(item: IItemCardapio) {
    const ref = this.dialog.open(CadastroCardapioComponent, { width: '400px', data: { modo:'editar', item } });
    ref.afterClosed().subscribe(ok => ok && this.reload());
  }

  // remove direto via serviço
  remover(id: string) {
    if (confirm('Deseja excluir este item?')) {
      this.service.removerItem(id);
    }
  }

  private reload() {
    this.service.listarItens().subscribe(x => this.itens = x);
  }
}
