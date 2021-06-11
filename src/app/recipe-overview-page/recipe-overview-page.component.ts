import {Component, OnInit} from '@angular/core';
import {Recipe} from '../classes/recipe';
import {Router} from '@angular/router';
import {RecipeOverviewService} from './service/recipe-overview.service';


@Component({
  selector: 'app-recipe-overview-page',
  templateUrl: './recipe-overview-page.component.html',
  styleUrls: ['./recipe-overview-page.component.scss']
})
export class RecipeOverviewPageComponent implements OnInit {

  recipes: Array<Recipe>;
  empty: boolean;
  search: string;
  userId: string;

  constructor(private router: Router, private recipeOverviewService: RecipeOverviewService) {
  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('UserID');
    this.search = localStorage.getItem('Search');
    this.handleSearchRecipe();
    const recipe = new Recipe();
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

  clickRecipe(index: number): any {
    console.log(index);
    // localStorage.setItem('recipe', this.recipes[index]);
    // this.router.navigate(['/recipe/']);
  }

  getDifficulty(numb: number): any {
    return new Array(numb);
  }

  handleSearchRecipe(): any {
    this.search = localStorage.getItem('Search');
    console.log(this.search);
    if (localStorage.getItem('searchfield') === 'category'){
      this.recipeOverviewService.getRecipeListbyCategory(this.userId, this.search).subscribe((res) => {});
    } else if (localStorage.getItem('searchfield') === 'subcategory'){
      this.recipeOverviewService.getRecipeListbySubcategory(this.userId, this.search).subscribe((res) => {});
    } else if (localStorage.getItem('searchfield') === 'freeSearch'){
      this.recipeOverviewService.getRecipeListbySearch(this.userId, this.search).subscribe((res) => {});
    }
    localStorage.removeItem('Search');
    // Sinja it's your turn
    // this.recipes = ...
  }

  handleBookmark(recipeID: number): any {
    this.recipeOverviewService.addBookmark(recipeID, this.userId).subscribe((res) => {});
  }
}
