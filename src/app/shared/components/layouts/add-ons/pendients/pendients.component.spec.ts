import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendientsComponent } from './pendients.component';

describe('PendientsComponent', () => {
  let component: PendientsComponent;
  let fixture: ComponentFixture<PendientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
