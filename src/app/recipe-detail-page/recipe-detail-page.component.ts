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
//import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-recipe-detail-page',
  templateUrl: './recipe-detail-page.component.html',
  styleUrls: ['./recipe-detail-page.component.scss']
})

export class RecipeDetailPageComponent implements OnInit {

  edit = false;
  color = "primary";
  high = 5;
  highview = 5;
  highedit = 8;

  recipe_old: Recipe;
  recipe_new = new Recipe();

  recipe_id: number;

  title: FormControl;
  author: FormControl;
  duration: FormControl;
  nutritional: FormControl;
  link: FormControl;
  other: FormControl;

  cookie = "https://raw.githubusercontent.com/MyCookieBook/CookieBookFE/master/src/pictures/Logo.jpg";

  constructor(/*public dialog: MatDialog,*/ private router: Router) {  }

  ngOnInit(): void {
    this.recipe_id = 0;
    if(this.recipe_id === 0) {
      this.recipe_old = new Recipe();
      this.createEmptyRecipe();
      this.color = "basic";
      this.high = this.highedit;
      this.edit = true;
    }
    this.init();
  }

  init() {
    this.recipe_new.copy(this.recipe_old);

    this.setFormControl();
  }

  createEmptyRecipe() {
    this.recipe_old.setCategoryFE("Other");
    this.recipe_old.title = "";
    this.recipe_old.author = "";
    this.recipe_old.duration = 0;
    this.recipe_old.nutritional = "";
    this.recipe_old.difficulty = 0;
    this.recipe_old.ingredient = [""];
    this.recipe_old.material = [""];
    this.recipe_old.step = [""];
    this.recipe_old.picture = "https://raw.githubusercontent.com/MyCookieBook/CookieBookFE/master/src/pictures/DefaultRecipePicture.jpg";
    this.recipe_old.link = "";
    this.recipe_old.other = "";
  }

  setCategory(category: string) {
    this.recipe_new.setCategoryFE(category);
  }

  inputTitle(event) {
    const title = event.target.value;
    this.recipe_new.title = title;
    this.checkInvalid();
  }

  getErrorMessageTitle() {
    this.color = "basic"
    if(this.title.hasError('required')) {
      return 'Please enter a title for your recipe!';
    } else if(this.title.hasError('maxlength')) {
      return 'Your title is too long. (Max length 255)'
    } else {
      return '';
    }
  }

  inputAuthor(event) {
    const author = event.target.value;
    this.recipe_new.author = author;
    this.checkInvalid();
  }

  getErrorMessageAuthor() {
    this.color = "basic"
    if(this.author.hasError('required')) {
      return 'Please enter a author for your recipe!';
    } else if(this.title.hasError('maxlength')) {
      return 'Your authorname is too long. (Max length 255)'
    } else{
      return '';
    }
  }

  inputDuration(event) {
    const duration = event.target.value;
    this.recipe_new.duration = duration;
    this.checkInvalid();
  }

  getErrorMessageDuration() {
    this.color = "basic";
    if(this.duration.hasError('maxlength')) {
      return 'Your duration is too long. Max 11 signs.';
    } else {
      return '';
    }
  }

  inputNutritional(event) {
    const nutritional = event.target.value;
    this.recipe_new.nutritional = nutritional;
    this.checkInvalid();
  }

  getErrorMessageNutritional() {
    this.color = "basic";
    if(this.nutritional.hasError('maxlength')) {
      return 'Your nutritional values are too long. Max 255 signs.';
    } else {
      return '';
    }
  }

  inputIngredient(event, ind: number) {
    const ingredient = event.target.value;
    this.recipe_new.addIngredient(ingredient, ind);
    this.checkInvalid();
  }

  addIngredient() {
    this.recipe_new.addIngredient("", -1);
    this.highedit++;
    this.highview++;
    this.high = this.highedit;
  }

  deleteIngredient(index: number) {
    this.recipe_new.deleteIngredient(index);
    if(this.recipe_new.ingredient.length > 1) {
      this.highedit--;
      this.highview--;
      this.high = this.highedit;
    }
  }

  inputMaterial(event, ind: number) {
    const material = event.target.value;
    this.recipe_new.addMaterial(material, ind);
    this.checkInvalid();
  }

  addMaterial() {
    this.recipe_new.addMaterial("", -1);
    this.highedit++;
    this.highview++;
    this.high = this.highedit;
  }

  deleteMaterial(index: number) {
    this.recipe_new.deleteMaterial(index);
    if(this.recipe_new.material.length > 1) {
      this.highedit--;
      this.highview--;
      this.high = this.highedit;
    }
  }

  inputStep(event, ind: number) {
    const step = event.target.value;
    this.recipe_new.addStep(step, ind);
    this.checkInvalid();
  }

  addStep() {
    this.recipe_new.addStep("", -1);
    this.highedit++;
    this.highview++;
    this.high = this.highedit;
  }

  deleteStep(index: number) {
    this.recipe_new.deleteStep(index);
    if(this.recipe_new.step.length > 1) {
      this.highedit--;
      this.highview--;
      this.high = this.highedit;
    }
  }

  inputLink(event) {
      const link = event.target.value;
      this.recipe_new.link = link;
      this.checkInvalid();
    }

  getErrorMessageLink() {
    this.color = "basic";
    if(this.nutritional.hasError('maxlength')) {
      return 'Your link is too long. Max 255 signs.';
    } else {
      return '';
    }
  }

  inputOther(event) {
    const other = event.target.value;
    this.recipe_new.other = other;
    this.checkInvalid();
  }

  getErrorMessageOther() {
    this.color = "basic";
    if(this.nutritional.hasError('maxlength')) {
      return 'Your information is too long. Max 255 signs.';
    } else {
      return '';
    }
  }

  setDifficulty(value: number) {
    this.recipe_new.difficulty = value;
    this.checkInvalid();
  }

  getDifficulty() {
    return new Array(this.recipe_old.difficulty);
  }

  clickSave() {
    if(this.color === "primary") {
      this.edit = false;
      this.high = this.highview;
      this.recipe_old.copy(this.recipe_new);
    }
  }

  clickCancel() {
    //this.openDialog();
    if(this.recipe_id === -1) {
      this.router.navigate(['/']);
    } else {
      this.edit = false;
      this.high = this.highview;
      this.recipe_new.copy(this.recipe_old);
    }
  }

  clickEdit() {
    this.edit = true;
    this.high = this.highedit;

    this.setFormControl();
  }

  checkInvalid() {
    if(!this.title.invalid &&
        !this.author.invalid &&
        !this.duration.invalid &&
        !this.nutritional.invalid &&
        this.recipe_new.difficulty > 0 &&
        !(this.recipe_new.ingredient[0] === "") &&
        !(this.recipe_new.step[0] === "") &&
        !this.link.invalid &&
        !this.other.invalid) {
      this.color = "primary";
    }
  }

  setFormControl() {
    this.title = new FormControl(this.recipe_new.title, [Validators.required, Validators.maxLength(255)]);
    this.author = new FormControl(this.recipe_new.author, [Validators.required, Validators.maxLength(255)]);
    this.duration = new FormControl(this.recipe_new.duration, [Validators.maxLength(11)]);
    this.nutritional = new FormControl(this.recipe_new.nutritional, [Validators.maxLength(255)]);
    this.link = new FormControl(this.recipe_new.link, [Validators.maxLength(22)]);
    this.other = new FormControl(this.recipe_new.other, [Validators.maxLength(255)]);
  }

  /*openDialog() {
    var cancel = false;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      //data: {text: 'test'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
      cancel = result;
    });

    return cancel;
  }*/


}
