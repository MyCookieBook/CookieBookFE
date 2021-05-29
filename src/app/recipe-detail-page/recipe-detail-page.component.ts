import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatFormField, MatLabel } from '@angular/material/form-field';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-recipe-detail-page',
  templateUrl: './recipe-detail-page.component.html',
  styleUrls: ['./recipe-detail-page.component.scss']
})
export class RecipeDetailPageComponent implements OnInit {

  edit = false;
  color = "basic";
  recipe_id: number;

  recipe_title = "";
  recipe_author = "";
  recipe_duration = 0;
  recipe_values = "";
  recipe_difficulty = 0;

  recipe_title_new = this.recipe_title;
  recipe_author_new = this.recipe_author;

  title = new FormControl(this.recipe_title, [Validators.required]);
  author = new FormControl(this.recipe_author, [Validators.required]);

  picture_src: String;
  link_scr: String;

  cookie = "https://raw.githubusercontent.com/MyCookieBook/CookieBookFE/master/src/pictures/Logo.jpg";

  constructor() {
    this.recipe_id = 0;
    if(this.recipe_id === 0) {
      this.createEmptyRecipe();
    }
  }

  ngOnInit(): void {
    this.recipe_id = 0;
    if(this.recipe_id === 0) {
      this.createEmptyRecipe();
    }
  }

  createEmptyRecipe() {
    this.recipe_title = "Recipe Title";
    this.recipe_author = "Recipe Author";
    this.recipe_duration = 0;
    this.recipe_values = "nutrional values";
    this.recipe_difficulty = 0;
    this.picture_src = "https://raw.githubusercontent.com/MyCookieBook/CookieBookFE/master/src/pictures/DefaultRecipePicture.jpg";
  }

  inputTitle(event) {
    const title = event.target.value;
    this.recipe_title_new = title;
  }

  getErrorMessageTitle() {
    if(this.title.hasError('required')) {
      return 'Please enter a title for your recipe!';
    } else {
      return '';
    }
  }

  inputAuthor(event) {
    const author = event.target.value;
    this.recipe_author_new = author;
  }

  getErrorMessageAuthor() {
    if(this.author.hasError('required')) {
      return 'Please enter a author for your recipe!';
    } else {
      return '';
    }
  }

  getNumber(numb: Number) {
    return new Array(numb);
  }

  clickSave() {
  }

  clickCancel() {
  }

}
