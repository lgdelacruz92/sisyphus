import P5 from "p5";

export class Obstacle {
  image: P5.Image;
  x: number;
  y: number;
  p5: P5;
  vel: number;
  constructor(image: P5.Image, x: number, y: number, vel: number, p5: P5) {
    this.image = image;
    this.p5 = p5;
    this.x = x + this.p5.width;
    this.y = y;
    this.vel = vel;
  }

  update() {
    this.x -= this.vel;
    if (this.x + 20 < 0) {
      this.x = this.p5.width + 20;
    }
  }

  show() {
    this.p5.fill(0);
    this.p5.rect(this.x, this.y, 20, 20);
    this.p5.fill(255);
    // this.p5.image(this.image, this.x, this.y);
  }
}
