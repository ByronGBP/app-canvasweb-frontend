import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

const apiUrl = environment.apiUrl + '/auth';


@Injectable()
export class AuthService {

  private requestOptions: RequestOptions;

  constructor(private http: Http) {
    this.requestOptions = new RequestOptions({withCredentials: true})
   }

  handleError(e) {
    return Observable.throw(e.json().error);
  }

  signup(user) {
    return this.http.post(`${apiUrl}/signup`, user, this.requestOptions)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`${apiUrl}/login`, user, this.requestOptions)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`${apiUrl}/logout`, {}, this.requestOptions)
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${apiUrl}/loggedin`, this.requestOptions)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  getPrivateData() {
    return this.http.get(`${apiUrl}/private`, this.requestOptions)
      .map(res => res.json())
      .catch(this.handleError);
  }
}
