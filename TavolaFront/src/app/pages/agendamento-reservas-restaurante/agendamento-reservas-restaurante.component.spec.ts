import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoReservasRestauranteComponent } from './agendamento-reservas-restaurante.component';

describe('AgendamentoReservasRestauranteComponent', () => {
  let component: AgendamentoReservasRestauranteComponent;
  let fixture: ComponentFixture<AgendamentoReservasRestauranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendamentoReservasRestauranteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendamentoReservasRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
