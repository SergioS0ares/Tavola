import { Component, Inject, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule, MatDialogContent } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { PainelGarcomService, PedidoItem } from '../../../core/services/painel-garcom.service';

export interface DialogCardapioData {
  mesaId: string;
  pedidoId?: string; // Se for para adicionar a um pedido existente
}

interface CardapioItem {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  imagem?: string;
  tags?: string[];
  quantidade?: number; // Para o carrinho
}

interface CardapioCategoria {
  nome: string;
  itens: CardapioItem[];
}

@Component({
  selector: 'app-dialog-cardapio-garcom',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    NzImageModule,
    NzIconModule
  ],
  templateUrl: './dialog-cardapio-garcom.component.html',
  styleUrls: ['./dialog-cardapio-garcom.component.scss']
})
export class DialogCardapioGarcomComponent implements OnInit, AfterViewInit {
  // Referências aos elementos do HTML para controle de scroll e sticky
  @ViewChild('categoriasScrollContainer') categoriasScrollContainer!: ElementRef;
  @ViewChild('categoriasNavContainer') categoriasNavContainer!: ElementRef;
  // Referência ao conteúdo do diálogo para o listener de scroll
  @ViewChild(MatDialogContent) dialogContent!: MatDialogContent; 

  categorias: CardapioCategoria[] = [];
  carrinho: CardapioItem[] = [];
  
  // Estado da navegação
  categoriaAtiva: string = ''; // Inicia vazio ou com a primeira categoria
  categoriasFixas = false;
  mostrarSetaEsquerda = false;
  mostrarSetaDireita = false;
  scrollAmount = 200; // Pixels para rolar as categorias
  
  constructor(
    public dialogRef: MatDialogRef<DialogCardapioGarcomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogCardapioData,
    private painelGarcomService: PainelGarcomService
  ) {}
  
  ngOnInit(): void {
    // Carrega itens existentes se estiver editando um pedido
    if (this.data.pedidoId) {
      this.carregarItensExistentes();
    }

    // Mock do cardápio
    this.categorias = [
      {
        nome: 'Entradas',
        itens: [
          { 
            id: 'item-1', 
            nome: 'Hambúrguer Artesanal', 
            descricao: 'Pão brioche, carne 180g, queijo cheddar, alface, tomate e molho especial', 
            preco: 25.90, 
            categoria: 'Entradas',
            imagem: 'assets/jpg/Comida.jpg',
            tags: ['Popular', 'Carnes']
          },
          { 
            id: 'item-2', 
            nome: 'Salada Caesar', 
            descricao: 'Alface romana, croutons, queijo parmesão e molho caesar', 
            preco: 18.90, 
            categoria: 'Entradas',
            imagem: 'assets/jpg/Comida.jpg',
            tags: ['Vegetariano', 'Leve']
          }
        ]
      },
      {
        nome: 'Pratos Principais',
        itens: [
          { 
            id: 'item-3', 
            nome: 'Pizza Margherita', 
            descricao: 'Molho de tomate, mussarela, manjericão e azeite', 
            preco: 45.90, 
            categoria: 'Pratos Principais',
            imagem: 'assets/jpg/Comida.jpg',
            tags: ['Vegetariano', 'Clássico']
          },
          { 
            id: 'item-4', 
            nome: 'Salmão Grelhado', 
            descricao: 'Salmão grelhado com arroz de açafrão e legumes', 
            preco: 52.90, 
            categoria: 'Pratos Principais',
            imagem: 'assets/jpg/Comida.jpg',
            tags: ['Peixes', 'Saudável']
          }
        ]
      },
      {
        nome: 'Bebidas',
        itens: [
          { 
            id: 'item-5', 
            nome: 'Coca-Cola 350ml', 
            descricao: 'Refrigerante gelado', 
            preco: 8.50, 
            categoria: 'Bebidas',
            imagem: 'assets/jpg/Comida.jpg',
            tags: ['Refrigerante']
          },
          { 
            id: 'item-6', 
            nome: 'Suco de Laranja', 
            descricao: 'Suco natural de laranja', 
            preco: 12.90, 
            categoria: 'Bebidas',
            imagem: 'assets/jpg/Comida.jpg',
            tags: ['Natural', 'Saudável']
          }
        ]
      }
    ];
    // Define a primeira categoria como ativa inicialmente
    if (this.categorias.length > 0) {
      this.categoriaAtiva = this.categorias[0].nome;
    }
  }

