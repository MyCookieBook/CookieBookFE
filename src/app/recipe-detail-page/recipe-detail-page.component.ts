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
export class RecipeDetailPageComponent /*implements OnInit*/ {

  edit = false;
  color = "basic";

  constructor() { }

  /*ngOnInit(): void {
  }*/

  clickSave() {
  }

  clickCancel() {
  }

}
