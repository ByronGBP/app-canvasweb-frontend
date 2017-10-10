import { Component, OnInit, HostListener } from '@angular/core';

import { PaintingService } from '../../services/painting.service'

import { Painting } from '../../models/painting.model'

import { Canvas } from '../../utils/canvas'

let KeyCode = {
  drums1: 'q',
  drums2: 'w',
  particles: ' ',
  piano1: 'u',
  piano2: 'i',
  piano3: 'o',
  piano4: 'p',
  piano5: 'j',
  piano6: 'k',
  piano7: 'l',
  piano8: 'ñ',
  text: 'n',
  guitar:'z',
  guitar2:'x',

}

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
      const key = ev.key.toLowerCase()
      if (key === KeyCode.drums1 || key == KeyCode.drums2) {
        this.C.clearCanvasDrums();
      }
      if (key == KeyCode.text) {
        document.getElementById('text').style.opacity = "0";
      }
  }

  @HostListener('document:keydown', ['$event'])
    onKeyDown(ev:KeyboardEvent) {
      ev.preventDefault();

      const key = ev.key.toLowerCase()
      if (key === KeyCode.drums1) {
        this.C.demoDrums(1);
      }

      if (key == KeyCode.drums2) {
        this.C.demoDrums(2);
      }

      if (key === KeyCode.particles) {
        this.C.demoParticle();
      }

      if (key == KeyCode.piano1) {
        this.C.demoRectangle(1);
      }

      if (key == KeyCode.piano2) {
        this.C.demoRectangle(2);
      }

      if (key == KeyCode.piano3) {
        this.C.demoRectangle(3);
      }

      if (key == KeyCode.piano4) {
        this.C.demoRectangle(4);
      }

      if (key == KeyCode.piano5) {
        this.C.demoRectangle(5);
      }

      if (key == KeyCode.piano6) {
        this.C.demoRectangle(6);
      }

      if (key == KeyCode.piano7) {
        this.C.demoRectangle(7);
      }

      if (key == KeyCode.piano8) {
        this.C.demoRectangle(8);
      }

      if (key === KeyCode.text) {
        document.getElementById('text').style.opacity = "1";
      }

      if (key === KeyCode.guitar) {
        this.C.demoLines();
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
