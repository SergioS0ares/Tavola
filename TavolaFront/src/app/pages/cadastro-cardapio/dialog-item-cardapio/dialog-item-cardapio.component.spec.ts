import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogItemCardapioComponent } from './dialog-item-cardapio.component';

describe('DialogItemCardapioComponent', () => {
  let component: DialogItemCardapioComponent;
  let fixture: ComponentFixture<DialogItemCardapioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogItemCardapioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogItemCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
