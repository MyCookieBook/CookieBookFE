import {Component, OnInit} from '@angular/core';
import {Recipe} from '../classes/recipe';
import {Router} from '@angular/router';
import {RecipeOverviewService} from './service/recipe-overview.service';
import {map} from 'rxjs/operators';
import {Category} from '../classes/category';


@Component({
  selector: 'app-recipe-overview-page',
  templateUrl: './recipe-overview-page.component.html',
  styleUrls: ['./recipe-overview-page.component.scss']
})
export class RecipeOverviewPageComponent implements OnInit {

  recipes: Array<Recipe>;
  empty: boolean;
  search: string;
  searchtext: string;
  userId: number;
  recipeList: Array<Recipe>;
  recipe: Recipe;
  response: string[];

  constructor(private router: Router, private recipeOverviewService: RecipeOverviewService) {
  }

  ngOnInit(): void {

    var userId = localStorage.getItem('UserID');
    if (userId === null) {
      this.router.navigate(['/login']);
    }

    this.userId = JSON.parse(localStorage.getItem('UserID'));
    this.search = localStorage.getItem('Search');
    if (localStorage.getItem('Searchfield') === 'freeSearch') {
      this.searchtext = this.search;
    } else if (localStorage.getItem('Searchfield') === 'category') {
      this.searchtext = new Category().getCategoryFE(this.search, null);
    } else if (localStorage.getItem('Searchfield') === 'subcategory') {
      this.searchtext = '';
      if (this.search.includes('MAIN')) {
        this.searchtext += 'MainDish';
      } else if (this.search.includes('APP')) {
        this.searchtext += 'Appetizer';
      }
      this.searchtext += new Category().getCategoryFE(null, this.search);
    }

    this.recipes = [];
    this.handleSearchRecipe();
  }

  init(): void {
    // this.recipes = this.recipeList;
    if (this.recipes.length > 0) {
      this.empty = false;
    } else {
      this.empty = true;
    }
  }

  clickNewRecipe() {
    sessionStorage.setItem('RecipeID', '0');
    this.router.navigate(['/recipe']);
  }

  clickRecipe(index: number) {
    sessionStorage.setItem('RecipeID', JSON.stringify(this.recipes[index].getId()));
    sessionStorage.setItem('Recipe', this.recipes[index].getRecipe());
    this.router.navigate(['/recipe/']);
  }

  getDifficulty(numb: number) {
    return new Array(numb);
  }

  handleSearchRecipe() {
    if (localStorage.getItem('Searchfield') === 'category') {
      this.recipeOverviewService.getRecipeListbyCategory(this.userId, this.search).subscribe((res) => {
        this.response = res;
        if (this.response === null) {
          this.router.navigate(['/login']);
        } else {
          for (let i = 0; i < res.length; i++) {
            this.recipe = new Recipe();
            this.recipe.setRecipe(res[i]);
            this.recipes.push(this.recipe);
          }
          this.init();
        }
      });
    } else if (localStorage.getItem('Searchfield') === 'subcategory') {
      this.recipeOverviewService.getRecipeListbySubcategory(this.userId, this.search).subscribe((res) => {
        this.response = res;
        if (this.response === null) {
          this.router.navigate(['/login']);
        } else {
          for (let i = 0; i < res.length; i++) {
            this.recipe = new Recipe();
            this.recipe.setRecipe(res[i]);
            this.recipes.push(this.recipe);
          }
          this.init();
        }
      });
    } else if (localStorage.getItem('Searchfield') === 'freeSearch') {
      this.recipeOverviewService.getRecipeListbySearch(this.userId, this.search).subscribe((res) => {
        this.response = res;
        if (this.response === null) {
          this.router.navigate(['/login']);
        } else {
          for (let i = 0; i < res.length; i++) {
            this.recipe = new Recipe();
            this.recipe.setRecipe(res[i]);
            this.recipes.push(this.recipe);
          }
          this.init();
        }
      });
    }
  }

}
