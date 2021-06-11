import {Injectable} from '@angular/core';
import {Recipe} from '../../classes/recipe';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Category} from '../../classes/category';

@Injectable({
  providedIn: 'root'
})

export class RecipeOverviewService {

  public userId: string;
  public recipeId: string;
  public recipe: Array<Recipe>;

  constructor(private http: HttpClient) {
  }

  getRecipeListbySearch(userId: string, search: string): any {
    return this.http.get<Array<Recipe>>('http://localhost:8080/recipeslist?userId=' + userId).subscribe(data => {
      this.recipe = data;
      // this.recipe = data.slice()
    });
  }

  getRecipeListFavorites(userId: string): any {
    return this.http.get<Array<Recipe>>('http://localhost:8080/recipelist/favorite?userId=' + userId).subscribe(data => {
    });
  }

  getRecipeListbyCategory(userId: string, category: string): any {
    const varCategory = {
      params: new HttpParams().set('category', category)
    };
    return this.http.get<Array<Recipe>>('http://localhost:8080/recipeslist/byCategory/$(category)?userId=' + userId, varCategory)
      .subscribe(data => {
      this.recipe = data;
    });
  }

  getRecipeListbySubcategory(userId: string, subcategory: string): any {
    const varSubcategory = {
      params: new HttpParams().set('subcategory', subcategory)
    };
    return this.http.get<Array<Recipe>>('http://localhost:8080/recipeslist/bySubcategory/$(subcategory)?userId=' + userId, varSubcategory)
      .subscribe(data => {
      this.recipe = data;
    });
  }

  addBookmark(recipeId: number, userId: string): any {
    const headers = new HttpHeaders()
      .set(
        'Content-Type',
        'application/json'
      );
    return this.http.post('http://localhost:8080/recipe/bookmark?recipeId=' + recipeId + '&userId=' + userId, null, {headers});
  }

  deleteBookmark(recipeId: number, userId: string): any {
    const headers = new HttpHeaders()
      .set(
        'Content-Type',
        'application/json'
      );
    return this.http.post('http://localhost:8080/recipe/deleteBookmark?recipeId=' + recipeId + '&userId=' + userId, null, {headers});
  }
}
