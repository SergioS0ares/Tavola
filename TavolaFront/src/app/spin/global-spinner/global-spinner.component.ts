import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSpinnerService } from '../../core/services/global-spinner.service';
import { Subscription, interval } from 'rxjs';
import { LucideAngularModule, Timer, Zap } from 'lucide-angular';

interface BolhaVapor {
  x: number;
  y: number;
  tamanho: number;
  opacidade: number;
}

@Component({
  selector: 'app-global-spinner',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './global-spinner.component.html',
  styleUrls: ['./global-spinner.component.scss'],
})
export class GlobalSpinnerComponent implements OnInit, OnDestroy {
  @Input() porcentagemCarregamento: number = 0; // De 0 a 100

  elementosAquecimentoAtivos: boolean[] = [false, false, false];
  rotacaoVentoinha: number = 0;
  bolhasVapor: BolhaVapor[] = [];
  luzPortaAtiva: boolean = true;
  visivel: boolean = false;
  statusTexto: string = 'Processando...'; // Texto de status abaixo do forno

  private assinaturas: Subscription = new Subscription();

  constructor(private spinnerService: GlobalSpinnerService) {}

  ngOnInit() {
    this.assinaturas.add(
      this.spinnerService.visibilidade$.subscribe((visivel) => {
        this.visivel = visivel;
      })
    );

    this.assinaturas.add(
      this.spinnerService.progresso$.subscribe((progresso) => {
        this.porcentagemCarregamento = progresso;
        // Opcional: Atualizar statusTexto com base no progresso
        if (progresso === 100) {
          this.statusTexto = 'Completo!';
        } else if (progresso > 0) {
          this.statusTexto = 'Processando...';
        } else {
          this.statusTexto = 'Iniciando...';
        }
      })
    );

    // Lógica de animação adaptada do código React (mantendo as animações visuais)
    // Removendo a animação de tempoDecorrido
    /* this.assinaturas.add(\n      interval(1000).subscribe(() => {\n        this.tempoDecorrido = (this.tempoDecorrido + 1) % 3600;\n      })\n    ); */

    this.assinaturas.add(
      interval(800).subscribe(() => {
        this.elementosAquecimentoAtivos = this.elementosAquecimentoAtivos.map((ativo, index) => {
          const randomIndex = Math.floor(Math.random() * 3);
          return index === randomIndex ? !ativo : ativo;
        });
      })
    );

    this.assinaturas.add(
      interval(50).subscribe(() => {
        this.rotacaoVentoinha = (this.rotacaoVentoinha + 15) % 360;
      })
    );

    this.assinaturas.add(
      interval(100).subscribe(() => {
        this.bolhasVapor = this.bolhasVapor
          .map((bolha) => ({
            ...bolha,
            y: bolha.y - 2,
            opacidade: bolha.opacidade - 0.02,
          }))
          .filter((bolha) => bolha.opacidade > 0);

        if (Math.random() > 0.7) {
          this.bolhasVapor.push({
            x: 20 + Math.random() * 60,
            y: 85,
            tamanho: 3 + Math.random() * 4,
            opacidade: 0.6,
          });
        }
      })
    );

    this.assinaturas.add(
      interval(2000).subscribe(() => {
        this.luzPortaAtiva = !this.luzPortaAtiva;
      })
    );
  }

  ngOnDestroy() {
    this.assinaturas.unsubscribe();
  }

  // Método para exibir a temperatura (porcentagem) como graus Celsius
  get temperaturaCelsius(): string {
    return `${Math.round(this.porcentagemCarregamento)}°C`;
  }

  // Método para calcular a cor da janela com base na temperatura
  get corJanela(): string {
    const percentage = this.porcentagemCarregamento / 100; // 0 a 1
    const startColor = { r: 253, g: 186, b: 116 }; // Laranja (cor inicial da janela sem luz)
    const endColor = { r: 239, g: 68, b: 68 }; // Vermelho (cor dos elementos de calor)

    const r = Math.round(startColor.r + (endColor.r - startColor.r) * percentage);
    const g = Math.round(startColor.g + (endColor.g - startColor.g) * percentage);
    const b = Math.round(startColor.b + (endColor.b - startColor.b) * percentage);

    return `rgb(${r}, ${g}, ${b})`;
  }
}
