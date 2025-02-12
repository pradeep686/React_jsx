import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){

        // hook navigate
    const nav = useNavigate();

    function afterLogin(){
        nav('/dashboard')        
    }

    return <>
        <button onClick={afterLogin}>Login</button>
    </>

}