import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgrecapacitacionesComponent } from './egrecapacitaciones.component';

describe('EgrecapacitacionesComponent', () => {
  let component: EgrecapacitacionesComponent;
  let fixture: ComponentFixture<EgrecapacitacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgrecapacitacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgrecapacitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