  ngAfterViewInit(): void {
    // Garante que as setas sejam verificadas após a renderização inicial
    setTimeout(() => this.verificarSetas(), 100);
  }
  
  adicionarItem(item: CardapioItem): void {
    // Lógica para adicionar ao this.carrinho
    const itemExistente = this.carrinho.find(i => i.id === item.id);
    if (itemExistente) {
      itemExistente.quantidade = (itemExistente.quantidade || 1) + 1;
    } else {
      this.carrinho.push({ ...item, quantidade: 1 });
    }
  }
  
  removerItem(itemId: string): void {
    this.carrinho = this.carrinho.filter(item => item.id !== itemId);
  }
  
  ajustarQuantidade(itemId: string, quantidade: number): void {
    const item = this.carrinho.find(i => i.id === itemId);
    if (item) {
      if (quantidade <= 0) {
        this.removerItem(itemId);
      } else {
        item.quantidade = quantidade;
      }
    }
  }
  
  getTotalCarrinho(): number {
    return this.carrinho.reduce((total, item) => total + (item.preco * (item.quantidade || 1)), 0);
  }
  
  getQuantidadeItem(itemId: string): number {
    const item = this.carrinho.find(i => i.id === itemId);
    return item?.quantidade || 0; // Retorna 0 se não estiver no carrinho
  }

  getTotalItensCarrinho(): number {
    return this.carrinho.reduce((total, item) => total + (item.quantidade || 0), 0);
  }
  
  finalizarPedido(): void {
    if (this.carrinho.length === 0) {
      return;
    }
    
    // Converter para PedidoItem[]
    const itensPedido: PedidoItem[] = this.carrinho.map(item => ({
      id: item.id,
      nome: item.nome,
      quantidade: item.quantidade || 1,
      preco: item.preco,
      status: 'PENDENTE'
    }));
    
    if (this.data.pedidoId) {
      // Atualizar pedido existente - primeiro remove o pedido antigo e cria um novo
      this.painelGarcomService.removerPedido(this.data.pedidoId);
      this.painelGarcomService.criarNovoPedido(this.data.mesaId, itensPedido, 'garcom-1');
    } else {
      // Criar um novo pedido
      this.painelGarcomService.criarNovoPedido(this.data.mesaId, itensPedido, 'garcom-1');
    }
    
    this.dialogRef.close(true); // Fecha o dialog
  }
  
  fechar(): void {
    this.dialogRef.close();
  }

  private carregarItensExistentes(): void {
    // Busca o pedido existente no serviço
    const pedidos = this.painelGarcomService.getPedidosAtuais();
    const pedido = pedidos.find(p => p.id === this.data.pedidoId);
    
    if (pedido) {
      // Adiciona os itens existentes ao carrinho
      this.carrinho = pedido.itens.map(item => ({
        id: item.id,
        nome: item.nome,
        descricao: '', // Mock - em produção viria do cardápio
        preco: item.preco,
        categoria: '', // Mock - em produção viria do cardápio
        quantidade: item.quantidade
      }));
    }
  }

  // === MÉTODOS PARA NAVEGAÇÃO DE CATEGORIAS (Copiados e Adaptados) ===

  // Listener para o scroll DENTRO do MatDialogContent
  onDialogScroll(event: Event): void {
    this.checkCategoriasPosition(event.target as HTMLElement);
  }

