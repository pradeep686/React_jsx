import React from "react";
import { useNavigate } from "react-router-dom";
import Colour from "../components2/useState";

export default function Api(){

    const navs = useNavigate();

    function goApi(){
        navs('/mainapi')
    }

    const buttonStyle={
        color: "orange",
        backgroundColor:"red"
    }

    return<>
    
   
  <button style={buttonStyle} onClick={goApi}>API Page</button>

    </>
}