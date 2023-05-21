import { Center, Heading, Text, Image, Stack, Divider } from "@chakra-ui/react";
import React from "react";
import Section from "./Components/Section";

interface DocumentationProps {}

const Documentation: React.FC<DocumentationProps> = () => {
  return (
    <Center>
      <Stack maxW="70%" divider={<Divider />}>
        <Heading textAlign="center">Documentation</Heading>
        <br></br>
        <Section title="Introduction">
          <Text textAlign="center">
            The goal of the game is avoid the obstacles as long as possible. The
            longer your run the higher your score and the faster the obstacles
            get.
          </Text>
          <Center>
            <Image src="images/intro.png"></Image>
          </Center>
        </Section>
        <Section title="Scores">
          <Text textAlign="center">
            Scores count are above the game and updates real time
          </Text>
          <Center>
            <Image src="images/score.png"></Image>
          </Center>
        </Section>
      </Stack>
    </Center>
  );
};

export default Documentation;
