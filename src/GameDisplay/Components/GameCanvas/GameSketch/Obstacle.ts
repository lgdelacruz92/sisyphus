import P5 from "p5";
import { Entity } from "./Entity";

class Obstacle implements Entity {
  constructor(
    private x: number,
    private y: number,
    private velx: number,
    private p5: P5
  ) {}

  show(): void {
    this.p5.fill(0);
    this.p5.rect(this.x, this.y, 20, 20);
    this.p5.fill(255);
  }

  animate(): void {
    // No animation needed for obstacle
  }

  update(): void {
    this.x -= this.velx;
    if (this.x + 20 < 0) {
      this.x = this.p5.width + Math.random() * 200;
    }
  }

  collides(entity: Entity): boolean {
    return false;
  }

  getPosX(): number {
    return this.x;
  }

  setPosX(x: number): void {
    this.x = x;
  }
  addSpeed(x: number): void {
    this.velx += x;
  }
}

export { Obstacle };
