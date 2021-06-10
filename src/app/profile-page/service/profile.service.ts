import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public id: string;
  public email: string;
  public username: string;
  public password: string;

  constructor(private http: HttpClient) {
  }

  editProfile(id: string, email: string, username: string) {
    const headers = new HttpHeaders()
      .set(
        'Content-Type',
        'application/json'
      );
    return this.http.post<number>("http://localhost:8080/users/edit", {
      "id": id,
      "email": email,
      "username": username
    }, {"headers": headers})
  }

  changePassword(id: string, email: string, password: string){
    const headers = new HttpHeaders()
      .set(
        'Content-Type',
        'application/json'
      );
    return this.http.post<number>("http://localhost:8080/users/changePassword?newPassword="+password, {
      "id": id,
      "email": email
    }, {"headers": headers})
  }

  getUser(id: string) {
    return this.http.get("http://localhost:8080/user?UserId="+id).pipe(
      map((data:string[]) =>{
        return data
      })
    );
  }
}
