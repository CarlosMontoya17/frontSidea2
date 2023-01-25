import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersCibersComponent } from './filters-cibers.component';

describe('FiltersCibersComponent', () => {
  let component: FiltersCibersComponent;
  let fixture: ComponentFixture<FiltersCibersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltersCibersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersCibersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
