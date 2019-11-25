import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgreformacionesComponent } from './egreformaciones.component';

describe('EgreformacionesComponent', () => {
  let component: EgreformacionesComponent;
  let fixture: ComponentFixture<EgreformacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgreformacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgreformacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
