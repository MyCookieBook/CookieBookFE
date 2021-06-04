import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormControl} from "@angular/forms";
import {User} from "../../classes/user";

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  public email: FormControl;
  public password: FormControl;

  constructor(private http: HttpClient) { }

  registerUser(email: FormControl, password: FormControl){
    const headers = new HttpHeaders()
      .set(
        'Content-Type',
        'application/json'
      );
    return this.http.post<Number>("http://localhost:8080/users/register", {"email": email, "password": password}, {'headers': headers});
  }
}
