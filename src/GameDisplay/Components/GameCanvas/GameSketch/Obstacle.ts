import P5 from "p5";
import { Entity } from "./Entity";

class Obstacle implements Entity {
  private originalVelX: number;
  private obtaclesList: string[] = [];
  private obtacleIndex: number = 0;
  constructor(
    private x: number,
    private y: number,
    private velx: number,
    private p5: P5
  ) {
    this.originalVelX = velx;
    this.obtaclesList = [
      "tax",
      "bad-hire",
      "revenue",
      "interests",
      "customer",
      "competition",
    ];
    this.obtacleIndex = Math.floor(Math.random() * this.obtaclesList.length);
  }

  show(): void {
    this.p5.fill(0);
    this.p5.textSize(16);
    this.p5.text(this.obtaclesList[this.obtacleIndex], this.x, this.y);
    this.p5.fill(255);
  }

  animate(): void {
    // No animation needed for obstacle
  }

  update(): void {
    this.x -= this.velx;
    if (this.x + 20 < 0) {
      this.x = this.p5.width + Math.random() * 500;
      this.obtacleIndex = Math.floor(Math.random() * this.obtaclesList.length);
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

  reset(): void {
    this.velx = this.originalVelX;
  }
}

export { Obstacle };
