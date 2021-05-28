import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  public email: FormControl;
  public password: FormControl;

  constructor(private http: HttpClient) { }

  registerUser(email: FormControl, password: FormControl){
    return this.http.post<Number>("http://localhost:8080/users/register?email=" + email + "&password=" + password, null);
  }
}
