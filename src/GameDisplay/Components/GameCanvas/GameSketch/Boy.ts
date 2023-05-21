import P5 from "p5";
import { Entity } from "./Entity";

class Boy implements Entity {
  private g: number;
  private index: number;
  private vely: number;
  private yOffset: number;
  private originalY: number;
  private originalVelx: number;
  constructor(
    private runAnimation: any[],
    private jumpAnimation: any[],
    private x: number,
    private y: number,
    private velx: number,
    private p5: P5
  ) {
    this.g = 0.5;
    this.index = 0;
    this.vely = 0;
    this.yOffset = 137;
    this.originalY = y;
    this.originalVelx = velx;
  }

  show(): void {
    // Implementation for rendering boy
    if (this.y + this.vely < this.p5.height - this.yOffset) {
      this.vely += this.g;
      this.y += this.vely;
      this.p5.image(this.jumpAnimation[0], this.x, this.y);
    } else {
      let index = this.p5.floor(this.index) % this.runAnimation.length;
      this.p5.image(this.runAnimation[index], this.x, this.y);
    }
  }

  animate(): void {
    this.index += this.velx;
  }

  update(): void {
    if (this.p5.keyIsDown(this.p5.UP_ARROW) && this.y > this.p5.height - 150) {
      this.vely = -12;
    }
  }

  collides(entity: Entity) {
    return (
      entity.getPosX() < this.x + 50 && Math.abs(this.y - this.originalY) < 20
    );
  }

  getPosX(): number {
    return this.x;
  }

  setPosX(x: number): void {}

  addSpeed(x: number): void {
    this.velx += x;
  }

  reset(): void {
    this.g = 0.5;
    this.index = 0;
    this.vely = 0;
    this.yOffset = 137;
    this.velx = this.originalVelx;
  }
}

export { Boy };
