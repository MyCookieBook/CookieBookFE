import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})

export class UserLoginService {

  public email: FormControl;
  public password: FormControl;

  constructor(private http: HttpClient) { }

  loginUser(email: FormControl, password: FormControl){
    return this.http.post<Number>("http://localhost:8080/users/login?email="+ email +"&password="+ password,null);
  }
}
