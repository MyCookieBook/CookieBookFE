import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-data',
  templateUrl: './login-data.component.html',
  styleUrls: ['./login-data.component.scss']
})
export class LoginDataComponent /*implements OnInit*/ {

  hidePassword = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.minLength(8), Validators.required]);
  hasError = true;
  loginSuccess = false;

  getError() {
    if(this.email.invalid || this.password.invalid) {
      this.hasError = true;
    } else {
      this.hasError = false;
    }
    return this.hasError;
  }

  //constructor() { }

  getErrorMessageMail() {
    if(this.email.hasError('required')) {
      return 'Please enter your mail address!';
    } else if(this.email.hasError('email')) {
      return 'It is not a valid email!';
    } else {
      return '';
    }
  }

  getErrorMessagePassword() {
    if(this.password.hasError('required')) {
      return 'Please enter your password!';
    } else if(this.password.hasError('minlength')) {
      return 'The password is to short! (min length 8)';
    } else {
      return '';
    }
  }

  checkLogin() {
    if(this.hasError == false) {
      this.loginSuccess = true;
      //this.activeLink = 'active';
    }
  }
}
/*ngOnInit(): void {}*/
