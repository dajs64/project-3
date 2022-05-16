import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios"

const playerList = ()=>{
  const[state,setState] = useState([])
  useEffect(()=>{
      const fetchData = async()=>{
          const results = await axios ('https://www.balldontlie.io/api/v1/players')
      
          setState(results.data)
          console.log(results.data)
          
      }
      fetchData()
  },[])
  return (
    <h1>TESTE PLAYERS</h1>
  )
}