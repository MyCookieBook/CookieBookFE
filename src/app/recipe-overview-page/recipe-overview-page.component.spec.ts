import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeOverviewPageComponent } from './recipe-overview-page.component';

describe('RecipeOverviewPageComponent', () => {
  let component: RecipeOverviewPageComponent;
  let fixture: ComponentFixture<RecipeOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeOverviewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
