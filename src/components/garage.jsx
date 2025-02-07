import Car from './car'
import Apple from './leranClass'


//send like a arguments brand
function Garage(){


    const brand = 'Punch EV';
    //const color = 'black';

    const carInfo = {
        price : "12lak", model: "2024" , rating : "5 Star"
    }

    const appleinfo = {
        type:"fruit",amount:"100"
    }

    const carList = [
        1,2,3,4,5,6
    ]

    
    return (
        <>
        <h3>Best and compact segment</h3>
        <Car brand={brand} color={'Black'} info = {carInfo} />
        
        <Apple appleinfo = {appleinfo}/>

        <ul>
            {/* each element want unique id*/}
            {/* so, index of numbers taken as <key styleName={}></key>*/}
        {carList.map( (e,index)=> <p key={index}>{e}</p>)}
        </ul>

        </>
    )
}


export default Garage