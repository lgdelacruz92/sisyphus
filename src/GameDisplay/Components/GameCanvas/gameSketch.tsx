import P5 from "p5";
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
    p5.setup = () => {
      p5.createCanvas(width, height).parent(parent);
    };
    p5.draw = () => {
      p5.line(0, 0, width, height);
    };
  };

  const p5 = new P5(sketch);

  return {
    cleanup: p5.remove,
  };
};

export { gameSketch };
