import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Step} from '../classes/step';

@Component({
  selector: 'app-recipe-bake',
  templateUrl: './recipe-bake.component.html',
  styleUrls: ['./recipe-bake.component.scss']
})
export class RecipeBakeComponent implements OnInit {

  steps: Array<string>;
  recipe: string;

  currentStep;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.recipe = localStorage.getItem('Recipe');
    localStorage.removeItem('Recipe');
    this.currentStep = 0;
    this.steps = JSON.parse(localStorage.getItem('Steps'));
    // this.steps = ['Nasszutaten verrühren','Trockenzutaten vermengen','Trockenzutaten unter Nasszutaten unterheben','Aus Teig Kugeln formen und auf Blech auslegen','Auf 180°C Ober/Unterhitze 40 min backen','Abkühlen lassen und von Blech nehmen'];
  }

  clickNext() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    } else {
      this.clickSkip();
    }
  }

  clickBack() {
    if (this.currentStep > 0) {
      this.currentStep--;
    } else {
      this.currentStep = 0;
    }
  }

  clickSkip() {
    sessionStorage.setItem('Recipe', this.recipe);
    this.router.navigate(['/recipe']);
  }

}
