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
  colorPw = "basic";

  userId: string;
  response: number;

  username_old: string;
  usermail_old: string;

  username_new: string;
  usermail_new: string;

  password_old: string;
  password_new: string;
  password_confirm: string;

  hidePwOld: boolean;
  hidePwNew: boolean;
  hidePwConfirm: boolean;

  savePw: boolean;

  name: FormControl;
  email: FormControl;

  pw_old: FormControl;
  pw_new: FormControl;
  pw_confirm: FormControl;

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
    this.initChangePassword();
    this.clearPasswords();
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

  initChangePassword() {
    this.hidePwOld = true;
    this.hidePwNew = true;
    this.hidePwConfirm = true;
    this.setFormControlPassword();
    this.savePw = false;
  }

  clearPasswords() {
    this.password_old = "";
    this.password_new = "";
    this.password_confirm = "";
    this.colorPw = "basic";
  }

  inputPasswordOld(event) {
    const pw = event.target.value;
    this.password_old = pw;
    this.checkInvalidPw();
  }

  getErrorMessagePasswordOld() {
    this.colorPw = "basic";
    if(this.pw_old.hasError('required')) {
      return 'Please enter the password!';
    } else if(this.pw_old.hasError('minlength')) {
      return 'The password is to short! (min length 8)';
    } else {
      return '';
    }
  }

  inputPasswordNew(event) {
    const pw = event.target.value;
    this.password_new = pw;
    this.checkInvalidPw();
  }

  getErrorMessagePasswordNew() {
    this.colorPw = "basic";
    if(this.pw_new.hasError('required')) {
      return 'Please enter the password!';
    } else if(this.pw_new.hasError('minlength')) {
      return 'The password is to short! (min length 8)';
    } else {
      return '';
    }
  }

  inputPasswordConfirm(event) {
    const pw = event.target.value;
    this.password_confirm = pw;
    this.checkInvalidPw();
  }

  confirmInvalid() {
    if(this.pw_confirm.invalid || this.notEqualPw()) {
      return true;
    } else {
      return false;
    }
  }

  notEqualPw() {
    return !(this.password_new === this.password_confirm);
  }

  getErrorMessagePasswordConfirm() {
    this.colorPw = "basic";
    if(this.pw_confirm.hasError('required')) {
      return 'Please enter the password!';
    } else if(this.pw_confirm.hasError('minlength')) {
      return 'The password is to short! (min length 8)';
    } else if (this.notEqualPw()){
      return 'It is not the same password!';
    } else {
      return '';
    }
  }

  checkInvalidPw() {
    if(!this.pw_old.invalid && !this.pw_new.invalid && !this.confirmInvalid()) {
      this.colorPw = "primary";
    }
  }

  clickSavePw() {
    if(this.colorPw === "primary") {
      //handleSavePassword();
      //if (this.response === 20) {
        this.clearPasswords();
        this.initChangePassword();
        this.savePw = true;
      //}
    }
  }

  clickCancelPw() {
    this.clearPasswords();
    this.initChangePassword();
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

  setFormControlPassword() {
    this.pw_old = new FormControl(this.password_old, [Validators.minLength(8), Validators.required]);
    this.pw_new = new FormControl(this.password_new, [Validators.minLength(8), Validators.required]);
    this.pw_confirm = new FormControl(this.password_confirm, [Validators.minLength(8), Validators.required]);
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
