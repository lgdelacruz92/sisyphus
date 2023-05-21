import { Box, Heading } from "@chakra-ui/react";
import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <Box>
      <Heading textAlign="center" as="h3">
        {title}
      </Heading>
      <br></br>
      {children}
    </Box>
  );
};

export default Section;
