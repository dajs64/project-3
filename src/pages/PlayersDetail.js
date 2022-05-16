import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
const PlayersDetail = (props) => {
    // Our api key from coinapi.io
    const apiKey = process.env.REACT_APP_API_KEY;
    const params = useParams()
    // console.log(params)
    // Grabbing the Currency symbol from the URL Param
    const symbol = params.symbol;
    // Using the other two variables to create our URL
    const url = `https://www.balldontlie.io/api/v1/${symbol}/USD?apikey=${apiKey}`;
    //state to hold the coin data
    const [player, setPlayer] = useState("null");
    //function to fetch coin data
    const getPlayer = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        setPlayer(data);
    };
    // useEffect to run getCoin when component mounts
    useEffect(() => {
        getPlayer();
    }, []);
    // loaded function for when data is fetched
    const loaded = () => {
        return (
            <div>
                <h1>The value of one {player.asset_id_base} is ${player.rate} in {player.asset_id_quote}</h1>
      </div>
    );
  };
  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };
  // if coin has data, run the loaded function, otherwise, run loading
  return player ? loaded() : loading();
};
export default PlayersDetail;