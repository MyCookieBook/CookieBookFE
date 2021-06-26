// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { RecipeOverviewPageComponent } from './recipe-overview-page.component';
import { Router } from '@angular/router';
import { RecipeOverviewService } from './service/recipe-overview.service';

@Injectable()
class MockRouter {
  navigate() {};
}

@Injectable()
class MockRecipeOverviewService {}

@Directive({ selector: '[oneviewPermitted]' })
class OneviewPermittedDirective {
  @Input() oneviewPermitted;
}

@Pipe({name: 'translate'})
class TranslatePipe implements PipeTransform {
  transform(value) { return value; }
}

@Pipe({name: 'phoneNumber'})
class PhoneNumberPipe implements PipeTransform {
  transform(value) { return value; }
}

@Pipe({name: 'safeHtml'})
class SafeHtmlPipe implements PipeTransform {
  transform(value) { return value; }
}

describe('RecipeOverviewPageComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        RecipeOverviewPageComponent,
        TranslatePipe, PhoneNumberPipe, SafeHtmlPipe,
        OneviewPermittedDirective
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        { provide: Router, useClass: MockRouter },
        { provide: RecipeOverviewService, useClass: MockRecipeOverviewService }
      ]
    }).overrideComponent(RecipeOverviewPageComponent, {

    }).compileComponents();
    fixture = TestBed.createComponent(RecipeOverviewPageComponent);
    component = fixture.debugElement.componentInstance;
  });

  afterEach(() => {
    component.ngOnDestroy = function() {};
    fixture.destroy();
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    component.router = component.router || {};
    component.router.navigate = jest.fn();
    component.handleSearchRecipe = jest.fn();
    component.ngOnInit();
    // expect(component.router.navigate).toHaveBeenCalled();
    // expect(component.handleSearchRecipe).toHaveBeenCalled();
  });

  it('should run #init()', async () => {
    component.recipes = component.recipes || {};
    component.init();

  });

  it('should run #clickNewRecipe()', async () => {
    component.router = component.router || {};
    component.router.navigate = jest.fn();
    component.clickNewRecipe();
    // expect(component.router.navigate).toHaveBeenCalled();
  });

  it('should run #clickRecipe()', async () => {
    component.recipes = component.recipes || {};
    component.recipes.index = {
      getId: function() {},
      getRecipe: function() {}
    };
    component.router = component.router || {};
    component.router.navigate = jest.fn();
    component.clickRecipe({});
    // expect(component.router.navigate).toHaveBeenCalled();
  });

  it('should run #getDifficulty()', async () => {

    component.getDifficulty({});

  });

  it('should run #handleSearchRecipe()', async () => {
    component.recipeOverviewService = component.recipeOverviewService || {};
    component.recipeOverviewService.getRecipeListbyCategory = jest.fn().mockReturnValue(observableOf({
      length: {}
    }));
    component.recipeOverviewService.getRecipeListbySubcategory = jest.fn().mockReturnValue(observableOf({
      length: {}
    }));
    component.recipeOverviewService.getRecipeListbySearch = jest.fn().mockReturnValue(observableOf({
      length: {}
    }));
    component.router = component.router || {};
    component.router.navigate = jest.fn();
    component.recipe = component.recipe || {};
    component.recipe.setRecipe = jest.fn();
    component.recipes = component.recipes || {};
    component.recipes.push = jest.fn();
    component.init = jest.fn();
    component.handleSearchRecipe();
    // expect(component.recipeOverviewService.getRecipeListbyCategory).toHaveBeenCalled();
    // expect(component.recipeOverviewService.getRecipeListbySubcategory).toHaveBeenCalled();
    // expect(component.recipeOverviewService.getRecipeListbySearch).toHaveBeenCalled();
    // expect(component.router.navigate).toHaveBeenCalled();
    // expect(component.recipe.setRecipe).toHaveBeenCalled();
    // expect(component.recipes.push).toHaveBeenCalled();
    // expect(component.init).toHaveBeenCalled();
  });

});
