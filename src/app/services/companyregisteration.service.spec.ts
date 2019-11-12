import { TestBed } from '@angular/core/testing';

import { CompanyregisterationService } from './companyregisteration.service';

describe('CompanyregisterationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyregisterationService = TestBed.get(CompanyregisterationService);
    expect(service).toBeTruthy();
  });
});
