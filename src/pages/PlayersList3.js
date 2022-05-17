// Imports
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";

// Component
const PlayersList = ()=>{
    // Declarations
    // State
    const[state,setState] = useState([])

    // Effects
  useEffect(()=>{
      const fetchData = async()=>{
          const results = await axios ('https://www.balldontlie.io/api/v1/players')
      
          setState(results.data)
          // console.log(results.data)
          
      }
      fetchData()
  },[])
  console.log(state.data[0])



const loaded = () => 
{
    console.log(PlayersList[0])
    console.log(PlayersList[0])
    return (
        <div className="players-index">
            {PlayersList.map((player, idx) => {
                return (
                    <Link key={idx} to={`/${PlayersList}`} >
                        <h2>{PlayersList}</h2>
                    </Link>
                )
            })}
        </div>
    )
}

const loading = () => {
    return (
        <img className="loading" src="https://c.tenor.com/hlKEXPvlX48AAAAi/loading-loader.gif" alt='loading gif' />
    )
}

  return state ? loaded() : loading () (
    
    <div class="list">
<h1>PLAYERS</h1>
{/* {state.data.map((player,idx) => {
  return (
    <h2>{player.first_name}</h2>
  )

})} */}
    </div>
    
  )
}

export default PlayersList