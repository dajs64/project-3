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
    const [players, setPlayers] = useState("null");
    //function to fetch coin data
    const getPlayers = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        setPlayers(data);
    };
    // useEffect to run getCoin when component mounts
    useEffect(() => {
        getPlayers();
    }, []);
    // loaded function for when data is fetched
    const loaded = () => {
        return (
            <div>
                <h1>The value of one {players.asset_id_base} is ${players.rate} in {players.asset_id_quote}</h1>
      </div>
    );
  };
  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };
  // if coin has data, run the loaded function, otherwise, run loading
  return players ? loaded() : loading();
};
export default PlayersDetail;