import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatFormField, MatLabel } from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {Recipe} from '../classes/recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail-page',
  templateUrl: './recipe-detail-page.component.html',
  styleUrls: ['./recipe-detail-page.component.scss']
})

export class RecipeDetailPageComponent implements OnInit {

  edit = false;
  color = "primary";
  high = 4;

  recipe_old: Recipe;
  recipe_new = new Recipe();

  recipe_id: number;

  title: FormControl;
  author: FormControl;
  duration: FormControl;
  nutritional: FormControl;

  cookie = "https://raw.githubusercontent.com/MyCookieBook/CookieBookFE/master/src/pictures/Logo.jpg";

  constructor(/*public dialog: MatDialog*/private router: Router) {  }

  ngOnInit(): void {
    this.recipe_id = 0;
    if(this.recipe_id === 0) {
      this.recipe_old = new Recipe();
      this.createEmptyRecipe();
      this.color = "basic";
      this.high = 7;
      this.edit = true;
    }
    this.init();
  }

  init() {
    this.recipe_new.copy(this.recipe_old);

    this.title = new FormControl(this.recipe_old.title, [Validators.required]);
    this.author = new FormControl(this.recipe_old.author, [Validators.required]);
    this.duration = new FormControl(this.recipe_old.duration, [Validators.maxLength(3)]);
    this.nutritional = new FormControl(this.recipe_old.nutritional, [Validators.maxLength(30)]);
  }

  createEmptyRecipe() {
    this.recipe_old.setCategoryFE("Other");
    this.recipe_old.title = "Recipe Title";
    this.recipe_old.author = "Recipe Author";
    this.recipe_old.duration = 0;
    this.recipe_old.nutritional = "";
    this.recipe_old.difficulty = 1;
    this.recipe_old.ingredient = ["Ingredients"];
    this.recipe_old.material = [""];
    this.recipe_old.step = ["Steps"];
    this.recipe_old.picture = "https://raw.githubusercontent.com/MyCookieBook/CookieBookFE/master/src/pictures/DefaultRecipePicture.jpg";
    this.recipe_old.link = "";
    this.recipe_old.other = "";
  }

  setCategory(category: string) {
    this.recipe_new.setCategoryFE(category);
  }

  inputTitle(event) {
    this.checkInvalid();
    const title = event.target.value;
    this.recipe_new.title = title;
  }

  getErrorMessageTitle() {
    this.color = "basic"
    if(this.title.hasError('required')) {
      return 'Please enter a title for your recipe!';
    } else {
      return '';
    }
  }

  inputAuthor(event) {
    this.checkInvalid();
    const author = event.target.value;
    this.recipe_new.author = author;
  }

  getErrorMessageAuthor() {
    this.color = "basic"
    if(this.author.hasError('required')) {
      return 'Please enter a author for your recipe!';
    } else {
      return '';
    }
  }

  inputDuration(event) {
    this.checkInvalid();
    const duration = event.target.value;
    this.recipe_new.duration = duration;
  }

  getErrorMessageDuration() {
    this.color = "basic";
    if(this.duration.hasError('maxlength')) {
      return 'Your duration is too long. Max 3 signs.';
    } else {
      return '';
    }
  }

  inputNutritional(event) {
    this.checkInvalid();
    const nutritional = event.target.value;
    this.recipe_new.nutritional = nutritional;
  }

  getErrorMessageNutritional() {
    this.color = "basic";
    if(this.nutritional.hasError('maxlength')) {
      return 'Your nutritional values are too long. Max 30 signs.';
    } else {
      return '';
    }
  }

  getDifficulty() {
    return new Array(this.recipe_old.difficulty);
  }

  clickSave() {
    if(this.color === "primary") {
      this.edit = false;
      this.high = 4;
      this.recipe_old.copy(this.recipe_new);
    }
  }

  clickCancel() {
    if(this.recipe_id === 0) {
      this.router.navigate(['/']);
    } else {
      this.edit = false;
      this.high = 4;
      this.recipe_new.copy(this.recipe_old);
    }
  }

  clickEdit() {
    this.edit = true;
    this.high = 7;
  }

  checkInvalid() {
    if(!this.title.invalid && !this.author.invalid && !this.duration.invalid && !this.nutritional.invalid) {
      this.color = "primary";
    }
  }

}
