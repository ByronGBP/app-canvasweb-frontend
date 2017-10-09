import { HostListener } from '@angular/core';

import { Painting } from '../models/painting.model'

import { Particle } from './particle'
import { Particles } from './particles'
import { Circle } from './circle'
import { Circles } from './circles'

export class Canvas {

  allTheCodes: Function[] = [];

  particles:Particles
  circles:Circles;

  currentDimension;
  canvas;
  canvasCtx;
  canvasBg;
  canvasBgCtx;

  _interval;

  animations:any[] = [];

  constructor(private paintings: string[]) {
    this.setupDimensions();
    this.setupTheCodes();
    this.setupCanvas();

    this.circles = new Circles(this.canvasCtx);
  }

  demoParticle() {

      if (this._interval) {
        clearInterval(this._interval);
      }

      this.particles = new Particles(this.canvasCtx, 20);
      this._interval = setInterval(() => {
        if(!this.particles.ended()) {
          this.particles.render();
        }else {
          clearInterval(this._interval);
          this._interval = null;
        }
      }, 10);

  }

  demoCircle(x) {
    if (this._interval) {
      clearInterval(this._interval);
    }

    var posX = this.currentDimension.width / 4 * x;
    var newCircle = new Circle(this.canvasCtx,posX, this.currentDimension.height / 4 * 3);
    this.circles.push(newCircle);

    this._interval = setInterval(() => {
      console.log(this.circles.circles);
      console.log(this.circles.ended());
      if(!this.circles.ended()) {
        console.log('wtf');
        this.circles.render();
      }else {
        clearInterval(this._interval);
        this._interval = null;
      }
    }, 10);
  }


  clearCanvas() {
    this.canvasCtx.clearRect(0,0, this.currentDimension.width, this.currentDimension.height);
  }

  clearCanvasBg() {
    this.canvasBgCtx.clearRect(0,0, this.currentDimension.width, this.currentDimension.height);

    this.canvasBgCtx.fillStyle = '#000000';
    this.canvasBgCtx.fillRect(0, 0, this.currentDimension.width, this.currentDimension.height);
  }

  drawPeaceOfCode(){
    this.allTheCodes[5](null);
  }

  demoBackground() {

    var gradient = this.canvasCtx.createRadialGradient(this.currentDimension.halfWidth,
                                                       this.currentDimension.halfHeight,
                                                       this.currentDimension.halfWidth,
                                                       this.currentDimension.halfWidth,
                                                       this.currentDimension.halfHeight,
                                                       0,);
      gradient.addColorStop(0,"black");
      gradient.addColorStop(1,"white");
      this.canvasBgCtx.fillStyle = gradient;
      this.canvasBgCtx.fillRect(0, 0, this.currentDimension.width, this.currentDimension.height);
  }

  demoBackground2() {

    var gradient = this.canvasCtx.createRadialGradient(this.currentDimension.halfWidth,
                                                       this.currentDimension.halfHeight,
                                                       this.currentDimension.halfWidth,
                                                       this.currentDimension.halfWidth,
                                                       this.currentDimension.halfHeight,
                                                       this.currentDimension.halfWidth / 2,);
      gradient.addColorStop(0,"#505050");
      gradient.addColorStop(1,"black");
      this.canvasBgCtx.fillStyle = gradient;
      this.canvasBgCtx.fillRect(0, 0, this.currentDimension.width, this.currentDimension.height);
  }






  private setupCanvas() {
    this.canvas = document.getElementById('canvas');
    this.canvasCtx = this.canvas.getContext('2d');
    this.canvasCtx.canvas.width  = this.currentDimension.width;
    this.canvasCtx.canvas.height = this.currentDimension.height;

    this.canvasBg = document.getElementById('bg-canvas');
    this.canvasBgCtx = this.canvasBg.getContext('2d');
    this.canvasBgCtx.canvas.width  = this.currentDimension.width;
    this.canvasBgCtx.canvas.height = this.currentDimension.height;

  }

  private setupDimensions() {
    this.currentDimension = {
      width: window.innerWidth,
      height: window.innerHeight,
      halfWidth: window.innerWidth / 2,
      halfHeight: window.innerHeight / 2
    }
  }

  private setupTheCodes() {
    this.paintings.forEach((painting) => {
      this.allTheCodes.push(new Function('ctx', painting))
    });
  }

}
