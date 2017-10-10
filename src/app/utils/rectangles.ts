

export class Rectangles {


  rectangles:any[] = [,,,,,,,];

  currentDimension;

  constructor(public ctx) {
    this.setupDimensions();
  }

  render() {
    this.clearCanvas();
    this.updateCircles();
    this.checkCircles();
    this.drawCircles();
  }

  ended() {
    var ended = true;
    this.rectangles.forEach((elem) => {
      if (elem) {
        ended = false;
      }
    })
    return ended;
  }

  push(circle, x) {
    this.rectangles[x] = null;
    this.rectangles[x] = circle;
  }

  clearCanvas() {
    this.ctx.clearRect(0,0, this.currentDimension.width, this.currentDimension.height);
  }

  private updateCircles() {
    this.rectangles.map((rectangle) => {
      if(rectangle) {
        rectangle.update();
      }
    })
  }

  private drawCircles() {
    this.rectangles.forEach((rectangle) => {
      if (rectangle) {
        rectangle.draw(this.ctx);
      }
    })
  }

  private checkCircles() {
    return  this.rectangles.map((rectangle, i) => {
      if (rectangle && !rectangle.isAlive()){
        this.deleteAtIndex(i);
      }
    })
  }

  private deleteAtIndex(i) {
    this.rectangles[i] = null;
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
