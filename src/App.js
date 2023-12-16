import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import ScoreboardScreen from './pages/ScoreboardScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/scoreboard-screen/:numberOfPlayers" element={<ScoreboardScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
