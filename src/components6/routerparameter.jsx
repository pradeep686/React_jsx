import React from "react";
import { useParams } from "react-router-dom";

export default function Users(){

    
    const {id} = useParams()

        return <>
        <h1>User Profile Page</h1>
        <h3>User ID: <b>{id}</b></h3>
        </>

}