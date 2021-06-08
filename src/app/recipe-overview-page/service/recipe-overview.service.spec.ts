import { TestBed } from '@angular/core/testing';

import { RecipeOverviewService } from './recipe-overview.service';

describe('RecipeOverviewService', () => {
  let service: RecipeOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
