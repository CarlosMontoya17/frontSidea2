import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActaRequestComponent } from './acta-request.component';

describe('ActaRequestComponent', () => {
  let component: ActaRequestComponent;
  let fixture: ComponentFixture<ActaRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActaRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActaRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
