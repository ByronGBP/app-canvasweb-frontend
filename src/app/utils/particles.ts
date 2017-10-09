import { Particle } from './particle'

export class Particles {


  particles:any[] = [];

  currentDimension;

  constructor(public ctx, public nParticles) {
    this.setupDimensions();
    this.createTheParticles();
  }

  render() {
    this.clearCanvas();
    this.updateParticles();
    this.checkParticles();
    this.drawParticles();
  }

  ended() {
    return this.particles.length === 0;
  }

  push(particle) {
    this.particles.push(particle);
  }

  clearCanvas() {
    this.ctx.clearRect(0,0, this.currentDimension.width, this.currentDimension.height);
  }

  private updateParticles() {
    this.particles.map((particle) => {
      particle.update();
    })
  }

  private drawParticles() {
    this.particles.forEach((particle) => {
      particle.draw(this.ctx);
    })
  }

  private checkParticles() {
    return  this.particles.map((particle, i) => {
      if (!particle.isAlive()){
        this.deleteAtIndex(i);
      }
    })
  }

  private deleteAtIndex(i) {
    this.particles.splice(i,1);
  }

  private setupDimensions() {
    this.currentDimension = {
      width: window.innerWidth,
      height: window.innerHeight,
      halfWidth: window.innerWidth / 2,
      halfHeight: window.innerHeight / 2
    }
  }

  private createTheParticles() {
    for (var i = 0; i < this.nParticles; i++){
      this.push(new Particle());
    }
  }

}
