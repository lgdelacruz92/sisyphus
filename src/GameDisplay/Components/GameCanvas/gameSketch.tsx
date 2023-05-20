import P5 from "p5";
import boyRun from "../../json/boy-run.json";
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
    const runAnimation: any = [];
    let boy: Boy;
    p5.preload = () => {
      spriteSheet = p5.loadImage("images/boy-run.jpg");
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
      boy = new Boy(runAnimation, 0, p5.height - 137, 0.3, p5);
    };
    p5.draw = () => {
      p5.background(255);
      boy.show();
      boy.animate();
    };
  };

  const p5 = new P5(sketch);

  return {
    cleanup: p5.remove,
  };
};

export { gameSketch };
