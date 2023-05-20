import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";

interface GameDisplayProps {}

const GameDisplay: React.FC<GameDisplayProps> = () => {
  return (
    <Center>
      <Box as="section" aria-label="Game Window">
        <Heading as="h2">Super Solopreneur</Heading>
      </Box>

      <Box as="section" aria-label="Highest Scores">
        <Heading as="h2">Highest Scores</Heading>
      </Box>
    </Center>
  );
};

export default GameDisplay;
