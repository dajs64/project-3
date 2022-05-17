// Imports
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";

// Component
const PlayersList = (props) => {
  // Declarations
  const { players } = props;
  // State
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (players) {
      setIsLoading(false);
    }
  }, [players])
  
  console.log('players', players);
  
  if (isLoading) {
    return <img className="loading" src="https://c.tenor.com/hlKEXPvlX48AAAAi/loading-loader.gif" alt='loading gif' />
  }
  
  return (
    <div>
      <h1>PLAYERS</h1>
      {players.map((player, idx) => {
        return (
          <Link key={idx} to={`/Playersdetail/${player.id}`} >
            <h2>{player.first_name} {player.last_name}</h2>
          </Link>
        )
      })}
    </div>
  )
};

export default PlayersList;