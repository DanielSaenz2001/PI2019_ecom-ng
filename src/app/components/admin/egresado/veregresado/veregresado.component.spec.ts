import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeregresadoComponent } from './veregresado.component';

describe('VeregresadoComponent', () => {
  let component: VeregresadoComponent;
  let fixture: ComponentFixture<VeregresadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeregresadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeregresadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
