import { Component, OnInit } from '@angular/core';
import {Recipe} from '../classes/recipe';

@Component({
  selector: 'app-recipe-overview-page',
  templateUrl: './recipe-overview-page.component.html',
  styleUrls: ['./recipe-overview-page.component.scss']
})
export class RecipeOverviewPageComponent implements OnInit {

  // public recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  // sessionStorage.setItem('RecipeID',JSON.stringify(this.recipe.id));
  }

}
