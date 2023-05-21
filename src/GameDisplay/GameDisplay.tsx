import { Box, Center, Heading, Spacer, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import GameCanvas from "./Components/GameCanvas";
import HighestScores from "./Components/HighestScores/HighestScores";

interface GameDisplayProps {}

const GameDisplay: React.FC<GameDisplayProps> = () => {
  const [highestScores, setHighestScores] = useState<any[]>([]);

  return (
    <Center>
      <Stack alignItems="center">
        <Box as="section" aria-label="Game Window">
          <Heading textAlign="center" as="h2">
            Super Solopreneur
          </Heading>
          <Box aria-label="Game Canvas">
            <GameCanvas
              onScoreSubmit={({ name, score }) => {
                highestScores.push({ name, score });
                highestScores.sort((a, b) => b.score - a.score);
                setHighestScores([...highestScores]);
              }}
            />
            <Text textAlign="center">press ENTER to restart</Text>
          </Box>
        </Box>
        <Spacer />
        <Spacer />
        <Spacer />
        <Box as="section" aria-label="Highest Scores">
          <Heading textAlign="center" as="h2">
            Highest Scores
          </Heading>
          <HighestScores scores={highestScores} />
        </Box>
      </Stack>
    </Center>
  );
};

export default GameDisplay;
