import P5 from "p5";
import boyRun from "../../json/boy-run.json";
import boyJump from "../../json/boy-jump.json";
import { Boy } from "./boy";
type GameSketchReturnType = {
  cleanup: () => void;
};

type GameSketchProps = { width: number; height: number; parent: HTMLElement };

const gameSketch = ({
  width,
  height,
  parent,
}: GameSketchProps): GameSketchReturnType => {
  const sketch = (p5: P5) => {
    let spriteSheet: any;
    let jumpSpritSheet: any;
    const runAnimation: any = [];
    const jumpAnimation: any = [];
    let boy: Boy;
    p5.preload = () => {
      spriteSheet = p5.loadImage("images/boy-run.jpg");
      jumpSpritSheet = p5.loadImage("images/boy-jump.png");
    };

    p5.setup = () => {
      p5.createCanvas(width, height).parent(parent);

      for (let i = 0; i < boyRun.frames.length; i++) {
        const image = spriteSheet.get(
          boyRun.frames[i].x,
          boyRun.frames[i].y,
          boyRun.frames[i].w,
          boyRun.frames[i].h
        );
        runAnimation.push(image);
      }

      for (let i = 0; i < boyJump.frames.length; i++) {
        const image = jumpSpritSheet.get(
          boyJump.frames[i].x,
          boyJump.frames[i].y,
          boyJump.frames[i].w,
          boyJump.frames[i].h
        );
        jumpAnimation.push(image);
      }
      boy = new Boy(runAnimation, jumpAnimation, 0, p5.height - 137, 0.2, p5);
    };
    p5.draw = () => {
      p5.background(255);
      boy.showJump();
      boy.animate();
    };
  };

  const p5 = new P5(sketch);

  return {
    cleanup: p5.remove,
  };
};

export { gameSketch };
