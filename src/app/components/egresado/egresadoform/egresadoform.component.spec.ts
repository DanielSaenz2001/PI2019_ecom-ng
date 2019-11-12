import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresadoformComponent } from './egresadoform.component';

describe('EgresadoformComponent', () => {
  let component: EgresadoformComponent;
  let fixture: ComponentFixture<EgresadoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgresadoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgresadoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
