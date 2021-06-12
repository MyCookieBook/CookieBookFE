import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeBakeComponent } from './recipe-bake.component';

describe('RecipeBakeComponent', () => {
  let component: RecipeBakeComponent;
  let fixture: ComponentFixture<RecipeBakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeBakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeBakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
