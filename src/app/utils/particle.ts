
export class Particle {
  // Establish starting positions and velocities
  x;
  y;
  gravity = 0.65;
  vx = Math.random() * 20 - 10;
  vy = Math.random() * -25;

  life;
  maxLife;

  currentDimension;

  constructor() {
    this.life = 0;
    this.maxLife = 50;
    this.setupDimensions();

  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle="rgb(163, 235, 255)";

    ctx.arc(this.x, this.y, 5, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();

  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    this.vy += this.gravity;

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
