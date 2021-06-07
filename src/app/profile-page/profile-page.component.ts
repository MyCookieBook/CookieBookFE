import {Component, NgModule, OnInit} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MatFormField, MatLabel} from '@angular/material/form-field';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {ProfileService} from "./service/profile.service";
import {UserRegisterService} from "../login-register/service/user-register.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  edit = false;
  color = "primary";

  userId: string;
  response: number;

  username_old: string;
  usermail_old: string;
  password_old: string;

  username_new: string;
  usermail_new: string;
  password_new: string;

  name: FormControl;
  email: FormControl;

  picturescr = "https://raw.githubusercontent.com/MyCookieBook/CookieBookFE/master/src/pictures/avatar.jpg";


  constructor(private profileService: ProfileService, private router: Router) {
  }

  ngOnInit() {
    this.userId = localStorage.getItem('UserID');
    this.getUser();

    this.username_old = "username"; //BE
    this.usermail_old = "user@mail";  //BE

    this.username_new = this.username_old;
    this.usermail_new = this.usermail_old;

    this.setFormControl();
  }

  inputUsername(event) {
    const name = event.target.value;
    this.username_new = name;
    this.checkInvalid();
  }

  getErrorMessageName() {
    this.color = "basic";
    if (this.name.hasError('required')) {
      return 'Please enter a username!';
    } else if (this.name.hasError('minlength')) {
      return 'The username is to short! (min length 4)';
    } else {
      return '';
    }
  }

  inputUsermail(event) {
    const mail = event.target.value;
    this.usermail_new = mail;
    this.checkInvalid();
  }

  getErrorMessageMail() {
    this.color = "basic";
    if (this.email.hasError('required')) {
      return 'Please enter your mail address!';
    } else if (this.email.hasError('email')) {
      return 'It is not a valid email!';
    } else {
      return '';
    }
  }

  checkInvalid() {
    if (!this.email.invalid && !this.name.invalid) {
      this.color = "primary";
    }
  }

  clickEdit() {
    this.edit = true;
    this.setFormControl();
  }

  clickSave() {
    if (this.color === "primary") {
      this.handleEditProfile();
      if (this.response === 20) {
        this.edit = false;
        this.username_old = this.username_new;
        this.usermail_old = this.usermail_new;
      }else{
        this.router.navigate(['/login']);
      }
    }
  }

  clickCancel() {
    this.edit = false;
    this.username_new = this.username_old;
    this.usermail_new = this.usermail_old;
  }

  setFormControl() {
    this.name = new FormControl(this.username_new, [Validators.required, Validators.minLength(4)]);
    this.email = new FormControl(this.usermail_new, [Validators.required, Validators.email]);
  }

  handleEditProfile() {
    this.profileService.editProfile(this.userId, this.usermail_new, this.username_new).subscribe((res) => {
      this.response = res;
      console.log(res);
    });
  }

  // handleChangePassword(){
  //   this.profileService.changePassword(this.userId, this.usermail_old, this.password_new).subscribe((res) => {
  //     console.log(res);
  //   }, () => {
  //   });
  // }

  getUser() {
    this.profileService.getUser(this.userId).subscribe((map) => {
      console.log(map);
      this.usermail_old = map[0];
      this.username_old = map[1];
    });
  }
}
