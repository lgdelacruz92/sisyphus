import React, { useRef, useEffect } from "react";
import { Game } from "./GameSketch/Game";

interface GameCanvasProps {}

const GameCanvas: React.FC<GameCanvasProps> = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const game = new Game(400, 400, sketchRef.current as HTMLElement);

    game.start();

    return () => {
      game.end();
    };
  }, []);
  return <div ref={sketchRef}></div>;
};

export default GameCanvas;
