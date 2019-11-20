import { TestBed } from '@angular/core/testing';

import { EgresadosService } from './egresados.service';

describe('EgresadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EgresadosService = TestBed.get(EgresadosService);
    expect(service).toBeTruthy();
  });
});
