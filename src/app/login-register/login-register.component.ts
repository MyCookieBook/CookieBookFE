import {Component} from '@angular/core';
import {AbstractControl, FormControl, ValidationErrors, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {UserRegisterService} from "./service/user-register.service";

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
  confirmPassword = new FormControl('', [Validators.required, this.equalPassword('password')]);
  acceptDSGVO = new FormControl(false, [Validators.requiredTrue]);
  hasError = true;
  registerSuccess = false;
  userId: Number;

  constructor(private userRegisterService: UserRegisterService, private router: Router) { }

  getError() {
    if(this.email.invalid || this.password.invalid /*|| this.confirmPassword.invalid*/ || this.acceptDSGVO.invalid) {
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
    if(this.confirmPassword.hasError('required')) {
      return 'Please confirm your Password!';
    } else if(this.confirmPassword.invalid) {
      return 'Enter the same password!';
    } else {
      return '';
    }
  }

  equalPassword(matchTo): (AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      return !!control.parent &&
        !!control.parent.value &&
        control.value === control.parent.controls[matchTo].value
        ? null
        : {isMatching: false};
    }
  }

  getErrorMessageDSGVO() {
    if(this.acceptDSGVO.hasError('required')) {
      return 'Please accept the DSGVO!';
    } else {
      return '';
    }
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
