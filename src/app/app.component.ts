import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service'
import { PaintingService } from './services/painting.service'

import { User } from './models/user.model'
import { Painting } from './models/painting.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {

  }
}
