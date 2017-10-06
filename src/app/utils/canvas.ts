import { HostListener } from '@angular/core';

declare var p5:any;

export class Canvas {

  P;

  currentFigures;

  setupCanvas() {
    const s = (p) => {

      let canvas;

      p.setup = () => {
        canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.parent('canvas-container')
        p.background(0);
      }
    }

    this.P = new p5(s);
  }

  cleanCanvas() {
    this.P.clear();
  }

  drawCircle() {
    this.P.stroke(0, 102, 153);
    this.P.ellipse(66, 50, 33, 33);
  }

  drawStuff() {
    this.P.ellipse(50, 50, 33, 33);  // Left circle

    this.P.push();  // Start a new drawing state
    this.P.strokeWeight(10);
    this.P.fill(204, 153, 0);
    this.P.ellipse(33, 50, 33, 33);  // Left-middle circle

    this.P.push();  // Start another new drawing state
    this.P.stroke(0, 102, 153);
    this.P.ellipse(66, 50, 33, 33);  // Right-middle circle
    this.P.pop();  // Restore previous state

    this.P.pop();  // Restore original state

    this.P.ellipse(100, 50, 33, 33);  // Right circle
  }

}
