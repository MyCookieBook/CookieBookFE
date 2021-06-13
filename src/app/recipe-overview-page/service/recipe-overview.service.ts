import {Injectable} from '@angular/core';
import {Recipe} from '../../classes/recipe';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class RecipeOverviewService {

  public userId: string;
  public recipeId: string;
  public recipe: Array<Recipe>;
  public testrecipe: Recipe;

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.domain;
  }

  getRecipeListbySearch(userId: string, search: string) {
    return this.http.get<Array<string>>(this.url + '/recipeslist/search?term=' + search + '&userId=' + userId);
  }

  getRecipeListbyCategory(userId: string, category: string) {
    return this.http.get<Array<string>>(this.url + '/recipeslist/byCategory/' + category + '?userId=' + userId);
  }

  getRecipeListbySubcategory(userId: string, subcategory: string){
    return this.http.get<Array<string>>(this.url + '/recipeslist/bySubcategory/' + subcategory + '?userId=' + userId);
  }
}
