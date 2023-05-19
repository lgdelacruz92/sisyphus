import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
const About = lazy(() => import("./About/About"));
const Documentation = lazy(() => import("./Documentation/Documentation"));
const GameDisplay = lazy(() => import("./GameDisplay/GameDisplay"));

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/documentation">Documentation</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
        </ul>
      </nav>

      <Suspense>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/game" element={<GameDisplay />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
