import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PaintingService } from '../../services/painting.service'
import { AuthService } from '../../services/auth.service'

import { Painting } from '../../models/painting.model'
import { User } from '../../models/user.model'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  paintings: Painting[];
  user: User;

  constructor(private authService: AuthService, private paintingService: PaintingService, private router: Router) { }

  ngOnInit() {
    this.paintingService.getPaintings()
      .subscribe(
        (paintings) => this.paintings = paintings
    );
    this.authService.isLoggedIn()
      .subscribe(
        (user) => this.user = user
    );
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

  goToPaintingPage(id) {
    this.router.navigate(['/painting', id]);
  }
}
