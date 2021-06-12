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
  userId: string;
  recipeList: Array<Recipe>;
  recipe: Recipe;

  constructor(private router: Router, private recipeOverviewService: RecipeOverviewService) {
  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('UserID');
    this.search = localStorage.getItem('Search');
    localStorage.removeItem('Search');
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
    console.log('init: ' + this.recipes);
    // console.log(JSON.stringify(this.recipes[0]));
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
    console.log(index);
    sessionStorage.setItem('RecipeID', JSON.stringify(this.recipes[index].getId()));
    console.log(this.recipes[index]);
    sessionStorage.setItem('Recipe', this.recipes[index].getRecipe());
    this.router.navigate(['/recipe/']);
  }

  getDifficulty(numb: number) {
    return new Array(numb);
  }

  handleSearchRecipe() {
    console.log(this.search);
    if (localStorage.getItem('Searchfield') === 'category') {
      this.recipeOverviewService.getRecipeListbyCategory(this.userId, this.search).subscribe((res) => {
        for (let i = 0; i < res.length; i++) {
          this.recipe = new Recipe();
          this.recipe.setRecipe(res[i]);
          console.log(this.recipe);
          this.recipes.push(this.recipe);
        }
        this.init();
      });
    } else if (localStorage.getItem('Searchfield') === 'subcategory') {
      this.recipeOverviewService.getRecipeListbySubcategory(this.userId, this.search).subscribe((res) => {
        console.log(res);
        for (let i = 0; i < res.length; i++) {
          this.recipe = new Recipe();
          this.recipe.setRecipe(res[i]);
          console.log(this.recipe);
          this.recipes.push(this.recipe);
        }
        this.init();
      });
    } else if (localStorage.getItem('Searchfield') === 'freeSearch') {
      this.recipeOverviewService.getRecipeListbySearch(this.userId, this.search).subscribe((res) => {
        for (let i = 0; i < res.length; i++) {
          this.recipe = new Recipe();
          this.recipe.setRecipe(res[i]);
          console.log(this.recipe);
          this.recipes.push(this.recipe);
        }
        this.init();
      });
    }
  }

  // handleBookmark(bookmarked: boolean, index: number) {
  //   this.recipes[index].setBookmark(bookmarked);
  //   const recipeID = this.recipes[index].getId();
  //   if (bookmarked === true) {
  //     this.recipeOverviewService.addBookmark(recipeID, this.userId).subscribe((res) => {
  //   });
  //   } else {
  //     this.recipeOverviewService.deleteBookmark(recipeID, this.userId).subscribe((res) => {
  //     });
  //   }
  // }
}
