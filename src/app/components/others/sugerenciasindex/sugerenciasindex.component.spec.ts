import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugerenciasindexComponent } from './sugerenciasindex.component';

describe('SugerenciasindexComponent', () => {
  let component: SugerenciasindexComponent;
  let fixture: ComponentFixture<SugerenciasindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugerenciasindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugerenciasindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
