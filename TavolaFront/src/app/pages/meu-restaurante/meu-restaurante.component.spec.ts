import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuRestauranteComponent } from './meu-restaurante.component';

describe('MeuRestauranteComponent', () => {
  let component: MeuRestauranteComponent;
  let fixture: ComponentFixture<MeuRestauranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuRestauranteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeuRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
