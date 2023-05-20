import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { UpDownIcon } from "@chakra-ui/icons";
const About = lazy(() => import("./About/About"));
const Documentation = lazy(() => import("./Documentation/Documentation"));
const GameDisplay = lazy(() => import("./GameDisplay/GameDisplay"));

function App() {
  return (
    <Router>
      <Box p="2" px="5">
        <nav>
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Link to="/game">
                <UpDownIcon />
                <UpDownIcon />
                <UpDownIcon />
              </Link>
            </Flex>
            <Flex gap={3}>
              <Link to="/game">Game</Link>
              <Link to="/about">About</Link>
              <Link to="/documentation">Documentation</Link>
            </Flex>
          </Flex>
        </nav>
      </Box>

      <Suspense>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/" element={<GameDisplay />} />
          <Route path="/game" element={<GameDisplay />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
