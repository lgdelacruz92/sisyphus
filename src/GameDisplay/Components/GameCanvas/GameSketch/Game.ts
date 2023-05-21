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
  private gameOver = false;
  private score = 0;

  private evenListeners: any[] = [];
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
      this.obstacle = new Obstacle(p5.width, p5.height - 40, 4, p5);
      this.initialized = true;
      this.publishEvent({ name: "game-started" });
    }
  }

  private drawEntities(p5: P5): void {
    if (
      !this.gameOver &&
      this.initialized &&
      this.boy &&
      this.obstacle &&
      this.gameStarted
    ) {
      p5.background(255);
      this.boy.show();

      this.boy.animate();
      this.obstacle.show();
    }
  }

  private drawScore(p5: P5): void {
    p5.fill(0);
    p5.textSize(32);
    p5.text(`Score: ${Math.floor(this.score)}`, p5.width / 2 - 70, 40);
    p5.fill(255);
  }

  private updateGame(p5: P5): void {
    if (this.gameOver) {
      if (p5.keyIsDown(p5.ENTER)) {
        this.gameOver = false;
        this.gameStarted = true;
        this.initialized = true;
        this.boy?.reset();
        this.obstacle?.reset();
        this.obstacle?.setPosX(p5.width);
        this.publishEvent({ name: "game-started" });
      }
      return;
    }
    if (this.initialized && this.boy && this.obstacle && this.gameStarted) {
      if (this.boy.collides(this.obstacle)) {
        this.publishEvent({
          name: "collision",
          props: { body1: this.boy, body2: this.obstacle },
        });
        this.publishEvent({
          name: "game-over",
          props: { score: Math.floor(this.score) },
        });
        this.gameOver = true;
        this.gameStarted = false;
        this.score = 0;
      }

      this.boy?.update();
      this.obstacle?.update();
      this.score += 0.01;
      this.boy?.addSpeed(this.score / 1000);
      this.obstacle?.addSpeed(this.score / 1000);
    }
  }

  public subscribe(id: string, callback: (props: any) => void): void {
    this.evenListeners.push({ id, callback });
  }

  public unsubscribe(id: string): void {
    const eventIndex = this.evenListeners.findIndex((event) => event.id === id);
    this.evenListeners.splice(eventIndex, 1);
  }

  private publishEvent({ name, props }: { name: string; props?: object }) {
    this.evenListeners.forEach(({ id, callback }) => callback({ name, props }));
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
        this.drawScore(p5);
        this.updateGame(p5);
      };
    };

    this.p5 = new P5(sketch);
    this.gameStarted = true;
  }

  public end(): void {
    this.publishEvent({ name: "game-ended" });
    this.p5?.remove();
    this.gameStarted = false;
  }
}

export { Game };
