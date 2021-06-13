import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormControl} from '@angular/forms';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserLoginService {

  public email: FormControl;
  public password: FormControl;

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.domain;
  }

  loginUser(email: FormControl, password: FormControl) {
    return this.http.post<Number>(this.url + '/users/login?email=' + email + '&password=' + password, null);
  }
}
