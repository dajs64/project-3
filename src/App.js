import './App.css';
import React, { useState, useEffect } from 'react';
import Nav from "./components/Nav"
import Main from "./pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayersList from "./pages/PlayersList"
import PlayersDetail from "./pages/PlayersDetail"



function App() {
  // State
  const [players, setPlayers] = useState(null)

  // Effects
  useEffect(() => {
    getPlayers();
  }, [])

  // Getters
  function getPlayers() {
    fetch('https://www.balldontlie.io/api/v1/players')
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      setPlayers(res.data);
    })
  }

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes >
          <Route index element= {<Main />} />
          <Route path="/Playerslist/" element={<PlayersList players={players} />} />
          <Route path="/Playersdetail/:id" element={<PlayersDetail />} players={players} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;