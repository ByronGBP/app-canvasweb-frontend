
export class Rectangle {
  gravity = 0.05;
  vy = -10.0;

  x;
  y;

  finalPosition;

  currentDimension;

  constructor(public ctx, public position) {
    this.setupDimensions();
    this.setupPositions();
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle="#FFFFFF";
    this.ctx.rect(this.x, this.y, this.currentDimension.ninethhWidth, this.getCurrentHight());
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.fill();
  }

  update() {
    this.y += this.vy;

    this.vy -= this.gravity;
  }

  isAlive() {
    return this.y > this.finalPosition;
  }

  private getCurrentHight() {
    //Este crea un rectangulo hasta el final;
    //return this.y - this.finalPosition;
    return this.currentDimension.height - this.y;
  }

  private setupPositions() {
    this.x = this.currentDimension.ninethhWidth * this.position;
    this.y = this.currentDimension.height;

    this.finalPosition = this.currentDimension.ninethHeight * this.position;
  }

  private setupDimensions() {
    this.currentDimension = {
      width: window.innerWidth,
      height: window.innerHeight,
      halfWidth: window.innerWidth / 2,
      halfHeight: window.innerHeight / 2,
      ninethHeight: window.innerHeight / 10,
      ninethhWidth: window.innerWidth / 10,
    }
  }
}
