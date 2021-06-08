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
    console.log(this.userId);
    const headers = new HttpHeaders()
      .set(
        'Content-Type',
        'application/json'
      );
    const bodyIngredients = JSON.stringify(recipe.ingredient);
    console.log(bodyIngredients);


    const body = {
      "id": recipe.id,
      "author": recipe.author,
      "title": recipe.title,
      "duration": recipe.duration,
      "difficultyLevel": recipe.difficulty,
      "category": recipe.category,
      "subcategory": recipe.subcategory,
      "link": recipe.link,
      "calories": recipe.nutritional,
      "other_information":recipe.other,
      "ingredients": bodyIngredients,
  //     [{
  //     "id": "",
  //     "ingredientName":
  // },
  //     {
  //       "id": "",
  //       "ingredientName":
  //     }],
  //     "material": [{
  //     "id": "",
  //     "materialName":
  //   },
  //     {
  //       "id": "",
  //       "materialName":
  //     }],
  //     "steps": [{
  //     "id": "",
  //     "stepName":
  //   },
  //     {
  //       "id": "",
  //       "stepName":
  //     }],

    };
    console.log(body);
    return this.http.post<number>("http://localhost:8080/recipes/add?userId=" + this.userId.valueOf(), body, {'headers': headers});
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
