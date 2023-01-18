import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreusuarioComponent } from './agreusuario.component';

describe('AgreusuarioComponent', () => {
  let component: AgreusuarioComponent;
  let fixture: ComponentFixture<AgreusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreusuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
