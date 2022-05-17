import './App.css';
import React, { useState } from 'react';
import Nav from "./components/Nav"
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import PlayersList from "./pages/PlayersList"
import PlayersDetail from "./pages/PlayersDetail"



function App() {

function getPlayers() {
  const [players, setPlayers] = useState(null)
  fetch('https://www.balldontlie.io/api/v1/players')
  .then((res) => res.json())
  .then((res) => setPlayers(res.results))
}

useEffect(() => {
   usePlayers();
}, [])

  return (
    <div className="App">
       <Nav />
      <Routes >
        <Route path="/" element={<App />} >
        <Route index element= {<Main />} />
        <Route path="/Playerslist/" element={<PlayersList />} />
        <Route path="/Playersdetail/" element={<PlayersDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
