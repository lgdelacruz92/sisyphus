import React, { useRef, useEffect } from "react";
import { gameSketch } from "./gameSketch";

interface GameCanvasProps {}

const GameCanvas: React.FC<GameCanvasProps> = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { cleanup } = gameSketch({
      width: 400,
      height: 400,
      parent: sketchRef.current as HTMLElement,
    });

    return cleanup;
  }, []);
  return <div ref={sketchRef}></div>;
};

export default GameCanvas;
