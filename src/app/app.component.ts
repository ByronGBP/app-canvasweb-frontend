import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service'
import { PaintingService } from './services/painting.service'

import { User } from './models/user.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User;

  formInfo = {
    username: '',
    password: ''
  };

  formPainting = {
    name: '',
    code: '',
    ownerId: ''
  }

  error: string;
  privateData: any = '';


  constructor(private authService: AuthService, private paintingService: PaintingService) {
    this.authService.isLoggedIn()
      .subscribe(
        (user) => this.successCb(user)
      );
  }

  ngOnInit() {

  }

  login() {
    this.authService.login(this.formInfo)
      .subscribe(
        (user) => this.successCb(user),
        (err) => this.errorCb(err)
      );
  }

  signup() {
    this.authService.signup(this.formInfo)
      .subscribe(
        (user) => this.successCb(user),
        (err) => this.errorCb(err)
      );
  }

  logout() {
    this.authService.logout()
      .subscribe(
        () => this.successCb(null),
        (err) => this.errorCb(err)
      );
  }

  getPrivateData() {
    this.authService.getPrivateData()
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

  createNewPainting() {
    console.log(typeof this.user.id);
    this.formPainting.ownerId = this.user.id;
    console.log(this.formPainting);
    this.paintingService.createPainting(this.formPainting)
      .subscribe(
        (data) => console.log(data),
        (err) => this.error = err
      )
  }
}
