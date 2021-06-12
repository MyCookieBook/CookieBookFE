import {Injectable} from '@angular/core';
import {Recipe} from '../../classes/recipe';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class RecipeOverviewService {

  public userId: string;
  public recipeId: string;
  public recipe: Array<Recipe>;
  public testrecipe: Recipe;

  constructor(private http: HttpClient) {
  }

  getRecipeListbySearch(userId: string, search: string) {
    return this.http.get<Array<string>>('http://localhost:8080/recipeslist/search?term=' + search + '&userId=' + userId);
  }

  getRecipeListbyCategory(userId: string, category: string) {
    return this.http.get<Array<string>>('http://localhost:8080/recipeslist/byCategory/' + category + '?userId=' + userId);
  }

  getRecipeListbySubcategory(userId: string, subcategory: string){
    return this.http.get<Array<string>>('http://localhost:8080/recipeslist/bySubcategory/' + subcategory + '?userId=' + userId);
  }
  //
  // addBookmark(recipeId: Number, userId: string) {
  //   const headers = new HttpHeaders()
  //     .set(
  //       'Content-Type',
  //       'application/json'
  //     );
  //   return this.http.post<number>('http://localhost:8080/recipe/bookmark?recipeId=' + recipeId + '&userId=' + userId, null, {headers});
  // }
  //
  // deleteBookmark(recipeId: Number, userId: string) {
  //   const headers = new HttpHeaders()
  //     .set(
  //       'Content-Type',
  //       'application/json'
  //     );
  //   return this.http.post<number>('http://localhost:8080/recipe/deleteBookmark?recipeId=' + recipeId + '&userId=' + userId, null, {headers});
  // }
}
