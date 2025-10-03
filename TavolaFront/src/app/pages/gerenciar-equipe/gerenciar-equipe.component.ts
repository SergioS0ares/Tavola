import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { EquipeService, MembroEquipe } from '../../core/services/equipe.service';
import { DialogEquipeComponent, DialogEquipeData } from './dialog-equipe/dialog-equipe.component';
// import { GlobalSpinnerService } from '../../spin/global-spinner/global-spinner.service';

@Component({
  selector: 'app-gerenciar-equipe',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule
  ],
  templateUrl: './gerenciar-equipe.component.html',
  styleUrls: ['./gerenciar-equipe.component.scss']
})
export class GerenciarEquipeComponent implements OnInit {
  equipe: MembroEquipe[] = [];
  equipeFiltrada: MembroEquipe[] = [];
  carregando = false;
  pesquisa = '';
  copiado = false;

  constructor(
    private equipeService: EquipeService,
    private dialog: MatDialog,
    private toastr: ToastrService
    // private spinner: GlobalSpinnerService
  ) {}

  ngOnInit(): void {
    // this.spinner.show();
    this.carregarEquipe();
  }

  /**
   * Carrega a lista de membros da equipa
   */
  carregarEquipe(): void {
    this.carregando = true;
    this.equipeService.getEquipe().subscribe({
      next: (membros) => {
        this.equipe = membros;
        this.equipeFiltrada = membros;
        this.carregando = false;
        // this.spinner.hide();
      },
      error: (error) => {
        console.error('Erro ao carregar equipa:', error);
        this.toastr.error('Erro ao carregar equipa', 'Erro');
        this.carregando = false;
        // this.spinner.hide();
      }
    });
  }

  /**
   * Abre o diálogo para adicionar novo membro
   */
  abrirDialogAdicao(): void {
    const dialogData: DialogEquipeData = {
      editMode: false,
      membro: null
    };

    const dialogRef = this.dialog.open(DialogEquipeComponent, {
      data: dialogData,
      width: '500px',
      maxWidth: '90vw',
      disableClose: false
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.success) {
        this.carregarEquipe();
        this.toastr.success('Membro adicionado com sucesso!', 'Sucesso');
      }
    });
  }

  /**
   * Abre o diálogo para editar membro
   */
  abrirDialogEdicao(membro: MembroEquipe): void {
    const dialogData: DialogEquipeData = {
      editMode: true,
      membro: membro
    };

    const dialogRef = this.dialog.open(DialogEquipeComponent, {
      data: dialogData,
      width: '500px',
      maxWidth: '90vw',
      disableClose: false
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.success) {
        this.carregarEquipe();
        this.toastr.success('Membro atualizado com sucesso!', 'Sucesso');
      }
    });
  }

  /**
   * Remove um membro da equipa
   */
  removerMembro(membro: MembroEquipe): void {
    Swal.fire({
      title: 'Tem certeza?',
      text: `Deseja remover ${membro.nome} da equipe?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#c22523',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Sim, remover!',
      cancelButtonText: 'Cancelar',
      background: '#fff',
      customClass: {
        popup: 'swal-popup-tavola',
        title: 'swal-title-tavola',
        confirmButton: 'swal-confirm-tavola',
        cancelButton: 'swal-cancel-tavola'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.equipeService.deleteMembro(membro.id).subscribe({
          next: () => {
            this.carregarEquipe();
            this.toastr.success('Membro removido com sucesso!', 'Sucesso');
          },
          error: (error) => {
            console.error('Erro ao remover membro:', error);
            this.toastr.error('Erro ao remover membro', 'Erro');
          }
        });
      }
    });
  }

  /**
   * Copia o código de acesso para a área de transferência
   */
  copiarCodigo(codigo: string): void {
    this.copiado = true;
    navigator.clipboard.writeText(codigo).then(() => {
      this.toastr.success('Código copiado!', 'Sucesso');
      setTimeout(() => {
        this.copiado = false;
      }, 2000);
    }).catch(() => {
      this.toastr.error('Erro ao copiar código', 'Erro');
      this.copiado = false;
    });
  }

  /**
   * Formata o código para exibição (1234-5678)
   */
  formatarCodigo(codigo: string): string {
    if (codigo.length === 8) {
      return `${codigo.substring(0, 4)}-${codigo.substring(4, 8)}`;
    }
    return codigo;
  }

  /**
   * Retorna a URL da imagem do membro
   */
  getImagemUrl(imagem: string | null): string {
    if (imagem) {
      return imagem; // Aqui você pode implementar a lógica para URLs absolutas
    }
    return 'assets/png/avatar-padrao-tavola-cordeirinho.png';
  }

  /**
   * TrackBy function para otimizar a renderização da lista
   */
  trackByMembroId(index: number, membro: MembroEquipe): string {
    return membro.id;
  }

  /**
   * Aplica filtros de busca
   */
  aplicarFiltros(): void {
    if (!this.pesquisa.trim()) {
      this.equipeFiltrada = [...this.equipe];
    } else {
      this.equipeFiltrada = this.equipe.filter(membro =>
        membro.nome.toLowerCase().includes(this.pesquisa.toLowerCase())
      );
    }
  }

  /**
   * Limpa a pesquisa
   */
  limparPesquisa(): void {
    this.pesquisa = '';
    this.aplicarFiltros();
  }

  /**
   * Troca a imagem do membro
   */
  trocarImagem(membro: MembroEquipe): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.style.display = 'none';
    
    input.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const novaImagem = e.target.result;
          // Aqui você pode implementar a lógica para salvar a nova imagem
          // Por enquanto, vamos apenas atualizar localmente
          membro.imagem = novaImagem;
          this.toastr.success('Foto atualizada com sucesso!', 'Sucesso');
        };
        reader.readAsDataURL(file);
      }
    };
    
    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
  }
}
