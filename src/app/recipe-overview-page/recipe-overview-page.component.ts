import {Component, OnInit} from '@angular/core';
import {Recipe} from '../classes/recipe';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipe-overview-page',
  templateUrl: './recipe-overview-page.component.html',
  styleUrls: ['./recipe-overview-page.component.scss']
})
export class RecipeOverviewPageComponent implements OnInit {

  recipes: Array<Recipe>;
  empty: boolean;
  search: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // this.handleSearchRecipe();
    this.search = 'dessert';
    var recipe = new Recipe();
    recipe.setId(0);
    recipe.setCategoryFE('Dessert/Pastries');
    recipe.setTitle('Cookies');
    recipe.setAuthor('MyCookieBook-Team');
    recipe.setBookmark(true);
    recipe.setDuration(120);
    recipe.setDifficulty(3);
    this.recipes = [];
    this.recipes.push(recipe);
    this.recipes.push(recipe);

    if (this.recipes.length > 0) {
      this.empty = false;
    } else {
      this.empty = true;
    }
  }

  clickRecipe(index: number) {
    console.log(index);
    // localStorage.setItem('recipe', this.recipes[index]);
    // this.router.navigate(['/recipe/']);
  }

  getDifficulty(numb: number) {
    return new Array(numb);
  }

  handleSearchRecipe() {
    // this.search = localStorage.getItem(search);
    // localStorage.removeItem(search);
    // Sinja it's your turn
    // this.recipes = ...
  }

}
