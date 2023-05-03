import React from "react";
import Headboard from "./Headboard";
import Board from "./Board";
import Programs from "./Programs";
import NavBar  from "../NavBar/NavBar";
import Footer  from "../Footer/Footer";

const Home = () => {
  
  return (
    <div>      
    <NavBar /> 
    <Headboard />      
    <Board />
    <Footer />   
    </div>
  );
};

export default Home;
