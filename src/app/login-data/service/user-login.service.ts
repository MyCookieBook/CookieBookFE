import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class USerLoginService {

  public email: FormControl;
  public password: FormControl;

  constructor(private http: HttpClient) { }

  loginUser(email: FormControl, password: FormControl){
    return this.http.post("http://localhost:4200/users/login?email="+email+"&&password="+ password,null);
  }
}
