import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
const PlayersDetail = (props) => {
  // Declaratoins
  const apiKey = process.env.REACT_APP_API_KEY;
  const params = useParams()
  const { players } = props;

  // State
  const [player, setPlayer] = useState(null);
  
  // Effects
  useEffect(() => {
    // NOTE: Only fetch this player if it's not in our props
    if (players) {
      const foundPlayer = players.find((p) => p.id === params.id);
      setPlayer(foundPlayer);
    } else {
      getPlayer();
    }
  }, []);
  
  // Getter
  function getPlayer() {
    fetch(`https://www.balldontlie.io/api/v1/players/${params.id}`)
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      console.log('res', res)
      setPlayer(res);
    })
  }
   
  const loaded = () => (
    <h1>
      {player.first_name}
    </h1>
  );

  const loading = () => (
    <h1>Loading...</h1>
  );
  // if coin has data, run the loaded function, otherwise, run loading
  return player ? loaded() : loading();
};
export default PlayersDetail;
