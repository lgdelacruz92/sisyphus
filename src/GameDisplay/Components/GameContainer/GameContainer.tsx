import { useState } from "react";
import GameCanvas from "../GameCanvas";
import GameOverModal from "../GameOverModal";

const GameContainer: React.FC = () => {
  const [gameState, setGameState] = useState<any>(null);

  const handleModalClose = () => {
    setGameState(null);
  };

  const handleModalSubmit = (name: string) => {
    setGameState(null);
  };

  const handleGameOver = (gameState: any) => {
    // setGameState(gameState);
  };

  return (
    <>
      <GameCanvas onGameOver={handleGameOver} />
      <GameOverModal
        isOpen={gameState !== null}
        onClose={handleModalClose}
        score={gameState ? gameState.score : 0}
        onSubmit={handleModalSubmit}
      />
    </>
  );
};

export default GameContainer;
