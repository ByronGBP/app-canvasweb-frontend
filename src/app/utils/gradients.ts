
export class Gradients {

  private currentDimension;

  private gradientBlackWhiteBG;
  private gradientWhiteBlackBG;
  private gradientTenueBG;

  constructor(private ctx) {
    this.setupDimensions();
    this.setupBackgrounds();
  }

  gradientBlackWhite() {

      this.ctx.fillStyle = this.gradientBlackWhiteBG;
      this.ctx.fillRect(0, 0, this.currentDimension.width, this.currentDimension.height);
  }

  gradientWhiteBlack() {

      this.ctx.fillStyle = this.gradientWhiteBlackBG;
      this.ctx.fillRect(0, 0, this.currentDimension.width, this.currentDimension.height);
  }

  gradientTenue() {

    this.ctx.fillStyle = this.gradientTenueBG;
    this.ctx.fillRect(0, this.currentDimension.halfHeight, this.currentDimension.width, this.currentDimension.height);
  }

  clearCanvas() {
    this.ctx.clearRect(0,0, this.currentDimension.width, this.currentDimension.height);
  }

  private setupBackgrounds() {
    this.gradientTenueBG = this.ctx.createLinearGradient(0, 3*this.currentDimension.height / 4, 0, this.currentDimension.height);
    this.gradientTenueBG.addColorStop(0, "rgba(0,0,0,0.0)");
    this.gradientTenueBG.addColorStop(1, "rgba(128, 179, 255,0.9)");

    this.gradientWhiteBlackBG = this.ctx.createRadialGradient(this.currentDimension.halfWidth,
                                                       this.currentDimension.halfHeight,
                                                       this.currentDimension.halfWidth,
                                                       this.currentDimension.halfWidth,
                                                       this.currentDimension.halfHeight,
                                                       this.currentDimension.halfHeight / 4,);
     this.gradientWhiteBlackBG.addColorStop(0,"rgba(0, 0, 0, 0.5)");
     this.gradientWhiteBlackBG.addColorStop(1,"rgba(77, 148, 255, 0.9)");

     this.gradientBlackWhiteBG = this.ctx.createRadialGradient(this.currentDimension.halfWidth,
                                                        this.currentDimension.halfHeight,
                                                        this.currentDimension.halfWidth,
                                                        this.currentDimension.halfWidth,
                                                        this.currentDimension.halfHeight,
                                                        0,);
     this.gradientBlackWhiteBG.addColorStop(0,"rgba(77, 148, 255, 0.5)");
     this.gradientBlackWhiteBG.addColorStop(1,"rgba(255, 255, 255, 1)");
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
