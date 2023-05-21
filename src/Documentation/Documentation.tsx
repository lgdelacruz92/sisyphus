import {
  Center,
  Heading,
  Text,
  Image,
  Stack,
  Divider,
  Flex,
  Box,
  Link,
} from "@chakra-ui/react";
import React from "react";
import Section from "./Components/Section";
import { Link as ScrollLink } from "react-scroll";

interface DocumentationProps {}

const Documentation: React.FC<DocumentationProps> = () => {
  return (
    <Center>
      <Flex width="70%">
        <Box mr="10">
          <Stack>
            <Link
              as={ScrollLink}
              to="section1"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Introduction
            </Link>
            <Link
              as={ScrollLink}
              to="section2"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Scores
            </Link>
            <Link
              as={ScrollLink}
              to="section3"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Highest Scores List
            </Link>
            <Link
              as={ScrollLink}
              to="section4"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              UP_ARROW to jump
            </Link>
            <Link
              as={ScrollLink}
              to="section5"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              On game over
            </Link>
          </Stack>
        </Box>
        <Stack divider={<Divider />}>
          <Heading textAlign="center">Documentation</Heading>
          <br></br>
          <Section id="section1" title="Introduction">
            <Text textAlign="center">
              The goal of the game is avoid the obstacles as long as possible.
              The longer your run the higher your score and the faster the
              obstacles get.
            </Text>
            <Center>
              <Image src="images/intro.png"></Image>
            </Center>
          </Section>
          <Section id="section2" title="Scores">
            <Text textAlign="center">
              Scores count are above the game and updates real time
            </Text>
            <Center>
              <Image src="images/score.png"></Image>
            </Center>
          </Section>

          <Section id="section3" title="Highest Scores List">
            <Text textAlign="center">Highest scores are listed below</Text>
            <Center>
              <Image src="images/highest-scores.png"></Image>
            </Center>
          </Section>

          <Section id="section4" title="UP_ARROW to jump">
            <Text textAlign="center">
              To jump and avoid obstacles you must time the obstacle and press
              the up arrow
            </Text>
            <Center>
              <Image src="images/uparrow.jpeg"></Image>
            </Center>
          </Section>
          <Section id="section5" title="On game over">
            <Text textAlign="center">
              On game over you must enter a name associated with the score
            </Text>
            <Center>
              <Image src="images/on-game-over.png"></Image>
            </Center>
          </Section>
        </Stack>
      </Flex>
    </Center>
  );
};

export default Documentation;
