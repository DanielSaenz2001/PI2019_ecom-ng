import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgreegresadosComponent } from './egreegresados.component';

describe('EgreegresadosComponent', () => {
  let component: EgreegresadosComponent;
  let fixture: ComponentFixture<EgreegresadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgreegresadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgreegresadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
