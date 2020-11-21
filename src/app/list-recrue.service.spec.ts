import { TestBed } from '@angular/core/testing';

import { ListRecrueService } from './list-recrue.service';

describe('ListRecrueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListRecrueService = TestBed.get(ListRecrueService);
    expect(service).toBeTruthy();
  });
});
