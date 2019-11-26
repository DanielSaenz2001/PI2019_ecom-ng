import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponderSugerenciasComponent } from './responder-sugerencias.component';

describe('ResponderSugerenciasComponent', () => {
  let component: ResponderSugerenciasComponent;
  let fixture: ComponentFixture<ResponderSugerenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponderSugerenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponderSugerenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
