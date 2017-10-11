const PI = Math.PI;

const positionAngle = {
  1: 0,
  2: (PI / 4),
  3: (PI / 2),
  4: (3 * PI / 4),
  5: (PI),
  6: (5 * PI / 4),
  7: (3 * PI / 2),
  8: (7 * PI / 4),
}

export class Circle {
  gravity = 0.05;
  vy = 1;
  vx = 1;

  offset = 30;

  x;
  y;

  finalPosition;

  currentDimension;
  anglePosition;

  constructor(public ctx, private position, public rParent) {
    this.setupDimensions();
    this.setupPositions();
  }

  draw() {
    this.drawCircle();
    //this.drawEffect();
  }

  update() {
    this.calculateOffset();
  }

  isAlive() {
    return !this.checkIfIsAlive();
  }

  private drawCircle() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 50, 0, 2*Math.PI);
    this.ctx.strokeStyle = "white";
    this.ctx.stroke();
    this.ctx.closePath();
  }

  private getPositions() {

    this.x = this.currentDimension.halfWidth + this.rParent * Math.sin(this.anglePosition);
    this.y = this.currentDimension.halfHeight + this.rParent * -Math.cos(this.anglePosition);

  }

  private setupPositions() {
    this.anglePosition = positionAngle[this.position];

    this.getPositions();
    this.getFinalPosition();
  }

  private checkIfIsAlive() {
    switch (this.position) {
      case 1:
        //UP
        return this.y < this.finalPosition.y
      case 2:
        //UP-RIGHT
        return this.x > this.finalPosition.x && this.y < this.finalPosition.y;
      case 3:
        //RIGHT
        return this.x > this.finalPosition.x
      case 4:
        //DOWN-RIGHT
        return this.x > this.finalPosition.x && this.y > this.finalPosition.y;

      case 5:
        //DOWN
        return this.y > this.finalPosition.y
      case 6:
        //DOWN-LEFT
        return this.x < this.finalPosition.x && this.y > this.finalPosition.y;
      case 7:
        //LEFT
        return this.x < this.finalPosition.x;
      case 8:
        //UP-LEFT
        return this.x < this.finalPosition.x && this.y < this.finalPosition.y;
    }
  }

  private getFinalPosition(){
    let newY;
    let newX;
    switch (this.position) {
      case 1:
        //UP
        newX = this.x;
        newY = this.y - this.offset;
        this.finalPosition = {x:newX, y:newY}
        break;
      case 2:
        //UP-RIGHT
        newX = this.x + this.offset / 2;
        newY = this.y - this.offset / 2;
        this.finalPosition = {x:newX, y:newY}
        break;
      case 3:
        //RIGHT
        newX = this.x + this.offset;
        this.finalPosition = {x:newX, y:newY}
        break;
      case 4:
        //DOWN-RIGHT
        newX = this.x + this.offset / 2;
        newY = this.y + this.offset / 2;
        this.finalPosition = {x:newX, y:newY}
        break;
      case 5:
        //DOWN
        newY = this.y + this.offset / 2;
        this.finalPosition = {x:newX, y:newY}
        break;
      case 6:
        //DOWN-LEFT
        newX = this.x - this.offset / 2;
        newY = this.y + this.offset / 2;
        this.finalPosition = {x:newX, y:newY}
        break;
      case 7:
        //LEFT
        newX = this.x - this.offset / 2;
        this.finalPosition = {x:newX, y:newY}
        break;
      case 8:
        //UP-LEFT
        newX = this.x - this.offset / 2;
        newY = this.y - this.offset / 2;
        this.finalPosition = {x:newX, y:newY}
        break;
    }
  }

  private calculateOffset(){
    switch (this.position) {
      case 1:
        //UP
        this.y -= this.vy;
        break;
      case 2:
        //UP-RIGHT
        this.x += this.vx;
        this.y -= this.vy;
        break;
      case 3:
        //RIGHT
        this.x += this.vx;
        break;
      case 4:
        //DOWN-RIGHT
        this.x += this.vx;
        this.y += this.vy;
        break;
      case 5:
        //DOWN
        this.y += this.vy;
        break;
      case 6:
        //DOWN-LEFT
        this.x -= this.vx;
        this.y += this.vy;
        break;
      case 7:
        //LEFT
        this.x -= this.vx;
        break;
      case 8:
        //UP-LEFT
        this.x -= this.vx;
        this.y -= this.vy;
        break;
    }
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
