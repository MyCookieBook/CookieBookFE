import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-data',
  templateUrl: './login-data.component.html',
  styleUrls: ['./login-data.component.scss']
})
export class LoginDataComponent /*implements OnInit*/ {

  hidePassword = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  //constructor() { }

  getErrorMessage() {
    if(this.email.hasError('required')) {
      return 'Please enter your mail address!';
    }
    if(this.email.hasError('email')) {
      return 'It is not a valid email!';
    } else {
      return '';
    }
  }
}
/*ngOnInit(): void {}*/
