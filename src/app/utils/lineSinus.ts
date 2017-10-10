
export class LineSinus {

  xAxis;
  yAxis;
  units;

  posX;
  posY;

  life;
  maxLife;

  currentDimension;

  constructor(private ctx) {
    this.setupDimensions();

    this.yAxis = 0;
    this.xAxis = this.currentDimension.halfHeight;
    this.units = 25;

    this.life = 0;
    this.maxLife = this.currentDimension.width;

    this.posX = 0;
    this.posY = Math.sin(this.posX);

    this.ctx.moveTo(this.yAxis, this.units * this.posY + this.xAxis);

  }

  isAlive() {
    return this.life < this.maxLife;
  }

  clearCanvas() {
    this.ctx.clearRect(0,0, this.currentDimension.width, this.currentDimension.height);
  }


  draw() {

    this.ctx.lineTo(this.life, this.units * this.posY + this.xAxis);
    this.ctx.strokeStyle = 'black';
    this.ctx.fillStyle = 'white';
    this.ctx.fill();
    this.ctx.stroke();

  }

  y = 0;
  vy = 0.5

  update() {
    this.y += this.vy;

    this.posX = (-this.yAxis + this.life)/this.units - this.y;
    this.posY = Math.sin(this.posX);

    this.life += 10;
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
