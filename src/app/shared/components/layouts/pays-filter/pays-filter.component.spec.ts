import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysFilterComponent } from './pays-filter.component';

describe('PaysFilterComponent', () => {
  let component: PaysFilterComponent;
  let fixture: ComponentFixture<PaysFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
