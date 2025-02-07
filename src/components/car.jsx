function Car(props){
    const {brand,color,info} = props;//props -- properties in js
    const text = `Hi,I am a ${color} ${brand} car `;


    const {price,model,rating} = info;
    const details = `Extra Info: Price - ${price}, Model - ${model}, Rating - ${rating}`;

    return(
        <>
        <h4>{text}</h4>
        <h3>{details} </h3>
        </>
    )
}

export default Car//not used
// *****
//because, the car is not imported in main.jsx
//Whole components floder is EXTERN by class Apple
//It internally link the car.jsx also....

