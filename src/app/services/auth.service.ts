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
<<<<<<< HEAD
    return Observable.throw(e.json().message);
=======
    return Observable.throw(e.json().error);
>>>>>>> dev
  }

  signup(user) {
    return this.http.post(`http://localhost:3000/auth/signup`, user, this.requestOptions)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`http://localhost:3000/auth/login`, user, this.requestOptions)
<<<<<<< HEAD
      .map(res => res.json())
=======
      .map(res => {res.json();
      })
>>>>>>> dev
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`http://localhost:3000/auth/logout`, {}, this.requestOptions)
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`http://localhost:3000/auth/loggedin`, this.requestOptions)
      .map(res => res.json())
      .catch(this.handleError);
  }
<<<<<<< HEAD
  
=======

>>>>>>> dev
  getPrivateData() {
    return this.http.get(`http://localhost:3000/auth/private`, this.requestOptions)
      .map(res => res.json())
      .catch(this.handleError);
  }
}
