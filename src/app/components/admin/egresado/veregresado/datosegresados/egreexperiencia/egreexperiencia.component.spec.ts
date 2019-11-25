import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgreexperienciaComponent } from './egreexperiencia.component';

describe('EgreexperienciaComponent', () => {
  let component: EgreexperienciaComponent;
  let fixture: ComponentFixture<EgreexperienciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgreexperienciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgreexperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
