import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasformComponent } from './empresasform.component';

describe('EmpresasformComponent', () => {
  let component: EmpresasformComponent;
  let fixture: ComponentFixture<EmpresasformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresasformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
