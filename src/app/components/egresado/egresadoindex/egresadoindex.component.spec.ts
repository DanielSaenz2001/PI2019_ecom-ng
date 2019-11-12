import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresadoindexComponent } from './egresadoindex.component';

describe('EgresadoindexComponent', () => {
  let component: EgresadoindexComponent;
  let fixture: ComponentFixture<EgresadoindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgresadoindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgresadoindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
