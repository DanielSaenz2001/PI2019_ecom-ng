import { TestBed } from '@angular/core/testing';

import { ExperienciasService } from './experiencias.service';

describe('ExperienciasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExperienciasService = TestBed.get(ExperienciasService);
    expect(service).toBeTruthy();
  });
});
