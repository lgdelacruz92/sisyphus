import { Box, Heading } from "@chakra-ui/react";
import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id: string;
}

const Section: React.FC<SectionProps> = ({ title, children, id }) => {
  return (
    <Box id={id}>
      <Heading textAlign="center" as="h3">
        {title}
      </Heading>
      <br></br>
      {children}
    </Box>
  );
};

export default Section;
