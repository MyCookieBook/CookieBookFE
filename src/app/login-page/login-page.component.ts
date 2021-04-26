import { Component, OnInit } from '@angular/core';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
//import {LoginDataComponent} from './login-data.component';
import {HttpClientModule} from '@angular/common/http';
//import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule, MatFormField, MatLabel } from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

/*@NgModule({
  declarations: [
    LoginDataComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    TranslateModule,
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  exports: []

})*/

export class LoginPageComponent /*implements OnInit*/ {

  constructor() { }

  /*ngOnInit(): void {
  }*/

}
