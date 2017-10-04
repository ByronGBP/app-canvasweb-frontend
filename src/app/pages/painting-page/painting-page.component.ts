import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PaintingService } from '../../services/painting.service'

import { User } from '../../models/user.model'
import { Painting } from '../../models/painting.model'

@Component({
  selector: 'app-painting-page',
  templateUrl: './painting-page.component.html',
  styleUrls: ['./painting-page.component.css']
})
export class PaintingPageComponent implements OnInit {

  painting: Painting;

  constructor(private paintingService: PaintingService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.setupPainting();
  }

  private setupPainting() {
    this.route.params.subscribe((params) => {
      let paintingId = params['id'];
      this.paintingService.getPaintingWithId(paintingId)
        .subscribe(
          (painting) => this.painting = painting
        );
    });
  }

}
