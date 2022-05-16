import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import PlayersList from "./pages/PlayersList"
import PlayersDetail from "./pages/PlayersDetail"
import Main from "./pages/Main";
import Nav from "./components/Nav"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes >
        <Route path="/" element={<App />} >
        <Route index element= {<Main />} />
        <Route path="/Playerslist/" element={<PlayersList />} />
        <Route path="/Playersdetail/" element={<PlayersDetail />} />
        </Route>
      </Routes>
      <App />
    </Router>
    <App />
  </React.StrictMode>
  
);