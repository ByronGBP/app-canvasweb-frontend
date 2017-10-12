
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
      gradient.addColorStop(0,"rgba(77, 148, 255, 0.5)");
      gradient.addColorStop(1,"rgba(255, 255, 255, 1)");
      this.ctx.fillStyle = gradient;
      this.ctx.fillRect(0, 0, this.currentDimension.width, this.currentDimension.height);
  }

  gradientWhiteBlack() {
    var gradient = this.ctx.createRadialGradient(this.currentDimension.halfWidth,
                                                       this.currentDimension.halfHeight,
                                                       this.currentDimension.halfWidth,
                                                       this.currentDimension.halfWidth,
                                                       this.currentDimension.halfHeight,
                                                       this.currentDimension.halfHeight / 4,);
       gradient.addColorStop(0,"rgba(0, 0, 0, 0.5)");
       gradient.addColorStop(1,"rgba(77, 148, 255, 0.9)");
      this.ctx.fillStyle = gradient;
      this.ctx.fillRect(0, 0, this.currentDimension.width, this.currentDimension.height);
  }

  gradientTenue() {
    var my_gradient = this.ctx.createLinearGradient(0, 3*this.currentDimension.height / 4, 0, this.currentDimension.height);
    my_gradient.addColorStop(0, "rgba(0,0,0,0.0)");
    my_gradient.addColorStop(1, "rgba(128, 179, 255,0.9)");
    this.ctx.fillStyle = my_gradient;
    this.ctx.fillRect(0, this.currentDimension.halfHeight, this.currentDimension.width, this.currentDimension.height);
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
