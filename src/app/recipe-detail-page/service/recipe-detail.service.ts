import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormControl} from '@angular/forms';
import {Recipe} from '../../classes/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeDetailService {

  public userId: string;
  public recipeId: string;
  public recipe: Recipe;

  constructor(private http: HttpClient) {
  }

  addRecipe(recipe: Recipe, userId: string) {
    const headers = new HttpHeaders()
      .set(
        'Content-Type',
        'application/json'
      );
    recipe.setId(JSON.parse(sessionStorage.getItem('RecipeID')));
    const body = JSON.stringify(recipe);
    return this.http.post<number>('http://localhost:8080/recipes/add?userId=' + userId, body, {headers});
  }

  // tslint:disable-next-line:ban-types
  deleteRecipe(recipeId: Number, userId: string) {
    const headers = new HttpHeaders()
      .set(
        'Content-Type',
        'application/json'
      );
    return this.http.post<number>('http://localhost:8080/recipes/delete?recipeId=' + recipeId + '&userId=' + userId, null, {headers});
  }

  addBookmark(recipeId: Number, userId: string) {
    const headers = new HttpHeaders()
      .set(
        'Content-Type',
        'application/json'
      );
    return this.http.post<number>('http://localhost:8080/recipe/bookmark?recipeId=' + recipeId + '&userId=' + userId, null, {headers});
  }

  deleteBookmark(recipeId: Number, userId: string) {
    const headers = new HttpHeaders()
      .set(
        'Content-Type',
        'application/json'
      );
    return this.http.delete<number>('http://localhost:8080/recipe/deleteBookmark?recipeId=' + recipeId + '&userId=' + userId);
  }
}
