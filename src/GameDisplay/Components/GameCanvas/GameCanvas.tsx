import React, { useRef, useEffect, useState } from "react";
import { Game } from "./GameSketch/Game";
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

interface GameCanvasProps {}

const GameCanvas: React.FC<GameCanvasProps> = () => {
  const sketchRef = useRef<HTMLDivElement>(null);
  const [gameOverState, setGameOverState] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [playerScore, setPlayerScore] = useState(0);

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

  const onFormSubmit = (event: any) => {
    console.log(event);
  };

  useEffect(() => {
    if (gameOverState) {
      setIsOpen(true);
    }
  }, [gameOverState]);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div ref={sketchRef}></div>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <form onSubmit={onFormSubmit}>
          <ModalContent>
            <ModalHeader>Game Over</ModalHeader>
            <Heading textAlign="center">
              Score {gameOverState ? gameOverState.score : ""}
            </Heading>
            <ModalCloseButton />
            <ModalBody>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button type="submit">Submit</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default GameCanvas;
