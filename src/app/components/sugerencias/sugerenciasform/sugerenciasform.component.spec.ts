import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugerenciasformComponent } from './sugerenciasform.component';

describe('SugerenciasformComponent', () => {
  let component: SugerenciasformComponent;
  let fixture: ComponentFixture<SugerenciasformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugerenciasformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugerenciasformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
