import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public id: string;
  public email: string;
  public username: string;
  public password: string;

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.domain;
  }

  editProfile(id: string, email: string, username: string): Observable<number> {
    const headers = new HttpHeaders()
      .set(
        'Content-Type',
        'application/json'
      );
    return this.http.post<number>(this.url + '/users/edit', {
      id,
      email,
      username
    }, {headers});
  }

  changePassword(id: string, email: string, password: string): Observable<number> {
    const headers = new HttpHeaders()
      .set(
        'Content-Type',
        'application/json'
      );
    return this.http.post<number>(this.url + '/users/changePassword?newPassword=' + password, {
      id,
      email
    }, {headers});
  }

  getUser(id: string) {
    return this.http.get(this.url + '/user?UserId=' + id).pipe(
      map((data: string[]) => {
        return data;
      })
    );
  }
}
