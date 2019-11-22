import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresadoperfilComponent } from './egresadoperfil.component';

describe('EgresadoperfilComponent', () => {
  let component: EgresadoperfilComponent;
  let fixture: ComponentFixture<EgresadoperfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgresadoperfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgresadoperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
