import { useState } from "react"

function Bick(){
    
    const[color,setColor] = useState("Red")

    const biks_info = {
        Year: 2024,
        Price: "1.1k",
        Milage: "65Km"
    }
    
    return <>
        <h1>My Bick's</h1>
        <p>Brand: TVS_Rider</p>
        <p>Color: {color}</p>
        <button onClick = { () => setColor("Gray")}>Click for Gray</button>
        <p>Year: {biks_info.Year}</p>
        <p>Price: {biks_info.Price}</p>
        <p>Milage: {biks_info.Milage}</p>
    </>
}

export default Bick;