import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitacionesindexComponent } from './capacitacionesindex.component';

describe('CapacitacionesindexComponent', () => {
  let component: CapacitacionesindexComponent;
  let fixture: ComponentFixture<CapacitacionesindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacitacionesindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacitacionesindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
