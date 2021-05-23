import { Component, NgModule, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatFormField, MatLabel } from '@angular/material/form-field';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent /*implements OnInit*/ {

  edit = false;
  username_old = "username";
  username_new = this.username_old;
  name = new FormControl(this.username_old, [Validators.required, Validators.minLength(4)]);
  usermail_old = "usermail";
  usermail_new = this.usermail_old;
  email = new FormControl(this.username_old, [Validators.required, Validators.email]);
  color = "primary";
  picturescr="test";

  variable = "Variabler Text, der vom BE kommt";
  hidden = true;

  constructor() { }

  inputUsername(event) {
    this.checkInvalid();
    const name = event.target.value;
    this.username_new = name;
  }

  getErrorMessagePassword() {
    this.color = "basic";
    if(this.name.hasError('required')) {
      return 'Please enter a username!';
    } else if(this.name.hasError('minlength')) {
      return 'The username is to short! (min length 4)';
    } else {
      return '';
    }
  }

  inputUsermail(event) {
    this.checkInvalid();
    const mail = event.target.value;
    this.usermail_new = mail;
  }

  checkInvalid() {
    if(!this.email.invalid && !this.name.invalid) {
      this.color = "primary";
    }
  }

  getErrorMessageMail() {
    this.color = "basic";
    if(this.email.hasError('required')) {
      return 'Please enter your mail address!';
    } else if(this.email.hasError('email')) {
      return 'It is not a valid email!';
    } else {
      return '';
    }
  }

  clickSave() {
    if(this.color === "primary") {
      this.edit = false;
      this.username_old = this.username_new;
      this.usermail_old = this.usermail_new;
    }
  }

  clickCancel() {
    this.edit = false;
    this.username_new = this.username_old;
    this.usermail_new = this.usermail_old;
  }

  /*ngOnInit(): void {
  }*/

}
