import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaDependienteComponent } from './persona-dependiente.component';

describe('PersonaDependienteComponent', () => {
  let component: PersonaDependienteComponent;
  let fixture: ComponentFixture<PersonaDependienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaDependienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaDependienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
