import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresadoescuelaComponent } from './egresadoescuela.component';

describe('EgresadoescuelaComponent', () => {
  let component: EgresadoescuelaComponent;
  let fixture: ComponentFixture<EgresadoescuelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgresadoescuelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgresadoescuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
