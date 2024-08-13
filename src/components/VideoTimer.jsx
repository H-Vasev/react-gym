import { useEffect, useState } from "react";

export default function VideoTimer({ videoState, handleExerciseTime, handleVideoIndex }) {
    const timeLeft = videoState.duration;
  
    const [timer, setTimer] = useState(timeLeft);

    useEffect(() => {
        const interval = setInterval(() => {
            if(timer < 1){
                handleVideoIndex((prev) => prev + 1)
                handleExerciseTime(prev => prev = true)
            }else {
                setTimer((prev) => prev - 1)
            }
            
        }, 1000)

        return () => clearInterval(interval)
    }, [timer])

  return <p>Timer Left: {timer}</p>;
}
