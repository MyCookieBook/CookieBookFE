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

export class ProfileDataComponent {

  constructor() { }

  //ngOnInit(): void {
  //}

}
