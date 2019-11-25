import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgrepersonaComponent } from './egrepersona.component';

describe('EgrepersonaComponent', () => {
  let component: EgrepersonaComponent;
  let fixture: ComponentFixture<EgrepersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgrepersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgrepersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
