import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitacionesfromComponent } from './capacitacionesfrom.component';

describe('CapacitacionesfromComponent', () => {
  let component: CapacitacionesfromComponent;
  let fixture: ComponentFixture<CapacitacionesfromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacitacionesfromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacitacionesfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
