import { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(1);
  const [timerState, setTimerState] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    console.log("Screen Rendered!");

    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }, []); // Run only once when the component mounts

  function updateCount() {
    setCount((prev) => {
      let newCount = prev + 1;
      return newCount > 10 ? 1 : newCount;
    });
  }

  useEffect(() => {
    let clock;
    if (timerState) {
      clock = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(clock); // Cleanup previous interval when `timerState` changes
  }, [timerState]);

  function startTimer() {
    setTimerState(true);
  }

  function stopTimer() {
    setTimerState(false);
  }

  return (
    <>
      <h3>Click the Button to Render the Page!</h3>
      <h2>{count} times Rendered...</h2>
      <button onClick={updateCount}>Render again</button>

      <h2>Timer: {timer} Seconds</h2>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </>
  );
}

export default Timer;
