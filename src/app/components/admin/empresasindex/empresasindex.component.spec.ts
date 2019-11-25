import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasindexComponent } from './empresasindex.component';

describe('EmpresasindexComponent', () => {
  let component: EmpresasindexComponent;
  let fixture: ComponentFixture<EmpresasindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresasindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
