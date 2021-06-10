import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormControl} from "@angular/forms";
import {Recipe} from "../../classes/recipe";

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
    console.log(userId);
    const headers = new HttpHeaders()
      .set(
        'Content-Type',
        'application/json'
      );
    const body = JSON.stringify(recipe);
    console.log(body);
    return this.http.post<number>("http://localhost:8080/recipes/add?userId=" + userId, body, {'headers': headers});
  }

  // editRecipe(recipe: Recipe, userId: string) {
  //   const headers = new HttpHeaders()
  //     .set(
  //       'Content-Type',
  //       'application/json'
  //     );
  //   const body = JSON.stringify(recipe);
  //   return this.http.post<Recipe>("http://localhost:8080/recipes/edit?userId=" + userId, body, {'headers': headers});
  // }

  deleteRecipe(recipeId: string, userId: string) {
    const headers = new HttpHeaders()
      .set(
        'Content-Type',
        'application/json'
      );
    return this.http.post("http://localhost:8080/recipes/delete?recipeId=" + recipeId + "&userId=" + userId, null, {'headers': headers});
  }
}
