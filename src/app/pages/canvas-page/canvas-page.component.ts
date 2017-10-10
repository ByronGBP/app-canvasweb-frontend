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
      this.C.clearCanvasDrums();
  }

  @HostListener('document:keydown', ['$event'])
    onKeyDown(ev:KeyboardEvent) {
      ev.preventDefault();
      if (ev.key === 'q') {
        this.C.demoDrums(1);
      }

      if (ev.key == 'w') {
        this.C.demoDrums(2);
      }

      if (ev.key === ' ') {
        this.C.demoParticle();
      }

      if (ev.key == 'u') {

        this.C.demoRectangle(1);
      }
      if (ev.key == 'i') {

        this.C.demoRectangle(2);
      }
      if (ev.key == 'o') {

        this.C.demoRectangle(3);
      }
      if (ev.key == 'p') {

        this.C.demoRectangle(4);
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
