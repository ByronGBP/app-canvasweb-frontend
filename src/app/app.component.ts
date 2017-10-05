import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PaintingService } from './services/painting.service'
import { AuthService } from './services/auth.service'

import { User } from './models/user.model'
import { Painting } from './models/painting.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  user: User;
  error: string;

  formInfo = {
    username: '',
    password: ''
  };

  showAuthForm:boolean = false;

  constructor(private authService: AuthService, private paintingService: PaintingService, private router: Router) {
    this.authService.isLoggedIn()
      .subscribe(
        (user) => this.user=user
      );
  }

  ngOnInit() {
  }

  handleClickLogout() {
    this.logout();
  }

  handleClickLogin() {
    this.showAuthForm = !this.showAuthForm;
  }

  handleClickForLogin() {
    this.login();
  }

  handleClickForSignup() {
    this.signup();
  }

  handleNewButtonClick() {
    this.createNewPainting();
  }

  private createNewPainting() {
    let newPainting = new Painting({
      name: 'New Sht',
      code: 'var a = "AND NOTHING ELSE!"',
      ownerId: this.user.id
    });

    this.paintingService.createPainting(newPainting)
      .subscribe(
        (data) => this.goToPaintingPage(data.id),
        (err) => console.log(err)
      )
  }

  private logout() {
    this.authService.logout()
      .subscribe(
        () => this.user=null,
        (err) => console.log(err)
    );
  }

  private login() {
    this.authService.login(this.formInfo)
      .subscribe(
        (user) => {this.user=user;
                   this.showAuthForm=false},
        (err) => this.error=err
      );
  }

  private signup() {
    this.authService.signup(this.formInfo)
      .subscribe(
        (user) => {this.user=user;
                   this.showAuthForm=false},
        (err) => this.error=err
      );
  }

  private goToPaintingPage(id) {
    this.router.navigate(['/painting', id]);
  }
}
