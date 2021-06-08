import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserLogoutService {

  constructor(private http: HttpClient) { }

  logoutUser(userId: Number){
    return this.http.post<Number>("http://localhost:8080/users/logout?userId="+ userId, null);
  }
}
