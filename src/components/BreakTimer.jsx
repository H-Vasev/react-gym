import { useEffect, useState } from "react";

export default function BreakTimer({ isBreak, handleBreak, breakTime }) {
  const [timer, setTimer] = useState(breakTime);

  useEffect(() => {
    if (isBreak) {
      const interval = setInterval(() => {
        if (timer < 1) {
          handleBreak((prev) => (prev = false));
        } else {
          setTimer((prev) => prev - 1);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer]);

  console.log(`Break timer: ${timer}`)

  return <h2 style={{"fontSize": "3rem", "marginBottom": "5rem"}}>Break Time: {timer}</h2>;
}
