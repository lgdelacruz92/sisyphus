import { useCallback, useEffect, useRef, useState } from "react";
import { Game } from "./GameSketch/Game";

interface GameCanvasProps {
  onGameOver: (props: any) => void;
}

const GameCanvas: React.FC<GameCanvasProps> = ({ onGameOver }) => {
  const sketchRef = useRef<HTMLDivElement>(null);

  const handleCollisionEvent = useCallback(
    (props: any) => {
      if (props.name === "game-over") {
        onGameOver(props.props);
      }
    },
    [onGameOver]
  );

  useEffect(() => {
    const game = new Game(400, 400, sketchRef.current as HTMLElement);
    game.start();
    game.subscribe("collision-eventlistener", handleCollisionEvent);

    return () => {
      game.unsubscribe("collision-eventlistener");
      game.end();
    };
  }, [handleCollisionEvent]);

  return <div ref={sketchRef}></div>;
};

export default GameCanvas;
