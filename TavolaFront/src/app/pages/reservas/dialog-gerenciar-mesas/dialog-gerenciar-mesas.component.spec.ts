import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogGerenciarMesasComponent } from './dialog-gerenciar-mesas.component';

describe('DialogGerenciarMesasComponent', () => {
  let component: DialogGerenciarMesasComponent;
  let fixture: ComponentFixture<DialogGerenciarMesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogGerenciarMesasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogGerenciarMesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
