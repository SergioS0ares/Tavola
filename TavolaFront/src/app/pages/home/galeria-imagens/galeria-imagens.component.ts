import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface GaleriaData {
  imagens: string[];
  indiceInicial: number;
}

@Component({
  selector: 'app-galeria-imagens',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule
  ],
  template: `
    <div class="galeria-container">
      <div class="galeria-header">
        <span class="contador-imagens">{{ indiceAtual + 1 }} / {{ data.imagens.length }}</span>
        <button mat-icon-button (click)="fechar()">
          <mat-icon>close</mat-icon>
        </button>
      </div>
      
      <div class="galeria-content">
        <button mat-icon-button class="nav-button prev" (click)="anterior()" [disabled]="indiceAtual === 0">
          <mat-icon>chevron_left</mat-icon>
        </button>
        
        <div class="imagem-container">
          <img [src]="imagemAtual" alt="Imagem do restaurante" class="imagem-principal">
        </div>
        
        <button mat-icon-button class="nav-button next" (click)="proximo()" [disabled]="indiceAtual === data.imagens.length - 1">
          <mat-icon>chevron_right</mat-icon>
        </button>
      </div>
      
      <div class="galeria-thumbnails">
        <div 
          *ngFor="let imagem of data.imagens; let i = index" 
          class="thumbnail" 
          [class.active]="i === indiceAtual"
          (click)="selecionarImagem(i)">
          <img [src]="imagem" [alt]="'Miniatura ' + (i + 1)">
        </div>
      </div>
    </div>
  `,
  styles: [`
    .galeria-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.95);
      color: white;
    }
    
    .galeria-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
    }
    
    .contador-imagens {
      font-size: 16px;
    }
    
    .galeria-content {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    
    .imagem-container {
      height: 70vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .imagem-principal {
      max-height: 100%;
      max-width: 90%;
      object-fit: contain;
    }
    
    .nav-button {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      width: 48px;
      height: 48px;
      
      &.prev {
        left: 16px;
      }
      
      &.next {
        right: 16px;
      }
      
      &:disabled {
        opacity: 0.5;
      }
    }
    
    .galeria-thumbnails {
      display: flex;
      overflow-x: auto;
      padding: 16px;
      gap: 8px;
      
      .thumbnail {
        width: 80px;
        height: 60px;
        border: 2px solid transparent;
        cursor: pointer;
        opacity: 0.7;
        transition: all 0.2s ease;
        
        &.active {
          border-color: #F6BD38;
          opacity: 1;
        }
        
        &:hover {
          opacity: 1;
        }
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  `]
})
export class GaleriaImagensComponent implements OnInit {
  indiceAtual: number = 0;
  
  constructor(
    public dialogRef: MatDialogRef<GaleriaImagensComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GaleriaData
  ) {}
  
  ngOnInit(): void {
    this.indiceAtual = this.data.indiceInicial;
  }
  
  get imagemAtual(): string {
    return this.data.imagens[this.indiceAtual];
  }
  
  anterior(): void {
    if (this.indiceAtual > 0) {
      this.indiceAtual--;
    }
  }
  
  proximo(): void {
    if (this.indiceAtual < this.data.imagens.length - 1) {
      this.indiceAtual++;
    }
  }
  
  selecionarImagem(indice: number): void {
    this.indiceAtual = indice;
  }
  
  fechar(): void {
    this.dialogRef.close();
  }
}