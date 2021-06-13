import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserLogoutService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.domain;
  }

  logoutUser(userId: Number){
    return this.http.post<Number>(this.url + "/users/logout?userId=" + userId, null);
  }
}
