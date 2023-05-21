import { Boy } from "./Boy";
import { Obstacle } from "./Obstacle";
import P5 from "p5";

import boyRun from "../../../json/boy-run.json";
import boyJump from "../../../json/boy-jump.json";

class Game {
  private boy: Boy | null;
  private obstacle: Obstacle | null;
  private initialized: boolean;
  private gameStarted: boolean;
  private p5: P5 | null;

  constructor(
    private width: number,
    private height: number,
    private parent: HTMLElement
  ) {
    this.boy = null;
    this.obstacle = null;
    this.initialized = false;
    this.gameStarted = false;
    this.p5 = null;
  }

  private setupEntities(
    p5: P5,
    boyRunSpriteSheet: any,
    jumpSpriteSheet: any
  ): void {
    const runAnimation: any[] = [];
    for (let i = 0; i < boyRun.frames.length; i++) {
      const image = boyRunSpriteSheet.get(
        boyRun.frames[i].x,
        boyRun.frames[i].y,
        boyRun.frames[i].w,
        boyRun.frames[i].h
      );
      runAnimation.push(image);
    }

    const jumpAnimation: any[] = [];
    for (let i = 0; i < boyJump.frames.length; i++) {
      const image = jumpSpriteSheet.get(
        boyJump.frames[i].x,
        boyJump.frames[i].y,
        boyJump.frames[i].w,
        boyJump.frames[i].h
      );
      jumpAnimation.push(image);
    }

    if (!this.initialized) {
      this.boy = new Boy(
        runAnimation,
        jumpAnimation,
        0,
        p5.height - 137,
        0.2,
        p5
      );
      this.obstacle = new Obstacle(runAnimation[0], 0, p5.height - 40, 4, p5);
      this.initialized = true;
    }
  }

  private drawEntities(p5: P5): void {
    if (this.initialized && this.boy && this.obstacle && this.gameStarted) {
      p5.background(255);

      this.boy.show();
      this.boy.animate();
      this.boy.update();

      this.obstacle.show();
      this.obstacle.update();
    }
  }

  public start(): void {
    const sketch = (p5: P5) => {
      let boyRunSpriteSheet: any;
      let jumpSpriteSheet: any;
      p5.preload = () => {
        boyRunSpriteSheet = p5.loadImage("images/boy-run.jpg");
        jumpSpriteSheet = p5.loadImage("images/boy-jump.png");
      };
      p5.setup = () => {
        p5.createCanvas(this.width, this.height).parent(this.parent);
        this.setupEntities(p5, boyRunSpriteSheet, jumpSpriteSheet);
      };

      p5.draw = () => {
        this.drawEntities(p5);
      };
    };

    this.p5 = new P5(sketch);
    this.gameStarted = true;
  }

  public end(): void {
    this.p5?.remove();
    this.gameStarted = false;
  }
}

export { Game };
