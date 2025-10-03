import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

export interface MembroEquipe {
  id: string;
  nome: string;
  codigo: string;
  senha: string;
  imagem?: string | null;
  dataCriacao: string;
  ativo: boolean;
}

export interface DadosMembro {
  nome: string;
  senha: string;
}

export interface ResultadoAdicao {
  codigo: string;
  senha: string;
}

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  // Mock data para demonstração
  private membrosMock: MembroEquipe[] = [
    {
      id: '1',
      nome: 'Sérgio Soares da Silva Júnior',
      codigo: '12345678',
      senha: 'senha123',
      imagem: null,
      dataCriacao: '2024-01-15T10:30:00Z',
      ativo: true
    },
    {
      id: '2',
      nome: 'Julio Yushi',
      codigo: '87654321',
      senha: 'senha456',
      imagem: null,
      dataCriacao: '2024-01-20T14:15:00Z',
      ativo: true
    },
    {
      id: '3',
      nome: 'Maria Santos',
      codigo: '11223344',
      senha: 'senha789',
      imagem: null,
      dataCriacao: '2024-01-25T09:45:00Z',
      ativo: true
    }
  ];

  constructor() { }

  /**
   * Busca todos os membros da equipa
   */
  getEquipe(): Observable<MembroEquipe[]> {
    // Simula delay de rede
    return of([...this.membrosMock]).pipe(delay(800));
  }

  /**
   * Adiciona um novo membro à equipa
   */
  addMembro(dados: DadosMembro): Observable<ResultadoAdicao> {
    const novoId = (this.membrosMock.length + 1).toString();
    const codigo = this.gerarCodigo();
    const senha = dados.senha;

    const novoMembro: MembroEquipe = {
      id: novoId,
      nome: dados.nome,
      codigo: codigo,
      senha: senha,
      imagem: null,
      dataCriacao: new Date().toISOString(),
      ativo: true
    };

    this.membrosMock.push(novoMembro);

    // Simula delay de rede
    return of({
      codigo: codigo,
      senha: senha
    }).pipe(delay(1000));
  }

  /**
   * Atualiza um membro existente
   */
  updateMembro(id: string, dados: DadosMembro): Observable<void> {
    const index = this.membrosMock.findIndex(m => m.id === id);
    if (index !== -1) {
      this.membrosMock[index] = {
        ...this.membrosMock[index],
        nome: dados.nome,
        senha: dados.senha
      };
    }

    // Simula delay de rede
    return of(undefined).pipe(delay(800));
  }

  /**
   * Remove um membro da equipa
   */
  deleteMembro(id: string): Observable<void> {
    const index = this.membrosMock.findIndex(m => m.id === id);
    if (index !== -1) {
      this.membrosMock.splice(index, 1);
    }

    // Simula delay de rede
    return of(undefined).pipe(delay(500));
  }

  /**
   * Gera um código de 8 dígitos único
   */
  private gerarCodigo(): string {
    let codigo: string;
    do {
      codigo = Math.floor(10000000 + Math.random() * 90000000).toString();
    } while (this.membrosMock.some(m => m.codigo === codigo));
    
    return codigo;
  }

  /**
   * Gera um novo código para um membro existente
   */
  regenerarCodigo(id: string): Observable<{ codigo: string }> {
    const index = this.membrosMock.findIndex(m => m.id === id);
    if (index !== -1) {
      const novoCodigo = this.gerarCodigo();
      this.membrosMock[index].codigo = novoCodigo;
      
      return of({ codigo: novoCodigo }).pipe(delay(500));
    }
    
    throw new Error('Membro não encontrado');
  }
}
