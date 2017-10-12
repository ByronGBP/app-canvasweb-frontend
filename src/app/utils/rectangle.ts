const positionInvert = {
  1: 8,
  2: 7,
  3: 6,
  4: 5,
  5: 4,
  6: 3,
  7: 2,
  8: 1,
}


export class Rectangle {
  gravity = 0.05;
  vy = -10.0;

  x;
  y;

  finalPosition;

  currentDimension;
  inversPosition;

  constructor(public ctx, public position) {
    this.setupDimensions();
    this.setupPositions();
  }

  draw() {
    //this.drawRectange();
    this.drawEffect();
  }

  private drawEffect() {

    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.currentDimension.ninethhWidth, this.getHightForEffect());
    this.ctx.strokeStyle = "rgba(77,166,255,0.5)";
    this.ctx.stroke();
    // this.ctx.shadowBlur=10;
    // this.ctx.shadowColor="rgba(77,166,255,0.5)";
    // //this.ctx.fillStyle = "rgba(0, 71, 179,0.5)";
    // this.ctx.fillStyle = "rgba(0,64,255,0.5)";
    var gradient = this.ctx.createRadialGradient(this.currentDimension.halfWidth,
                                                           3 * this.currentDimension.height / 4,
                                                           this.currentDimension.halfWidth,
                                                           3 * this.currentDimension.height / 4,
                                                           this.currentDimension.halfHeight,
                                                           0,);
          gradient.addColorStop(0,"rgba(0,64,255,0.5");
          gradient.addColorStop(1,"rgba(77,166,255,0.5)");
          this.ctx.fillStyle = gradient;
    this.ctx.fill();
    this.ctx.closePath();

  }

  private drawRectange() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.finalPosition, this.currentDimension.ninethhWidth, this.getHightForRectangle());
    this.ctx.strokeStyle = "white";
    this.ctx.stroke();
    this.ctx.closePath();
  }

  update() {
    this.y += this.vy;

    this.vy -= this.gravity;
  }



  isAlive() {
    return this.y > this.finalPosition;
  }

  private getHightForRectangle() {
    return this.currentDimension.height - this.y;
  }

  private getHightForEffect() {
    //Este crea un rectangulo hasta el final;
    return this.y - this.finalPosition;
  }

  private setupPositions() {
    this.inversPosition = positionInvert[this.position];

    this.x = this.currentDimension.ninethhWidth * this.inversPosition;
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
