import { HostListener } from '@angular/core';

import { Painting } from '../models/painting.model'

import { Particle } from './particle'
import { Particles } from './particles'
import { Circle } from './circle'
import { Circles } from './circles'
import { Gradients } from './gradients'

export class Canvas {

  allTheCodes: Function[] = [];

  particles:Particles
  circles:Circles;
  gradients:Gradients;


  currentDimension;

  canvasCtx;
  canvasBgCtx;
  canvasDrumsCtx;
  canvasPianoCtx;

  private _intervalParticle;
  private _intervalPiano;

  animations:any[] = [];

  constructor(private paintings: string[]) {
    this.setupDimensions();
    this.setupTheCodes();
    this.setupCanvas();

    this.circles = new Circles(this.canvasPianoCtx);
    this.gradients = new Gradients(this.canvasDrumsCtx);
  }

  demoParticle() {
    if (this._intervalParticle) {
      clearInterval(this._intervalParticle);
    }

    this.particles = new Particles(this.canvasCtx, 20);

    this._intervalParticle = setInterval(() => {
      if(!this.particles.ended()) {
        this.particles.render();
      }else {
        clearInterval(this._intervalParticle);
        this._intervalParticle = null;
      }
    }, 10);
  }

  demoCircle(x) {
    if (this._intervalPiano) {
      clearInterval(this._intervalPiano);
    }

    var posX = this.currentDimension.width / 5 * x;

    var newCircle = new Circle(this.canvasPianoCtx, posX, this.currentDimension.height / 4 * 3);
    this.circles.push(newCircle, x - 1);

    this._intervalPiano = setInterval(() => {
      if(!this.circles.ended()) {
        this.circles.render();
      }else {
        clearInterval(this._intervalPiano);
        this._intervalPiano = null;
      }
    }, 10);
  }

  demoDrums(x) {
    switch (x) {
      case 1:
        this.gradients.gradientBlackWhite();
        break;
      case 2:
        this.gradients.gradientWhiteBlack();
    }
  }

  clearCanvasDrums() {
    this.gradients.clearCanvas();
  }

  private setupCanvas() {
    let canvas:any = document.getElementById('canvas');
    this.canvasCtx = canvas.getContext('2d');
    this.canvasCtx.canvas.width  = this.currentDimension.width;
    this.canvasCtx.canvas.height = this.currentDimension.height;

    let canvasPiano:any = document.getElementById('piano-canvas');
    this.canvasPianoCtx = canvasPiano.getContext('2d');
    this.canvasPianoCtx.canvas.width  = this.currentDimension.width;
    this.canvasPianoCtx.canvas.height = this.currentDimension.height;

    let canvasDrums:any = document.getElementById('drums-canvas');
    this.canvasDrumsCtx = canvasDrums.getContext('2d');
    this.canvasDrumsCtx.canvas.width  = this.currentDimension.width;
    this.canvasDrumsCtx.canvas.height = this.currentDimension.height;

    let canvasBg:any = document.getElementById('bg-canvas');
    this.canvasBgCtx = canvasBg.getContext('2d');
    this.canvasBgCtx.canvas.width  = this.currentDimension.width;
    this.canvasBgCtx.canvas.height = this.currentDimension.height;
    this.canvasBgCtx.fillStyle = '#000000';
    this.canvasBgCtx.fillRect(0, 0, this.currentDimension.width, this.currentDimension.height);
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
