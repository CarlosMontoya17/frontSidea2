import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCorteComponent } from './card-corte.component';

describe('CardCorteComponent', () => {
  let component: CardCorteComponent;
  let fixture: ComponentFixture<CardCorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCorteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
