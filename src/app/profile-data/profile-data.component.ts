import { Component, NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatFormField, MatLabel } from '@angular/material/form-field';
import {FormBuilder, FormGroup} from '@angular/forms';

/*@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    ProfileDataComponent
  ],
  exports: [ProfileDataComponent]
})*/

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss']
})

export class ProfileDataComponent /*implements OnInit*/ {

  variable = "Variabler Text, der vom BE kommt";
  hidden = true;

  constructor() { }

  /*ngOnInit() {
  }*/

}
