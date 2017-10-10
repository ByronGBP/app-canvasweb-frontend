
export class Rectangle {
  gravity = 0.05;
  vy = -10.0;

  x;
  y;

  finalPosition;

  currentDimension;

  constructor(public ctx, position) {
    this.setupDimensions();
    this.setupPositions(position);
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle="#FFFFFF";
    this.ctx.rect(this.x, this.y, this.currentDimension.sixthhWidth, this.getCurrentHight());
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.fill();
  }

  clearCanvas() {
    this.ctx.clearRect(0,0,this.currentDimension.width, this.currentDimension.height);
  }

  update() {
    this.y += this.vy;

    this.vy -= this.gravity;
  }

  isAlive() {
    return this.y > this.finalPosition;
  }

  private getCurrentHight() {
    return this.y - this.finalPosition;
  }

  private setupPositions(pos) {
    this.x = this.currentDimension.sixthhWidth * pos;
    this.y = this.currentDimension.height;

    this.finalPosition = this.currentDimension.sixthHeight * pos;
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
