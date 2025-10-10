import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ToastrService } from 'ngx-toastr';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EquipeService } from '../../../core/services/equipe.service';
import { IDadosMembro } from '../../../Interfaces/IDadosMembro.interface';

export interface DialogEquipeData {
  editMode: boolean;
  membro: any | null;
}

@Component({
  selector: 'app-dialog-equipe',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './dialog-equipe.component.html',
  styleUrls: ['./dialog-equipe.component.scss']
})
export class DialogEquipeComponent implements OnInit {
  form: FormGroup;
  hidePassword = true;
  dadosGerados: any = null;
  carregando = false;
  copiadoItens: { [key: string]: boolean } = {};

  constructor(
    public dialogRef: MatDialogRef<DialogEquipeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogEquipeData,
    private fb: FormBuilder,
    private equipeService: EquipeService,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    if (this.data.editMode && this.data.membro) {
      this.form.patchValue({
        nome: this.data.membro.nome,
        senha: this.data.membro.senha
      });
    }
  }

  /**
   * Salva o membro (cria ou atualiza)
   */
  salvar(): void {
    if (this.form.valid) {
      this.carregando = true;
      const dados: IDadosMembro = {
        nome: this.form.value.nome,
        senha: this.form.value.senha,
        fotoUrl: '' // Foto será enviada vazia inicialmente
      };

      if (this.data.editMode) {
        // Modo de edição
        this.equipeService.updateMembro(this.data.membro.id, dados).subscribe({
          next: () => {
            this.dialogRef.close({ success: true });
          },
          error: (error) => {
            console.error('Erro ao atualizar membro:', error);
            this.toastr.error('Erro ao atualizar membro', 'Erro');
            this.carregando = false;
          }
        });
      } else {
        // Modo de criação
        this.equipeService.addMembro(dados).subscribe({
          next: (resultado) => {
            this.dadosGerados = {
              nome: resultado.nome,
              codigo: resultado.codigoIdentidade,
              senha: dados.senha // Manter a senha que o usuário digitou
            };
            this.carregando = false;
          },
          error: (error) => {
            console.error('Erro ao adicionar membro:', error);
            this.toastr.error('Erro ao adicionar membro', 'Erro');
            this.carregando = false;
          }
        });
      }
    }
  }

  /**
   * Copia texto para a área de transferência
   */
  copiar(texto: string, tipo: string): void {
    this.copiadoItens[tipo] = true;
    navigator.clipboard.writeText(texto).then(() => {
      this.toastr.success('Copiado!', 'Sucesso');
      setTimeout(() => {
        this.copiadoItens[tipo] = false;
      }, 2000);
    }).catch(() => {
      this.toastr.error('Erro ao copiar', 'Erro');
      this.copiadoItens[tipo] = false;
    });
  }

  /**
   * Formata o código para exibição
   */
  formatarCodigo(codigo: string): string {
    if (codigo.length === 8) {
      return `${codigo.substring(0, 4)}-${codigo.substring(4, 8)}`;
    }
    return codigo;
  }

  /**
   * Retorna a URL da imagem padrão
   */
  getImagemUrl(imagem: string | null): string {
    return 'assets/png/avatar-padrao-tavola-cordeirinho.png';
  }

  /**
   * Fecha o diálogo
   */
  fechar(): void {
    this.dialogRef.close({ success: false });
  }
}
