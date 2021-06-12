import {Component, OnInit} from '@angular/core';
import {Recipe} from '../classes/recipe';
import {Router} from '@angular/router';
import {RecipeOverviewService} from './service/recipe-overview.service';
import {map} from 'rxjs/operators';


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
  recipeList: Array<Recipe>;
  recipe: Recipe;

  constructor(private router: Router, private recipeOverviewService: RecipeOverviewService) {
  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('UserID');
    this.search = localStorage.getItem('Search');
    localStorage.removeItem('Search');
    this.recipes = [];
    this.handleSearchRecipe();
    // const recipe = new Recipe();
    // recipe.setId(0);
    // recipe.setCategoryFE('Dessert/Pastries');
    // recipe.setTitle('Cookies');
    // recipe.setAuthor('MyCookieBook-Team');
    // recipe.setBookmark(true);
    // recipe.setDuration(120);
    // recipe.setDifficulty(3);
    // this.recipes = [];
    // this.recipes.push(recipe);
    // this.recipes.push(recipe);
  }

  init(): void {
    // this.recipes = this.recipeList;
    console.log('init: ' + this.recipes);
    // console.log(JSON.stringify(this.recipes[0]));
    if (this.recipes.length > 0) {
      this.empty = false;
    } else {
      this.empty = true;
    }
  }

  clickRecipe(index: number) {
    console.log(index);
    sessionStorage.setItem('RecipeID', JSON.stringify(this.recipes[index].getId()));
    sessionStorage.setItem('Recipe', JSON.stringify(this.recipes[index]));
    this.router.navigate(['/recipe/']);
  }

  getDifficulty(numb: number) {
    return new Array(numb);
  }

  handleSearchRecipe() {
    console.log(this.search);
    if (localStorage.getItem('Searchfield') === 'category') {
      this.recipeOverviewService.getRecipeListbyCategory(this.userId, this.search).subscribe((res) => {
        this.recipes = res;
        console.log(this.recipes);
        this.init();
      });
    } else if (localStorage.getItem('Searchfield') === 'subcategory') {
      this.recipeOverviewService.getRecipeListbySubcategory(this.userId, this.search).subscribe((res) => {
        console.log(res);
        for ( let i = 0; i < res.length ; i++) {
          this.recipe = new Recipe();
          this.recipe.setRecipe(res[i]);
          console.log(this.recipe);
          this.recipes.push(this.recipe);
        }
        this.init();
      });
    } else if (localStorage.getItem('Searchfield') === 'freeSearch') {
      this.recipeOverviewService.getRecipeListbySearch(this.userId, this.search).subscribe((res) => {
        this.recipes = res;
        console.log(this.recipes);
        this.init();
      });
    }
  }

  handleBookmark(recipeID: number) {
    // recipeId: string, bookmark: boolean, index: number
    this.recipeOverviewService.addBookmark(recipeID, this.userId).subscribe((res) => {
    });
    // if(true) {
    //       this.recipes[index].setBookmark(bookmark);
    //     }
  }
}
