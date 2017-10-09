import { Component, OnInit, HostListener } from '@angular/core';

import { PaintingService } from '../../services/painting.service'

import { Painting } from '../../models/painting.model'

import { Canvas } from '../../utils/canvas'

@Component({
  selector: 'app-canvas-page',
  templateUrl: './canvas-page.component.html',
  styleUrls: ['./canvas-page.component.css']
})
export class CanvasPageComponent implements OnInit {

  C;
  paintings:string[];

  @HostListener('document:keyup', ['$event'])
    onKeyUp(ev:KeyboardEvent) {
      ev.preventDefault();
      //this.C.clearCanvas();
      this.C.clearCanvasBg();
  }

  @HostListener('document:keydown', ['$event'])
    onKeyDown(ev:KeyboardEvent) {
      ev.preventDefault();
      if (ev.key === 'q') {
        this.C.demoBackground2();
      }
      if (ev.key === ' ') {
        this.C.demoParticle();
      }

      if (ev.key == 'w') {

        this.C.demoBackground();
      }
  }

  constructor(private paintingService: PaintingService) { }

  ngOnInit() {
    this.paintingService.getPaintings()
      .subscribe(
        (paintings) => {
          this.paintings=[];
          paintings.forEach((painting) => this.paintings.push(painting.code));
          this.C = new Canvas(this.paintings);

        }
    );
  }
}
