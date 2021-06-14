import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormControl} from '@angular/forms';
import {Recipe} from '../../classes/recipe';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeDetailService {

  public userId: string;
  public recipeId: string;
  public recipe: Recipe;

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.domain;
  }

  addRecipe(recipe: Recipe, userId: string) {
    console.log('Add recipe');
    const headers = new HttpHeaders()
      .set(
        'Content-Type',
        'application/json'
      );
    recipe.setId(JSON.parse(sessionStorage.getItem('RecipeID')));
    const body = JSON.stringify(recipe);
    return this.http.post<number>(this.url + '/recipes/add?userId=' + userId, body, {headers});
  }

  // tslint:disable-next-line:ban-types
  deleteRecipe(recipeId: Number, userId: string) {
    const headers = new HttpHeaders()
      .set(
        'Content-Type',
        'application/json'
      );
    return this.http.post<number>(this.url + '/recipes/delete?recipeId=' + recipeId + '&userId=' + userId, null, {headers});
  }

  addBookmark(recipeId: Number, userId: string) {
    const headers = new HttpHeaders()
      .set(
        'Content-Type',
        'application/json'
      );
    return this.http.post<number>(this.url + '/recipe/bookmark?recipeId=' + recipeId + '&userId=' + userId, null, {headers});
  }

  deleteBookmark(recipeId: Number, userId: string) {
    const headers = new HttpHeaders()
      .set(
        'Content-Type',
        'application/json'
      );
    return this.http.delete<number>(this.url + '/recipe/deleteBookmark?recipeId=' + recipeId + '&userId=' + userId);
  }
}
