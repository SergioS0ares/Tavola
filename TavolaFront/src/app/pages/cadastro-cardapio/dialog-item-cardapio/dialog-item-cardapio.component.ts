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
import Swal from 'sweetalert2';;

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

  /** Flag para mostrar campo de nova categoria */
  showOutraCategoria = false;

  /** Lista de categorias */
  categorias = [
    { id: '1', nome: 'Entradas' },
    { id: '2', nome: 'Acompanhamento' },
    { id: '3', nome: 'Pratos Principais' },
    { id: '4', nome: 'Sobremesas' },
    { id: '5', nome: 'Bebidas' },
    { id: '6', nome: 'Outros' }
  ];

  /** Formulário reativo */
  form = this.fb.group({
    nome:          ['', Validators.required],
    descricao:     [''],
    preco:         [0, [Validators.required, Validators.min(0.01)]],
    disponivel:    [true],
    categoriaId:   ['', Validators.required],
    novaCategoria: [''],
    tempoPreparo:  [10],
    tags:          [[] as string[]],
    imagemBase64:  ['', Validators.required],
    ordem:         [0]
  });

  ngOnInit() {
    if (this.data.modo === 'editar' && this.data.item) {
      this.form.patchValue({
        ...this.data.item,
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

  /** Manipula a mudança de categoria */
  onCategoriaChange(event: any) {
    const value = event.value;
    this.showOutraCategoria = value === 'outros';
    
    if (this.showOutraCategoria) {
      this.form.get('novaCategoria')?.setValidators(Validators.required);
    } else {
      this.form.get('novaCategoria')?.clearValidators();
    }
    this.form.get('novaCategoria')?.updateValueAndValidity();
  }

  /** Salva criando ou atualizando via serviço */
  salvar() {
    if (this.form.invalid) return;
    
    const formValue = this.form.value;
    const categoriaId = this.showOutraCategoria && formValue.novaCategoria ? 
      this.criarNovaCategoria(formValue.novaCategoria) : 
      formValue.categoriaId || undefined;

    const itemToSave: Omit<IItemCardapio, 'id'> = {
      nome: formValue.nome!,
      descricao: formValue.descricao || '',
      preco: formValue.preco!,
      disponivel: formValue.disponivel!,
      categoriaId,
      tempoPreparo: formValue.tempoPreparo || undefined,
      tags: formValue.tags || [],
      imagemBase64: formValue.imagemBase64 || undefined,
      ordem: formValue.ordem || 0,
      dataCriacao: new Date().toISOString()
    };

    if (this.data.modo === 'criar') {
      this.service.adicionarItem(itemToSave);
    } else if (this.data.item) {
      this.service.atualizarItem({ ...this.data.item, ...itemToSave });
    }
    
    this.dialogRef.close(true);
  }

  /** Cria uma nova categoria e retorna seu ID */
  private criarNovaCategoria(nome: string): string {
    const novaCategoria = {
      id: (this.categorias.length + 1).toString(),
      nome
    };
    this.categorias.push(novaCategoria);
    return novaCategoria.id;
  }

  /** Fecha o diálogo sem salvar */
  cancelar() {
    this.dialogRef.close(false);
  }
}
