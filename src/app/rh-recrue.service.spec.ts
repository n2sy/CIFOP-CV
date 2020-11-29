import { TestBed } from '@angular/core/testing';

import { RhRecrueService } from './rh-recrue.service';

describe('RhRecrueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RhRecrueService = TestBed.get(RhRecrueService);
    expect(service).toBeTruthy();
  });
});
