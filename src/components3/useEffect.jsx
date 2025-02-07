import { useEffect , useState} from "react";

function Timer(){

    const [count, setCount] = useState(1);


    useEffect(  ()  =>{
        console.log('Screen Rendered!')
        maxCount()

        setTimeout( ()  => {
            setTime(   (previousState) => {
                return previousState+1
        })
    }
    ,1000)


    },[count])


    function maxCount(){
        if(count>10){
            setCount(1);
        }
    }

   

    function updateCount(){
        setCount(  (previousState)  =>   { return previousState+1}   )
    }


    const [timerState, upTimer] = useState(false);
    const [timer, timeCount] = useState(0);

    useEffect(  ()  =>  {
        
        let clock;
        if(timerState){
            clock = setInterval(  ()   =>   {
           timeCount( (previousState)  => previousState+1)
           },1000) 
        }

           return () => clearInterval(clock); // Cleanup previous interval when `timerState` changes
        }, [timerState]);

 

    function setTimerON(){
        upTimer(true);
    }
    
    return <>
            <h3>Click the Button to Render the Page!</h3>

            <h2>{count} times Rendered...</h2>
            <button  onClick={updateCount}>Render again</button>

            <h2>Timer: {timer} Seconds</h2>
           <button onClick={ setTimerON }>Start Timer</button>
    </>

}



export default Timer;