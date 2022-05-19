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
    return <img className="loading" src="https://i.gifer.com/origin/f3/f3a9e5213f627d35642165d824199e82_w200.webp" alt='loading gif' />
  }
  
  return (
    <div>
      <div className='players'>
      </div>
      {players.map((player, idx) => {
        return (
          <Link key={idx} to={`/Playersdetail/${player.id}`} >
            <div className='list'>
            <ul >{player.first_name} {player.last_name}</ul>
            </div>
          </Link>
        )
      })}
    </div>
  )
};

export default PlayersList;