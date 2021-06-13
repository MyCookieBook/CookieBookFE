import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormControl} from "@angular/forms";
import {User} from "../../classes/user";
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  public email: FormControl;
  public password: FormControl;

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.domain;
  }

  registerUser(email: FormControl, password: FormControl){
    const headers = new HttpHeaders()
      .set(
        'Content-Type',
        'application/json'
      );
    return this.http.post<Number>(this.url + "/users/register", {"email": email, "password": password}, {'headers': headers});
  }
}
