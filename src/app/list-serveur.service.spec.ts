import { TestBed } from '@angular/core/testing';

import { ListServeurService } from './list-serveur.service';

describe('ListServeurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListServeurService = TestBed.get(ListServeurService);
    expect(service).toBeTruthy();
  });
});
