import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { PaintingService } from '../../services/painting.service'

import { User } from '../../models/user.model'
import { Painting } from '../../models/painting.model'

@Component({
  selector: 'app-playground-page',
  templateUrl: './playground-page.component.html',
  styleUrls: ['./playground-page.component.css']
})
export class PlaygroundPageComponent implements OnInit {
  user: User;

  formPainting = {
    name: '',
    code: '',
    ownerId: ''
  };

  paintings: Painting[] = [];

  error: string;
  privateData: any = '';


  constructor(private authService: AuthService, private paintingService: PaintingService) {
    this.authService.isLoggedIn()
      .subscribe(
        (user) => this.successCb(user)
      );
    this.paintingService.getPaintings()
      .subscribe(
        (paintings) => this.paintings = paintings
      );
  }

  ngOnInit() {

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
    this.formPainting.ownerId = this.user.id;
    this.paintingService.createPainting(this.formPainting)
      .subscribe(
        (data) => console.log(data),
        (err) => this.error = err
      )
  }

  logout() {
  this.authService.logout()
    .subscribe(
      () => this.successCb(null),
      (err) => this.errorCb(err)
    );
}

  edit(name, code, id) {

    let newPainting = new Painting ({
      id,
      name,
      code,
      ownerId: this.user.id
    })

    this.paintingService.editPainting(newPainting)
      .subscribe(
        (data) => console.log(data),
        (err) => this.error = err
      )
  }

}
