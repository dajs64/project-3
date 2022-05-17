import './App.css';
import React, { useState, useEffect } from 'react';
import Nav from "./components/Nav"
import Main from "./pages/Main";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import PlayersList from "./pages/PlayersList"
import PlayersDetail from "./pages/PlayersDetail"



function App() {
  const [players, setPlayers] = useState(null)

function getPlayers() {
  fetch('https://www.balldontlie.io/api/v1/players')
  .then((res) => res.json())
  .then((res) => setPlayers(res.results))
}

useEffect(() => {
   getPlayers();
}, [])

console.log('players', players)
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes >
          <Route index element= {<Main />} />
          <Route path="/Playerslist/" element={<PlayersList />} />
          <Route path="/Playersdetail/" element={<PlayersDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;