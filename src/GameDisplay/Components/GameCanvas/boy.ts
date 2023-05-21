import P5 from "p5";
type AnimationType = Array<P5.Image>;
class Boy {
  x: number;
  animation: AnimationType;
  jumpAnimation: AnimationType;
  y: number;
  w: number;
  len: number;
  speed: number;
  index: number;
  p5: P5;
  vel: number;
  g: number;
  constructor(
    animation: AnimationType,
    jumpAnimation: AnimationType,
    x: number,
    y: number,
    speed: number,
    p5: P5
  ) {
    this.x = x;
    this.y = y;
    this.animation = animation;
    this.jumpAnimation = jumpAnimation;
    this.w = this.animation[0].width;
    this.len = this.animation.length;
    this.speed = speed;
    this.index = 0;
    this.p5 = p5;
    this.vel = 0;
    this.g = 0.5;
  }

  show() {
    if (this.y + this.vel < this.p5.height - 144) {
      this.vel += this.g;
      this.y += this.vel;
      this.showJump();
    } else {
      this.showRun();
    }
  }

  showRun() {
    let index = this.p5.floor(this.index) % this.len;
    this.p5.image(this.animation[index], this.x, this.y);
  }

  showJump() {
    this.p5.image(this.jumpAnimation[0], this.x, this.y);
  }

  animate() {
    this.index += this.speed;
  }

  update() {
    if (this.p5.keyIsDown(this.p5.UP_ARROW) && this.y > this.p5.height - 150) {
      this.vel = -12;
    }
  }
}

export { Boy };
