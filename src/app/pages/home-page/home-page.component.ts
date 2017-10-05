import { Component, OnInit, Input } from '@angular/core';

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
  @Input() user: User;

  constructor(private authService: AuthService, private paintingService: PaintingService) { }

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
}
