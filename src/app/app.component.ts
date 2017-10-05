import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service'

import { User } from './models/user.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService) {
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

  private logout() {
    this.authService.logout()
      .subscribe(
        () => this.user=null,
        (err) => console.log(err)
    );
  }
}
