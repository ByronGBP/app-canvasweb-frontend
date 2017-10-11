import { Component, OnInit, HostListener } from '@angular/core';

import { PaintingService } from '../../services/painting.service'

import { Painting } from '../../models/painting.model'

import { Canvas } from '../../utils/canvas'

let KeyCode = {
  drums1: 'w',
  drums2: 'q',
  particles: ' ',
  piano1: 'p',
  piano2: 'o',
  piano3: 'i',
  piano4: 'u',
  piano5: 'ñ',
  piano6: 'l',
  piano7: 'k',
  piano8: 'j',
  text: 'n',
  guitar:'z',
  guitar2:'x',
  bg: 'b',
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

      if (key === KeyCode.bg){
        this.C.demoBg();
      }
  }

  constructor(private paintingService: PaintingService) {

  }

  ngOnInit() {
    this.C = new Canvas([]);
  //   this.paintingService.getPaintings()
  //     .subscribe(
  //       (paintings) => {
  //         this.paintings=[];
  //         paintings.forEach((painting) => this.paintings.push(painting.code));
  //         this.C = new Canvas(this.paintings);
  //
  //       }
  //   );
  }
}
