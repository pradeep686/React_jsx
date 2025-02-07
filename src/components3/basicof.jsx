import { useEffect, useState } from "react";

function Basic() {
  const [count, setCount] = useState(3);

  // ✅ Runs on every render
  useEffect(() => {
    console.log("Component rendered!");
  });

  // ✅ Runs only once when component mounts
  useEffect(() => {
    console.log("Runs only once on mount");
  }, []); // Empty dependency array means it runs only once

  // ✅ Runs when `count` changes
  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]);

  // ✅ Runs every second (setInterval example)
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Timer running...");
    }, 1000);

    return () => {
      clearInterval(interval); // Cleanup: stops the timer when the component unmounts
    };
  }, [count]); // Runs only once when the component mounts

}
