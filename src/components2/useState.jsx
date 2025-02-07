import {useState} from "react";

function Colour(){

    
    //let color = "orange";
    const [color, setColor] =useState('orange')
    //const [state, setState] = useState(initialValue);
    //state → Current value of the state
    //setState → Function to update the state
    //initialValue → Starting value of the state



    return <>
        <h1>My Fav color is {color}</h1>
        <button onClick ={  ()  => {setColor("Green")} } >Change Color</button>
        <h2>✔ useState stores values and updates the UI when changed.</h2>
    </>
}

export default Colour;