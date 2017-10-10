
export class Gradients {

  private currentDimension;

  constructor(private ctx) {
    this.setupDimensions();
  }

  gradientBlackWhite() {

    var gradient = this.ctx.createRadialGradient(this.currentDimension.halfWidth,
                                                       this.currentDimension.halfHeight,
                                                       this.currentDimension.halfWidth,
                                                       this.currentDimension.halfWidth,
                                                       this.currentDimension.halfHeight,
                                                       0,);
      gradient.addColorStop(0,"black");
      gradient.addColorStop(1,"white");
      this.ctx.fillStyle = gradient;
      this.ctx.fillRect(0, 0, this.currentDimension.width, this.currentDimension.height);
  }

  gradientWhiteBlack() {
    var gradient = this.ctx.createRadialGradient(this.currentDimension.halfWidth,
                                                       this.currentDimension.halfHeight,
                                                       this.currentDimension.halfWidth,
                                                       this.currentDimension.halfWidth,
                                                       this.currentDimension.halfHeight,
                                                       this.currentDimension.halfWidth / 2,);
      gradient.addColorStop(0,"#505050");
      gradient.addColorStop(1,"black");
      this.ctx.fillStyle = gradient;
      this.ctx.fillRect(0, 0, this.currentDimension.width, this.currentDimension.height);
  }

  clearCanvas() {
    this.ctx.clearRect(0,0, this.currentDimension.width, this.currentDimension.height);
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
