import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RecipeOverviewService } from './recipe-overview.service';

describe('RecipeOverviewService', () => {
  let service: RecipeOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule],
      providers: [RecipeOverviewService]});
    service = TestBed.inject(RecipeOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
