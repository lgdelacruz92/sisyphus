import { Box, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <Center>
      <Box maxW="70%">
        <Heading>Super Solopreneur</Heading>
        <br></br>

        <Text>
          Are you ready to embark on an exhilarating journey filled with dodging
          obstacles, overcoming challenges, and conquering the unpredictable
          world of entrepreneurship? Welcome to Solopreneur Simulator, where
          you'll experience the hilarious ups and downs of being a one-person
          powerhouse in the business realm.
        </Text>
        <br></br>

        <Text>
          In this wacky game, you'll assume the role of a daring solo
          entrepreneur, navigating your way through a whimsical landscape of
          quirky obstacles. Prepare to dodge tax monsters lurking in the
          shadows, sidestep pesky employers trying to hire you, and outmaneuver
          revenue traps set by mischievous competitors. Oh, and let's not forget
          the unexpected twists and turns brought by economic turmoil – it's
          like a rollercoaster ride for your business dreams!
        </Text>
        <br></br>

        <Text>
          Your mission, should you choose to accept it, is to keep your solo
          enterprise afloat while laughing in the face of adversity. Embrace the
          challenge of juggling multiple roles, from CEO to janitor, as you
          strive to build a successful empire on your own terms. Will you thrive
          under pressure or succumb to the chaos? It's time to find out!
        </Text>
        <br></br>

        <Text>
          But fear not, intrepid entrepreneur! Along the way, you'll encounter
          helpful power-ups like "Eureka Moments" and "Networking Ninjas" to
          give you an edge. And if you're feeling overwhelmed, take a breather
          and unwind in the "Coffee Break Oasis" or seek inspiration from the
          "Motivational Monkey."
        </Text>
        <br></br>

        <Text>
          With Solopreneur Simulator, we've turned the daunting world of
          business into a hilarious and entertaining adventure. Prepare to
          laugh, strategize, and dodge your way to triumph, all while
          discovering the joy and absurdity of being a solo entrepreneur.
        </Text>
        <br></br>

        <Text>
          So, gear up, grab your imaginary briefcase, and let the epic journey
          of Solopreneur Simulator begin! Remember, in this game, failure is
          just a stepping stone to success – and a reason for a good laugh!
        </Text>
        <br></br>
        <Text>
          Disclaimer: Solopreneur Simulator is purely for entertainment
          purposes. Real-life entrepreneurship may involve additional
          challenges, and we recommend consulting real experts for financial and
          business advice. Let the fun begin!
        </Text>
      </Box>
    </Center>
  );
};

export default About;
