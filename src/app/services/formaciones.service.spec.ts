import { TestBed } from '@angular/core/testing';

import { FormacionesService } from './formaciones.service';

describe('FormacionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormacionesService = TestBed.get(FormacionesService);
    expect(service).toBeTruthy();
  });
});