  // Verifica se a barra de categorias deve ficar sticky
  private checkCategoriasPosition(scrollableElement: HTMLElement): void {
    if (!this.categoriasNavContainer) return;

    const navContainerTop = this.categoriasNavContainer.nativeElement.getBoundingClientRect().top;
    // O 'top' de referência agora é o topo do DIÁLOGO (geralmente 0 ou próximo)
    const dialogTop = scrollableElement.getBoundingClientRect().top; 
    
    // Fica fixo se o topo da barra de navegação atingir o topo do conteúdo do diálogo
    const shouldBeFixed = navContainerTop <= dialogTop; 

    if (shouldBeFixed !== this.categoriasFixas) {
      this.categoriasFixas = shouldBeFixed;
    }

    // Lógica para destacar a categoria ativa durante o scroll
    let foundActive = false;
    for (const categoria of this.categorias) {
      const section = document.getElementById("categoria-" + this.getCategoriaId(categoria.nome));
      if (!section) continue;

      const rect = section.getBoundingClientRect();
      // Ajusta o 'top' de referência (ex: 80px abaixo do topo do dialog content)
      const referenceTop = dialogTop + 80; 

      if (rect.top <= referenceTop && rect.bottom >= referenceTop) {
        if (this.categoriaAtiva !== categoria.nome) {
          this.categoriaAtiva = categoria.nome;
          this.centralizarCategoriaAtiva(); // Tenta centralizar ao mudar
        }
        foundActive = true;
        break; // Para na primeira categoria visível
      }
    }
    // Se nenhuma seção está na posição de referência (ex: no topo ou fundo do scroll), mantém a última ativa
    // Ou define a primeira se estiver no topo absoluto
    if (!foundActive && scrollableElement.scrollTop === 0 && this.categorias.length > 0) {
         this.categoriaAtiva = this.categorias[0].nome;
         this.centralizarCategoriaAtiva();
    }

    this.verificarSetas(); // Verifica as setas após o scroll
  }

  // Verifica se as setas de scroll da categoria devem ser mostradas
  verificarSetas(): void {
    if (!this.categoriasScrollContainer) return;
    const container = this.categoriasScrollContainer.nativeElement;
    // Pequena tolerância para evitar flickering
    this.mostrarSetaEsquerda = container.scrollLeft > 5; 
    this.mostrarSetaDireita = container.scrollWidth > container.clientWidth && 
                              container.scrollLeft < (container.scrollWidth - container.clientWidth - 5);
  }

  // Rola a barra de categorias
  scrollCategorias(direcao: "left" | "right"): void {
    if (!this.categoriasScrollContainer) return;
    const container = this.categoriasScrollContainer.nativeElement;
    const scrollValue = direcao === "left" ? -this.scrollAmount : this.scrollAmount;
    container.scrollBy({ left: scrollValue, behavior: "smooth" });
    // Verifica as setas após um pequeno delay para o scroll terminar
    setTimeout(() => this.verificarSetas(), 300); 
  }

  // Rola o CONTEÚDO do diálogo até a categoria clicada
  selecionarCategoria(categoriaNome: string): void {
    this.categoriaAtiva = categoriaNome;

    const elementId = "categoria-" + this.getCategoriaId(categoriaNome);
    const element = document.getElementById(elementId);
    
    if (element) {
       // Usa scrollIntoView como alternativa mais simples
       const offset = this.categoriasFixas ? (this.categoriasNavContainer?.nativeElement.offsetHeight || 60) : 0;
       
       element.scrollIntoView({
         behavior: "smooth",
         block: "start",
         inline: "nearest"
       });
       
       // Ajusta a posição após o scroll
       setTimeout(() => {
         window.scrollBy(0, -offset - 16);
       }, 100);
    }

    this.centralizarCategoriaAtiva(); // Centraliza o botão da categoria clicada na barra
  }

  // Centraliza o BOTÃO da categoria ativa na barra de navegação
  centralizarCategoriaAtiva(): void {
    if (!this.categoriasScrollContainer) return;
    const container = this.categoriasScrollContainer.nativeElement;
    // Encontra o botão ativo
    const activeButton = container.querySelector('.categoria-btn.active') as HTMLElement; 
    if (!activeButton) return;

    const containerWidth = container.clientWidth;
    const buttonLeft = activeButton.offsetLeft;
    const buttonWidth = activeButton.offsetWidth;

    // Calcula a posição para centralizar o botão
    const scrollLeft = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);

    container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    // Reverifica as setas após centralizar
    setTimeout(() => this.verificarSetas(), 300);
  }

  // Listener para scroll DENTRO da barra de categorias
  onCategoriaScroll(event: Event): void {
    this.verificarSetas();
  }

  // Helper para criar IDs válidos a partir dos nomes das categorias
  getCategoriaId(nome: string): string {
    return nome.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  // Listener para resize da janela (útil para as setas)
  @HostListener("window:resize")
  onResize(): void {
    this.verificarSetas();
  }
}
