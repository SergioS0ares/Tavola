import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCardapioComponent } from './cadastro-cardapio.component';

describe('CadastroCardapioComponent', () => {
  let component: CadastroCardapioComponent;
  let fixture: ComponentFixture<CadastroCardapioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroCardapioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
