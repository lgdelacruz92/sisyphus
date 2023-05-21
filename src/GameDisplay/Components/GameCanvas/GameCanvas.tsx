import React, { useRef, useEffect, useState } from "react";
import { Game } from "./GameSketch/Game";

interface GameCanvasProps {}

const GameCanvas: React.FC<GameCanvasProps> = () => {
  const sketchRef = useRef<HTMLDivElement>(null);
  const [gameOverState, setGameOverState] = useState<any>(null);

  useEffect(() => {
    const game = new Game(400, 400, sketchRef.current as HTMLElement);
    game.start();
    game.subscribe("collision-eventlistener", (props: any) => {
      if (props.name === "game-over") {
        setGameOverState(props.props);
      }
    });

    return () => {
      game.unsubscribe("collision-eventlistener");
      game.end();
    };
  }, []);
  return <div ref={sketchRef}></div>;
};

export default GameCanvas;
