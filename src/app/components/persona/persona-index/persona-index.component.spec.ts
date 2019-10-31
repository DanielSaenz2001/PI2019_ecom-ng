import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaIndexComponent } from './persona-index.component';

describe('PersonaIndexComponent', () => {
  let component: PersonaIndexComponent;
  let fixture: ComponentFixture<PersonaIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
