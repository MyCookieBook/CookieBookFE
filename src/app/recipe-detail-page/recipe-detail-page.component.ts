import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatFormField, MatLabel } from '@angular/material/form-field';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-recipe-detail-page',
  templateUrl: './recipe-detail-page.component.html',
  styleUrls: ['./recipe-detail-page.component.scss']
})
export class RecipeDetailPageComponent implements OnInit {

  edit = false;
  color = "primary";
  recipe_id: number;

  recipe_category = "";
  recipe_title = "";
  recipe_author = "";
  recipe_duration = 0;
  recipe_values = "";
  recipe_difficulty = 0;

  recipe_category_new = this.recipe_category;
  recipe_title_new = this.recipe_title;
  recipe_author_new = this.recipe_author;
  recipe_duration_new = this.recipe_duration;
  recipe_values_new = this.recipe_values;
  recipe_difficulty_new = this.recipe_difficulty;

  title = new FormControl(this.recipe_title, [Validators.required]);
  author = new FormControl(this.recipe_author, [Validators.required]);
  duration = new FormControl(this.recipe_duration, [Validators.maxLength(3)]);
  values = new FormControl(this.recipe_values, [Validators.maxLength(30)]);

  picture_src: String;
  link_scr: String;

  cookie = "https://raw.githubusercontent.com/MyCookieBook/CookieBookFE/master/src/pictures/Logo.jpg";

  constructor(/*public dialog: MatDialog*/) {
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
    this.recipe_category = "Category/Other";
    this.recipe_title = "Recipe Title";
    this.recipe_author = "Recipe Author";
    this.recipe_duration = 0;
    this.recipe_values = "nutrional values";
    this.recipe_difficulty = 0;
    this.picture_src = "https://raw.githubusercontent.com/MyCookieBook/CookieBookFE/master/src/pictures/DefaultRecipePicture.jpg";
    this.color = "basic";
  }

  setCategory(category: string) {
    this.recipe_category_new = 'Category/' + category;
  }

  inputTitle(event) {
    this.checkInvalid();
    const title = event.target.value;
    this.recipe_title_new = title;
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
    this.recipe_author_new = author;
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
    this.recipe_duration_new = duration;
  }

  getErrorMessageDuration() {
    this.color = "basic";
    if(this.author.hasError('maxlength')) {
      return 'Your duration is too long. Max 3 signs.';
    } else {
      return '';
    }
  }

  inputValues(event) {
    this.checkInvalid();
    const values = event.target.value;
    this.recipe_values_new = values;
  }

  getErrorMessageValues() {
    this.color = "basic";
    if(this.author.hasError('maxlength')) {
      return 'Your nutritional values are too long. Max 30 signs.';
    } else {
      return '';
    }
  }

  setDifficulty(difficulty: number) {
    this.recipe_difficulty_new = this.recipe_difficulty_new + difficulty;
  }

  getDifficulty() {
    return new Array(this.recipe_difficulty);
  }

  getDifficultyNew() {
    return new Array(this.recipe_difficulty_new);
  }

  getGrayCookies() {
    return new Array(5 - this.recipe_difficulty_new);
  }

  clickSave() {
    if(this.color === "primary") {
      this.edit = false;
      this.recipe_category = this.recipe_category_new;
      this.recipe_title = this.recipe_title_new;
      this.recipe_author = this.recipe_author_new;
      this.recipe_duration = this.recipe_duration_new;
      this.recipe_values = this.recipe_values_new;
      this.recipe_difficulty = this.recipe_difficulty_new;
    }
  }

  clickCancel() {
    this.edit = false;
    this.recipe_category_new = this.recipe_category;
    this.recipe_title_new = this.recipe_title;
    this.recipe_author_new = this.recipe_author;
    this.recipe_duration_new = this.recipe_duration;
    this.recipe_values_new = this.recipe_values;
    this.recipe_difficulty_new = this.recipe_difficulty;
  }

  checkInvalid() {
    if(!this.title.invalid && !this.author.invalid && !this.duration.invalid && !this.values.invalid) {
      this.color = "primary";
    }
  }

  /*openDialogPicture() {
    const dialogRef = this.dialog.open(DialogPictureComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }*/

}
