import { TestBed } from '@angular/core/testing';

import { EgresadoescuelasService } from './egresadoescuelas.service';

describe('EgresadoescuelasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EgresadoescuelasService = TestBed.get(EgresadoescuelasService);
    expect(service).toBeTruthy();
  });
});
