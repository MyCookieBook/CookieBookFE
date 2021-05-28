import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {UserRegisterService} from "./service/user-register.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  hidePassword = true;
  hideConfirmPassword = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.minLength(8), Validators.required]);
  hasError = true;
  registerSuccess = false;
  userId: Number;

  constructor(private userRegisterService: UserRegisterService, private router: Router) { }

  ngOnInit() {
  }

  handleRegister() {
    this.userRegisterService.registerUser(this.email.value, this.password.value).subscribe((res) => {
      if (this.hasError == false) {
        this.registerSuccess = true;
        this.userId = +res;
        console.log(this.userId)
        if (this.userId >= 60) {
          localStorage.setItem('UserID', JSON.stringify(this.userId));
          this.router.navigate(['/']);
        }
      }
    }, () => {
      this.registerSuccess = false;
    });
  }

}
