import React from "react";
import Headboard from "./Headboard";
import Board from "./Board";
import NavBar  from "../NavBar/NavBar";

const Home = () => {
  
  return (
    <div>      
    <NavBar /> 
    <Headboard />      
    <Board />
    </div>
  );
};

export default Home;
