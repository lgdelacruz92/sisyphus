import { Box, Center, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import GameCanvas from "./Components/GameCanvas";

interface GameDisplayProps {}

const GameDisplay: React.FC<GameDisplayProps> = () => {
  return (
    <Center>
      <Stack alignItems="center">
        <Box as="section" aria-label="Game Window">
          <Heading as="h2">Super Solopreneur</Heading>
          <Box aria-label="Game Canvas">
            <GameCanvas />
          </Box>
        </Box>

        <Box as="section" aria-label="Highest Scores">
          <Heading as="h2">Highest Scores</Heading>
        </Box>
      </Stack>
    </Center>
  );
};

export default GameDisplay;
