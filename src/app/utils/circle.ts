
export class Circle {

  gravity = 0.005;
  vy = -0.1;

  life;
  maxLife;

  currentDimension;

  constructor(public ctx, public x, public y) {
    this.life = 0;
    this.maxLife = 50;
    this.setupDimensions();

  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle="#FFFFFF";

    this.ctx.arc(this.x, this.y, this.currentDimension.width / 20, 0, Math.PI*2, true);
    this.ctx.closePath();
    this.ctx.fill();

  }

  update() {
    this.y += this.vy;

    this.vy -= this.gravity;

    this.life++;
  }

  isAlive() {
    return this.life < this.maxLife
  }

  private setupDimensions() {
    this.currentDimension = {
      width: window.innerWidth,
      height: window.innerHeight,
      halfWidth: window.innerWidth / 2,
      halfHeight: window.innerHeight / 2
    }

    this.x = this.currentDimension.width/2;
    this.y = this.currentDimension.height/2;
  }
}
