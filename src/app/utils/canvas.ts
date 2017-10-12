import { HostListener } from '@angular/core';

import { Painting } from '../models/painting.model'

import { Particle } from './particle'
import { Particles } from './particles'
import { Rectangle } from './rectangle'
import { Rectangles } from './rectangles'
import { Gradients } from './gradients'
import { LineSinus } from './lineSinus'
import { LineCosinus } from './lineCosinus'
import { Lines } from './lines'
import { Spiral } from './spiral'
import { Circle } from './circle'
import { Circles } from './circles'
import { RecursiveFace } from './recursiveDraw'

declare var Fireworks:any;

export class Canvas {

  allTheCodes: Function[] = [];

  particles:Particles
  rectangles:Rectangles;
  gradients:Gradients;
  lines:Lines;
  spiral:Spiral;
  circles:Circles;
  recursiveFace:RecursiveFace;

  fireworks;

  currentDimension;

  canvasCtx;
  canvasBgCtx;
  canvasDrumsCtx;
  canvasGuitarCtx;
  canvasPianoCtx;
  canvasRecursiveCtx;

  private _intervalParticle;
  private _intervalPiano;
  private _intervalGuitar;
  private _intervalBg;

  animations:any[] = [];

  constructor(private paintings: string[]) {
    this.setupDimensions();
    //this.setupTheCodes();
    this.setupCanvas();

    this.spiral = new Spiral(this.canvasBgCtx);
    this.rectangles = new Rectangles(this.canvasPianoCtx);
    this.gradients = new Gradients(this.canvasDrumsCtx);
    this.lines = new Lines(this.canvasGuitarCtx);
    this.circles = new Circles(this.canvasPianoCtx);
    this.fireworks = new Fireworks();
    this.recursiveFace = new RecursiveFace(this.canvasRecursiveCtx,
                                          this.currentDimension.width/2,
                                          this.currentDimension.height/2,
                                          this.currentDimension.height / 2);
  }

  demoRecursive() {

    this.recursiveFace.drawRecursive();

  }

  demoBg() {
    if (this._intervalBg) {
      this.lines.clearCanvas();
      clearInterval(this._intervalBg);
    }

    this._intervalBg = setInterval(() => {
      this.spiral.spiral();
    }, 55);

    this.spiral.spiral();
  }

  demoCircle(x) {

    let rParent = 2.5 * this.currentDimension.halfHeight / 4;

    if (this._intervalPiano) {
      clearInterval(this._intervalPiano);
    }

    let newCircle = new Circle(this.canvasPianoCtx, x, rParent);
    this.circles.push(newCircle, x);
    this._intervalPiano = setInterval(() => {
      if(!this.circles.ended()) {
        this.circles.render();
      }else {
        clearInterval(this._intervalPiano);
        this._intervalPiano = null;
      }
    }, 10);

  }

  demoRectangle(x) {
    if (this._intervalPiano) {
      clearInterval(this._intervalPiano);
    }

    let newRectangle = new Rectangle(this.canvasPianoCtx, x);
    this.rectangles.push(newRectangle, x);
    this._intervalPiano = setInterval(() => {
      if(!this.rectangles.ended()) {
        this.rectangles.render();
      }else {
        clearInterval(this._intervalPiano);
        this._intervalPiano = null;
      }
    }, 10);
  }

  demoLines() {
    this.lines.push();
    this.canvasGuitarCtx.beginPath();

    if (this._intervalGuitar) {
      this.lines.clearCanvas();
      clearInterval(this._intervalGuitar);
    }

    this._intervalGuitar = setInterval(() => {
      if(!this.lines.ended()) {
        //cool effect
        this.lines.clearCanvas();
        this.lines.render();
      }else {
        clearInterval(this._intervalGuitar);
        this._intervalGuitar = null;
        this.lines.clearCanvas();
      }
    }, 5);
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

  demoDrums(x) {
    switch (x) {
      case 1:
        this.gradients.gradientBlackWhite();
        break;
      case 2:
        this.gradients.gradientWhiteBlack();
        break;
      case 3:
        this.gradients.gradientTenue();
        break;
    }
  }

  clearCanvasDrums() {
    this.gradients.clearCanvas();
  }

  clearCanvasFace() {
    console.log('clear!');
    this.recursiveFace.clearCanvas();
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

    let canvasGuitar:any = document.getElementById('guitar-canvas');
    this.canvasGuitarCtx = canvasGuitar.getContext('2d');
    this.canvasGuitarCtx.canvas.width  = this.currentDimension.width;
    this.canvasGuitarCtx.canvas.height = this.currentDimension.height;

    let canvasBg:any = document.getElementById('bg-canvas');
    this.canvasBgCtx = canvasBg.getContext('2d');
    this.canvasBgCtx.canvas.width  = this.currentDimension.width;
    this.canvasBgCtx.canvas.height = this.currentDimension.height;

    let canvasRecursive:any = document.getElementById('bg-canvas');
    this.canvasRecursiveCtx = canvasRecursive.getContext('2d');
    this.canvasRecursiveCtx.canvas.width  = this.currentDimension.width;
    this.canvasRecursiveCtx.canvas.height = this.currentDimension.height;
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
