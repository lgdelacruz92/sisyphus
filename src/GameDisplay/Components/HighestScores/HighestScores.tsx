import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

interface HighestScoresProps {
  scores: any[];
}

const HighestScores: React.FC<HighestScoresProps> = ({ scores }) => {
  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>The highest scores by name</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Score</Th>
            </Tr>
          </Thead>
          <Tbody>
            {scores.map((scoreDetail, index) => {
              return (
                <Tr key={`score-detail-${index}`}>
                  <Td>{scoreDetail.name}</Td>
                  <Td>{scoreDetail.score}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default HighestScores;
