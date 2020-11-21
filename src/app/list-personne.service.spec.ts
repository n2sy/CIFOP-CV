import { TestBed } from '@angular/core/testing';

import { ListPersonneService } from './list-personne.service';

describe('ListPersonneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListPersonneService = TestBed.get(ListPersonneService);
    expect(service).toBeTruthy();
  });
});
