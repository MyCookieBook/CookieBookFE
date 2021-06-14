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

  currentStep;

  constructor(private router: Router) {
  }

  ngOnInit(): void {

    var userId = localStorage.getItem('UserID');
    if (userId === null) {
      this.router.navigate(['/login']);
    }

    this.currentStep = 0;
    this.steps = JSON.parse(localStorage.getItem('Steps'));
    localStorage.removeItem('Steps');
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
    this.router.navigate(['/recipe']);
  }

}
