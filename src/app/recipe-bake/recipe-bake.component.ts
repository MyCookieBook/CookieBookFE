import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Step} from "../classes/step";

@Component({
  selector: 'app-recipe-bake',
  templateUrl: './recipe-bake.component.html',
  styleUrls: ['./recipe-bake.component.scss']
})
export class RecipeBakeComponent implements OnInit {

  steps: Array<Step>;
  recipe_id: string;

  currentStep;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.recipe_id = localStorage.getItem('RecipeID');
    this.currentStep = 0;
    this.handleGetSteps();
  }

  clickNext() {
    if(this.currentStep < this.steps.length-1) {
      this.currentStep++;
    } else {
      this.clickSkip();
    }
  }

  clickBack() {
    if(this.currentStep > 0) {
      this.currentStep--;
    } else {
      this.currentStep = 0;
    }
  }

  clickSkip() {
    this.router.navigate(['/recipe']);
  }



  handleGetSteps() {
    /*Dummy*/
    this.steps = [new Step(null,'Nasszutaten verrühren'),new Step(null,'Trockenzutaten vermengen'),new Step(null,'Trockenzutaten unter Nasszutaten unterheben'),new Step(null,'Aus Teig Kugeln formen und auf Blech auslegen'),new Step(null,'Auf 180°C Ober/Unterhitze 40 min backen'),new Step(null,'Abkühlen lassen und von Blech nehmen')];
  }

}
