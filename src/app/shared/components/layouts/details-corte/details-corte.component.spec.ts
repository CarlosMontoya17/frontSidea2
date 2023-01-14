import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCorteComponent } from './details-corte.component';

describe('DetailsCorteComponent', () => {
  let component: DetailsCorteComponent;
  let fixture: ComponentFixture<DetailsCorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCorteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
