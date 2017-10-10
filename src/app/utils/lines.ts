import { LineSinus } from './lineSinus'
import { LineCosinus } from './lineCosinus'

export class Lines {


  lines:any[] = [];

  currentDimension;

  constructor(public ctx) {
    this.setupDimensions();
  }

  render() {
    this.clearCanvas();
    this.updateLines();
    this.checkLines();
    this.drawLines();
  }

  ended() {
    return this.lines.length === 0;
  }

  push() {
    let newLine = this.getNewLine();
    this.lines.push(newLine);
  }

  private getNewLine() {
    let newHeight = this.getRandomHeight();
    if (newHeight % 2 === 0) {return new LineSinus(this.ctx, newHeight);}
    return new LineCosinus(this.ctx, newHeight);
  }

  private getRandomHeight() {
    var offset = Math.floor(Math.random() * 100);
    if (offset % 2 === 0) { offset *= -1; }

    return Math.floor(this.currentDimension.halfHeight + offset);
  }

  clearCanvas() {
    this.ctx.clearRect(0,0, this.currentDimension.width, this.currentDimension.height);
  }

  private updateLines() {
    this.lines.map((line) => {
      if(line) {
        line.update();
      }
    })
  }

  private drawLines() {
    this.lines.forEach((line) => {
      if (line) {
        line.draw(this.ctx);
      }
    })
  }

  private checkLines() {
    return  this.lines.map((line, i) => {
      if (line && !line.isAlive()){
        this.deleteAtIndex(i);
      }
    })
  }

  private deleteAtIndex(i) {
    this.lines.splice(i,1);
  }

  private setupDimensions() {
    this.currentDimension = {
      width: window.innerWidth,
      height: window.innerHeight,
      halfWidth: window.innerWidth / 2,
      halfHeight: window.innerHeight / 2,
      sixthHeight: window.innerHeight / 6,
      sixthhWidth: window.innerWidth / 6,
    }
  }
}
