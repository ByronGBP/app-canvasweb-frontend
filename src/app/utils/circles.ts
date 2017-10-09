import { Circle } from './circle'

export class Circles {


  circles:any[] = [];

  currentDimension;

  constructor(public ctx) {
    this.setupDimensions();
  }

  render() {
    this.clearCanvas();
    this.updateParticles();
    this.checkParticles();
    this.drawParticles();
  }

  ended() {
    return this.circles.length === 0;
  }

  push(circle) {
    this.circles.push(circle);
  }

  clearCanvas() {
    this.ctx.clearRect(0,0, this.currentDimension.width, this.currentDimension.height);
  }

  private updateParticles() {
    this.circles.map((circle) => {
      circle.update();
    })
  }

  private drawParticles() {
    this.circles.forEach((circle) => {
      circle.draw(this.ctx);
    })
  }

  private checkParticles() {
    return  this.circles.map((circle, i) => {
      if (!circle.isAlive()){
        this.deleteAtIndex(i);
      }
    })
  }

  private deleteAtIndex(i) {
    this.circles.splice(i,1);
  }

  private setupDimensions() {
    this.currentDimension = {
      width: window.innerWidth,
      height: window.innerHeight,
      halfWidth: window.innerWidth / 2,
      halfHeight: window.innerHeight / 2
    }
  }
}
