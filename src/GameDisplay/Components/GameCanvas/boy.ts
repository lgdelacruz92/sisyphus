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
  }

  showRun() {
    let index = this.p5.floor(this.index) % this.len;
    this.p5.image(this.animation[index], this.x, this.y);
  }

  showJump() {
    let index = this.p5.floor(this.index) % this.jumpAnimation.length;
    this.p5.image(this.jumpAnimation[index], this.x, this.y);
  }

  animate() {
    this.index += this.speed;
  }
}

export { Boy };
