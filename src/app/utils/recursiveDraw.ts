

export class RecursiveFace {

  private end;
  private currentDimension;

  constructor(private ctx, private x, private y, private d) {
    this.setupDimensions();

    this.ctx.fillStyle = "rgba(0,0,0,1)";
    this.ctx.fillRect(0, 0, this.currentDimension.width, this.currentDimension.height);
  }

  drawRecursive() {

    this.drawItem(this.x, this.y, this.d);

  }

  clearCanvas() {
    console.log("wtf");
    this.ctx.clearRect(0,0, this.currentDimension.width, this.currentDimension.height);
  }

  private drawItem(x,y,d) {

    let newCircle = new RecursiveItemCircle(this.ctx, x, y, d);
    newCircle.draw();
    if (d > 20) {

      let newD = d * 0.25;

      this.drawItem(x + newD, y, newD);
      this.drawItem(x - newD, y, newD);
    }
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

class RecursiveItemCircle {

  constructor(private ctx, public x, public y, public d) {

  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.d / 2, 0, 2*Math.PI);
    this.ctx.strokeStyle = "white";
    this.ctx.stroke();
    this.ctx.closePath();

  }
}
