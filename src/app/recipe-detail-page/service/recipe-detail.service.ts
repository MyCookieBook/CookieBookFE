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

  // tslint:disable-next-line:ban-types
  addRecipe(recipe: Recipe, userId: string, recipeId: Number) {
    console.log(userId);
    const headers = new HttpHeaders()
      .set(
        'Content-Type',
        'application/json'
      );
    recipe.setId(recipeId);
    console.log(recipe.getId());
    const body = JSON.stringify(recipe);
    console.log(body);
    return this.http.post<number>('http://localhost:8080/recipes/add?userId=' + userId, body, {headers});
  }

  // tslint:disable-next-line:ban-types
  deleteRecipe(recipeId: Number, userId: string) {
    const headers = new HttpHeaders()
      .set(
        'Content-Type',
        'application/json'
      );
    console.log('recipeID: ' + recipeId);
    return this.http.post<number>('http://localhost:8080/recipes/delete?recipeId=' + recipeId + '&userId=' + userId, null, {headers});
  }
}
