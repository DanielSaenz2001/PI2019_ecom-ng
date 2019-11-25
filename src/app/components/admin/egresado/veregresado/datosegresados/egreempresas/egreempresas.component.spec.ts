import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgreempresasComponent } from './egreempresas.component';

describe('EgreempresasComponent', () => {
  let component: EgreempresasComponent;
  let fixture: ComponentFixture<EgreempresasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgreempresasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgreempresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
