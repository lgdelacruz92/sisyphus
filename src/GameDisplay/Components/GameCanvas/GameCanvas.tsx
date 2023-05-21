import { useCallback, useEffect, useRef, useState } from "react";
import { Game } from "./GameSketch/Game";
import GameOverModal from "../GameOverModal";

interface GameCanvasProps {
  onScoreSubmit: ({ name, score }: { name: string; score: number }) => void;
}

const GameCanvas: React.FC<GameCanvasProps> = ({ onScoreSubmit }) => {
  const sketchRef = useRef<HTMLDivElement>(null);
  const [gameState, setGameState] = useState<any>(null);
  console.log(gameState);
  const handleModalClose = () => {
    setGameState(null);
  };

  const handleModalSubmit = (name: string) => {
    onScoreSubmit({ name, score: gameState.score });
    handleModalClose();
  };

  const handleCollisionEvent = useCallback(
    (props: any) => {
      if (props.name === "game-over") {
        setGameState(props.props);
      }
    },
    [setGameState]
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

  return (
    <>
      <div ref={sketchRef}></div>
      <GameOverModal
        isOpen={gameState !== null}
        onClose={handleModalClose}
        score={gameState ? gameState.score : 0}
        onSubmit={handleModalSubmit}
      />
    </>
  );
};

export default GameCanvas;
