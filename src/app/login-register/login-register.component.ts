import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormControl, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})

export class LoginRegisterComponent /*implements OnInit*/ {

  hidePassword = true;
  hideConfirmPassword = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.minLength(8), Validators.required]);
  confirmPassword = new FormControl('');
  //passwordEquals = false;
  acceptDSGVO = new FormControl(false, [Validators.requiredTrue]);
  hasError = true;
  registerSuccess = false;

  constructor() { }

  getError() {
    if(this.email.invalid || this.password.invalid || !this.getEqualPassword()) {
      this.hasError = true;
    } else {
      this.hasError = false;
    }
    return this.hasError;
  }

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

  getErrorMessageConfirmPassword() {
    var isEqual = this.getEqualPassword();
    if(isEqual) {
      return '';
    } else {
      return 'Enter the same password!';
    }
  }

  getEqualPassword() {
    if(this.password.value.equals(this.confirmPassword.value)) {
      return true;
    } else {
      return false;
    }
  }

  getErrorMessageDSGVO() {
    if(this.acceptDSGVO.hasError('required')) {
      return 'Please accept the DSGVO!';
    } else {
      return '';
    }
  }

  checkRegister() {
    if(this.hasError == false) {
      this.registerSuccess = true;
      //this.activeLink = 'active';
    }
  }

  /*ngOnInit(): void {
  }*/

}
