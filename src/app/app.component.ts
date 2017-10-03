<<<<<<< HEAD
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
=======
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service'

import { User } from './models/user.model'
>>>>>>> dev

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD
export class AppComponent {

=======
export class AppComponent implements OnInit {
  user: User;
>>>>>>> dev
  formInfo = {
    username: '',
    password: ''
  };
<<<<<<< HEAD

  user: any;
  error: string;
  privateData: any = ''

  constructor(private session: AuthService) {
=======
  error: string;
  privateData: any = '';

  constructor(private session: AuthService) { }

  ngOnInit() {
>>>>>>> dev
    this.session.isLoggedIn()
      .subscribe(
        (user) => this.successCb(user)
      );
  }

<<<<<<< HEAD
  ngOnInit() {

  }

=======
>>>>>>> dev
  login() {
    this.session.login(this.formInfo)
      .subscribe(
        (user) => this.successCb(user),
        (err) => this.errorCb(err)
      );
  }

  signup() {
    this.session.signup(this.formInfo)
      .subscribe(
        (user) => this.successCb(user),
        (err) => this.errorCb(err)
      );
  }

  logout() {
    this.session.logout()
      .subscribe(
        () => this.successCb(null),
        (err) => this.errorCb(err)
      );
  }

  getPrivateData() {
    this.session.getPrivateData()
      .subscribe(
        (data) => this.privateData = data,
        (err) => this.error = err
      );
  }

  errorCb(err) {
    this.error = err;
    this.user = null;
  }

  successCb(user) {
    this.user = user;
    this.error = null;
  }
}
