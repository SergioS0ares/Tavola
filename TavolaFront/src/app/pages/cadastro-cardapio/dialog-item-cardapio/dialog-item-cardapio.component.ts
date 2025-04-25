import { MatFormFieldModule } from '@angular/material/form-field';
import { Component, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule , MatChipInputEvent} from '@angular/material/chips';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CardapioService } from '../../../services/cardapio.service';
import { IItemCardapio } from '../../../Interfaces/Iitem-cardapio';
import { MatIconModule } from '@angular/material/icon';
import Swal from 'sweetalert2';

interface Categoria {
  id: string;
  nome: string;
}

export interface DialogData {
  modo: 'criar' | 'editar';
  item?: IItemCardapio;
}

@Component({
  selector: 'app-dialog-item-cardapio',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatChipsModule,
    MatDialogModule,
    MatIconModule
  ],
  templateUrl: './dialog-item-cardapio.component.html',
  styleUrls: ['./dialog-item-cardapio.component.scss']
})
export class DialogItemCardapioComponent {
  private fb        = inject(FormBuilder);
  private service   = inject(CardapioService);
  private dialogRef = inject(MatDialogRef<DialogItemCardapioComponent>);
  public readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  /** Preview da imagem selecionada */
  preview?: string;

  /** Lista de categorias */
  categorias: Categoria[] = [
    { id: '1', nome: 'Entradas' },
    { id: '2', nome: 'Acompanhamento' },
    { id: '3', nome: 'Pratos Principais' },
    { id: '4', nome: 'Sobremesas' },
    { id: '5', nome: 'Bebidas' }
  ];

  /** Formulário reativo */
  form = this.fb.group({
    nome:          ['', Validators.required],
    descricao:     [''],
    preco:         [0, [Validators.required, Validators.min(0.01)]],
    disponivel:    [true],
    categoriaInput: [null as unknown as Categoria, Validators.required],
    tempoPreparo:  [10],
    tags:          [[] as string[]],
    imagemBase64:  ['', Validators.required],
    ordem:         [0]
  });

  constructor() {
    if (this.data.modo === 'editar' && this.data.item) {
      const categoria = this.categorias.find(c => c.id === this.data.item?.categoriaId);
      this.form.patchValue({
        ...this.data.item,
        categoriaInput: categoria,
        tags: this.data.item.tags || []
      });
      this.preview = this.data.item.imagemBase64;
    }
  }

  /** Getter para o FormControl de tags */
  get tagsControl(): FormControl<string[]> {
    return this.form.get('tags') as FormControl<string[]>;
  }

  /** Lê arquivo de imagem e converte em Base64 */
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    
    const file = input.files[0];
    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      Swal.fire({
        title: 'Arquivo muito grande',
        text: 'Por favor, selecione uma imagem menor que 5MB',
        icon: 'error',
        confirmButtonColor: '#F6BD38'
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
      this.form.patchValue({ imagemBase64: this.preview });
      this.form.get('imagemBase64')?.markAsTouched();
    };
    reader.readAsDataURL(file);
  }

  /** Adiciona uma nova tag */
  addTag(event: MatChipInputEvent) {
    const value = event.value?.trim();
    if (value) {
      const tags = [...this.tagsControl.value, value];
      this.tagsControl.setValue(tags);
    }
    event.chipInput?.clear();
  }

  /** Remove uma tag existente */
  removeTag(tag: string): void {
    const tags = this.form.get('tags')?.value as string[];
    const index = tags.indexOf(tag);
    if (index >= 0) {
      tags.splice(index, 1);
      this.form.get('tags')?.setValue(tags);
    }
  }

  /** Adiciona uma tag de exemplo */
  addExampleTag(tag: string) {
    const currentTags = this.form.get('tags')?.value || [];
    if (!currentTags.includes(tag)) {
      this.form.patchValue({
        tags: [...currentTags, tag]
      });
    }
  }

  /** Manipula a seleção de categoria */
  onCategoriaSelected(event: any) {
    const categoria = event.option.value;
    this.form.patchValue({ categoriaInput: categoria });
  }

  /** Salva criando ou atualizando via serviço */
  salvar() {
    if (this.form.invalid) {
      console.log('Formulário inválido:', this.form.errors);
      return;
    }
    
    const formValue = this.form.value;
    const categoria = formValue.categoriaInput as Categoria;

    console.log('Categoria selecionada:', categoria);
    console.log('Form value:', formValue);

    const itemToSave: Omit<IItemCardapio, 'id'> = {
      nome: formValue.nome!,
      descricao: formValue.descricao || '',
      preco: formValue.preco!,
      disponivel: formValue.disponivel!,
      categoriaId: categoria.id,
      tags: formValue.tags || [],
      imagemBase64: formValue.imagemBase64!,
      dataCriacao: new Date().toISOString()
    };

    console.log('Item a ser salvo:', itemToSave);

    if (this.data.modo === 'criar') {
      this.service.adicionarItem(itemToSave);
    } else if (this.data.item) {
      this.service.atualizarItem({ ...this.data.item, ...itemToSave });
    }
    
    this.dialogRef.close(true);
  }

  /** Fecha o diálogo sem salvar */
  cancelar() {
    this.dialogRef.close(false);
  }
}
