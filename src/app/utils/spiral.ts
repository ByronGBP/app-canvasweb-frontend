
let max = Math.max;
let pow = Math.pow;
let sqrt = Math.sqrt;
let  PI = Math.PI;
let sin = Math.sin;
let cos = Math.cos;

export class Spiral {

  t = 0;
  n = 8 /* shades */;
  m = 4 /* shade repetitions */;
  p = 32 /* dots on each branch */;
  r;
  beta /* branch specific */;
  gamma /* dot specific */;
  x0; y0; x1; y1;
  hue;
  t_step = 1/60;
  requestID;

  currentDimension;

  constructor(public ctx) {
    this.setupDimensions();
  }

  clearCanvas() {
    this.ctx.clearRect(0,0, this.currentDimension.width, this.currentDimension.height);
  }

  spiral() {
    this.clearCanvas();

    for(var i = 0; i < this.n * this.m; i++) {
      this.beta = i * 2 * PI/(this.n * this.m);
      this.x0 = 0;

      /* Begin the path up here */
      this.ctx.beginPath();
      this.hue = i*360/this.n;
      this.ctx.translate(this.currentDimension.halfWidth, this.currentDimension.halfHeight);
      this.ctx.rotate(this.t/3);
      /* only need to set the fillstyle once up here now */
      this.ctx.fillStyle = 'hsl(' + this.hue + ', 100%, 65%)';

      for(var j = 0; j < this.p; j++) {
        this.gamma = j*2*PI/this.p;
        this.r = max(1, pow(2*(j*(this.p - j)), 0.43) - 10);

        this.x0 += 3.4 * this.r;
        this.y0 = this.x0*sin(this.gamma + 2*this.t + this.x0/99)/5;

        /* change of coordinates */
        this.x1 = this.x0*cos(this.beta) - this.y0*sin(this.beta);
        this.y1 = this.x0*sin(this.beta) + this.y0*cos(this.beta);

        /* move it to the position of the arc */
        /* (remove this for a cool effect) */
        this.ctx.moveTo(this.x1,this.y1);
        /* setup the arc path here */
        this.ctx.arc(this.x1, this.y1, this.r, 0, 2*PI);
      }

      /* close the 1 path that now is a combination of all the arcs */
      this.ctx.closePath();
      /* fill the whole path only once now */
      this.ctx.fill();
      /*
       * reason for moving the fill out of the inner loop:
       * see https://twitter.com/loktar00/status/420369245378076672
       * (thanks!)
       */
      this.ctx.rotate(-this.t/3);
      this.ctx.translate(-this.currentDimension.halfWidth, -this.currentDimension.halfHeight);
    }

    this.t += this.t_step;
  }




  private getColor(r,g,b) {
    if (r < 51){
      r = 255;
    }

    if (g < 153){
      g = 255;
    }

    return "rgb("+r+","+g+","+b+")";
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
