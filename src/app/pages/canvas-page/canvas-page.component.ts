import { Component, OnInit, HostListener } from '@angular/core';
import {Canvas} from '../../utils/canvas'

@Component({
  selector: 'app-canvas-page',
  templateUrl: './canvas-page.component.html',
  styleUrls: ['./canvas-page.component.css']
})
export class CanvasPageComponent implements OnInit {

  p5 = new Canvas();

  @HostListener('document:keyup', ['$event'])
    onKeyUp(ev:KeyboardEvent) {
      this.p5.cleanCanvas();
  }

  @HostListener('document:keydown', ['$event'])
    onKeyDown(ev:KeyboardEvent) {
      if (ev.key === "q") {
        this.p5.drawStuff();
      } else {
        this.p5.drawCircle();
      }
  }

  constructor() { }

  ngOnInit() {
    this.p5.setupCanvas();
  }

}
