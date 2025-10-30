// cardapio-publico.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CardapioService } from '../../core/services/cardapio.service';
import { IItemCardapio } from '../../Interfaces/IItem-cardapio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { MatIconModule } from '@angular/material/icon';
import { environment } from '../../../environments/environment';

interface ItemCardapioPublico {
  id?: string;
  nome: string;
  descricao?: string;
  preco: number;
  imagem?: string;
  disponivel: boolean;
  categoria: string | { nome: string };
  tags: string[];
}

interface CategoriaComItens {
  nome: string;
  itens: ItemCardapioPublico[];
}

interface CardapioPublicoResponse {
  nomeRestaurante: string;
  imagemRestaurante?: string;
  cardapio: ItemCardapioPublico[];
}

@Component({
  selector: 'app-cardapio-publico',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
    MatProgressSpinnerModule,
    NzImageModule,
    NzEmptyModule,
    MatIconModule
  ],
  templateUrl: './cardapio-publico.component.html',
  styleUrls: [
    './cardapio-publico.component.scss',
  ]
})
export class CardapioPublicoComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private cardapioService = inject(CardapioService);

  restauranteId: string | null = null;
  itensMenu: ItemCardapioPublico[] = [];
  categorias: CategoriaComItens[] = [];
  isLoading = true;
  hasError = false;
  nomeRestaurante: string = 'Cardápio';
  imagemRestaurante: string | null = null;

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.restauranteId = this.route.snapshot.paramMap.get('idRestaurante');
    if (this.restauranteId) {
      this.carregarCardapio();
    } else {
      console.error("ID do restaurante não encontrado na URL.");
      this.isLoading = false;
      this.hasError = true;
    }
  }

  carregarCardapio(): void {
    this.isLoading = true;
    this.hasError = false;
    this.cardapioService.listarItensPublicos(this.restauranteId!)
      .subscribe({
        next: (response) => {
          this.nomeRestaurante = response.nomeRestaurante || 'Cardápio';
          this.imagemRestaurante = response.imagemRestaurante 
            ? this.getImagemCompleta(`/upl/restaurantes/${response.imagemRestaurante}`)
            : null;
          
          this.itensMenu = (response.cardapio || []).map(item => ({
            ...item,
            categoria: typeof item.categoria === 'string' ? item.categoria : (item.categoria as any)?.nome || 'Outros',
            tags: this.processarTags(item.tags),
            imagem: this.getImagemCompleta(item.imagem)
          } as ItemCardapioPublico));
          this.agruparPorCategoria();
          this.isLoading = false;
        },
        error: (err) => {
          console.error("Erro ao carregar cardápio:", err);
          this.isLoading = false;
          this.hasError = true;
        }
      });
  }

  processarTags(tags: any): string[] {
    if (!tags) return [];
    if (Array.isArray(tags)) {
      return tags.map(tag => typeof tag === 'string' ? tag : tag.tag || tag);
    }
    return [];
  }

  agruparPorCategoria(): void {
    const grupos: { [key: string]: ItemCardapioPublico[] } = {};
    this.itensMenu.forEach(item => {
      if (item.disponivel !== false) {
        const nomeCategoria = typeof item.categoria === 'string' ? item.categoria : (item.categoria as any)?.nome || 'Outros';
        if (!grupos[nomeCategoria]) {
          grupos[nomeCategoria] = [];
        }
        grupos[nomeCategoria].push(item);
      }
    });
    this.categorias = Object.keys(grupos)
      .sort()
      .map(nome => ({ nome, itens: grupos[nome] }));
  }

  getImagemCompleta(imagem: string | undefined): string {
    const placeholder = 'assets/jpg/placeholder-comida.jpg';
    if (!imagem) return placeholder;
    if (imagem.startsWith('http') || imagem.startsWith('data:')) return imagem;
    return `${environment.apiUrl}${imagem}`;
  }

  getTagName(tag: string): string {
    return tag;
  }
}