import P5 from "p5";
type AnimationType = Array<P5.Image>;
class Boy {
  x: number;
  animation: AnimationType;
  y: number;
  w: number;
  len: number;
  speed: number;
  index: number;
  p5: P5;
  constructor(
    animation: AnimationType,
    x: number,
    y: number,
    speed: number,
    p5: P5
  ) {
    this.x = x;
    this.y = y;
    this.animation = animation;
    this.w = this.animation[0].width;
    this.len = this.animation.length;
    this.speed = speed;
    this.index = 0;
    this.p5 = p5;
  }

  show() {
    let index = this.p5.floor(this.index) % this.len;
    this.p5.image(this.animation[index], this.x, this.y);
  }

  animate() {
    this.index += this.speed;
  }
}

export { Boy };
