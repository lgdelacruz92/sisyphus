import { Box, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface DocumentationProps {}

const Documentation: React.FC<DocumentationProps> = () => {
  return (
    <Center>
      <Box maxW="70%">
        <Heading>Documentation</Heading>
        <br></br>
      </Box>
    </Center>
  );
};

export default Documentation;
