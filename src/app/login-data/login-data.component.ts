import {Component, HostListener, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {UserLoginService} from './service/user-login.service';

@Component({
  selector: 'app-login-data',
  templateUrl: './login-data.component.html',
  styleUrls: ['./login-data.component.scss']
})
export class LoginDataComponent implements OnInit {

  hidePassword = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.minLength(8), Validators.required]);
  hasError = true;
  loginSuccess = false;
  userId: Number;
  error40: Number;

  ngOnInit() {
  }

  constructor(private userLoginService: UserLoginService, private router: Router) {
    this.error40 = 40;
    this.error40 = +this.error40;
  }

  getError() {
    this.hasError = this.email.invalid || this.password.invalid;
    return this.hasError;
  }

  getErrorMessageMail() {
    if (this.email.hasError('required')) {
      return 'Please enter your mail address!';
    } else if (this.email.hasError('email')) {
      return 'It is not a valid email!';
    } else {
      return '';
    }
  }

  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'Please enter your password!';
    } else if (this.password.hasError('minlength')) {
      return 'The password is to short! (min length 8)';
    } else {
      return '';
    }
  }

  handleLogin() {
    this.userLoginService.loginUser(this.email.value, this.password.value).subscribe((result) => {
      if (this.hasError === false) {
        this.loginSuccess = true;
        this.userId = +result;
        if (this.userId >= 60) {
          localStorage.setItem('UserID', JSON.stringify(this.userId));
          this.router.navigate(['/']);
        }
      }
    }, () => {
      this.loginSuccess = false;
    });
  }

  // @HostListener('pressed login')
  // keyBoardEvent(event: KeyboardEvent) {
  //   if (event.key === 'Enter') {
  //     this.handleLogin();
  //   }
  // }
}
