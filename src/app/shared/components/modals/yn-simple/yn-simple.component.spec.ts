import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YnSimpleComponent } from './yn-simple.component';

describe('YnSimpleComponent', () => {
  let component: YnSimpleComponent;
  let fixture: ComponentFixture<YnSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YnSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YnSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
