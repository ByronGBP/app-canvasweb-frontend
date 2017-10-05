import { Component, OnInit } from '@angular/core';
import { PaintingService } from '../../services/painting.service'

import { Painting } from '../../models/painting.model'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  paintings: Painting[];

  constructor(private paintingService: PaintingService) { }

  ngOnInit() {
    this.paintingService.getPaintings()
      .subscribe(
        (paintings) => this.paintings = paintings
      );
  }
}
