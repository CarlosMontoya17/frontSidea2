import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorSimpleComponent } from './error-simple.component';

describe('ErrorSimpleComponent', () => {
  let component: ErrorSimpleComponent;
  let fixture: ComponentFixture<ErrorSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
