import { TestBed } from '@angular/core/testing';

import { TeamregistrationService } from './teamregistration.service';

describe('TeamregistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamregistrationService = TestBed.get(TeamregistrationService);
    expect(service).toBeTruthy();
  });
});
