import { Box, Center, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import GameContainer from "./Components/GameContainer";

interface GameDisplayProps {}

const GameDisplay: React.FC<GameDisplayProps> = () => {
  return (
    <Center>
      <Stack alignItems="center">
        <Box as="section" aria-label="Game Window">
          <Heading textAlign="center" as="h2">
            Super Solopreneur
          </Heading>
          <Box aria-label="Game Canvas">
            <GameContainer />
          </Box>
        </Box>

        <Box as="section" aria-label="Highest Scores">
          <Heading textAlign="center" as="h2">
            Highest Scores
          </Heading>
        </Box>
      </Stack>
    </Center>
  );
};

export default GameDisplay;
