

export class Circles {


  circles:any[] = [,,,,,,,];

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
    this.circles.forEach((elem) => {
      if (elem) {
        ended = false;
      }
    })
    return ended;
  }

  push(circle, x) {
    this.circles[x] = null;
    this.circles[x] = circle;
  }

  clearCanvas() {
    this.ctx.clearRect(0,0, this.currentDimension.width, this.currentDimension.height);
  }

  private updateCircles() {
    this.circles.map((circle) => {
      if(circle) {
        circle.update();
      }
    })
  }

   drawCircles() {
    this.circles.forEach((circle) => {
      if (circle) {
        circle.draw();
      }
    })
  }

  private checkCircles() {
    return  this.circles.map((circle, i) => {
      if (circle && !circle.isAlive()){
        this.deleteAtIndex(i);
      }
    })
  }

  private deleteAtIndex(i) {
    this.circles[i] = null;
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
