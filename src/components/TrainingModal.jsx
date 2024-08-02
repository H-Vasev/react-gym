import { useEffect, useState } from "react";

export default function TrainingModal({ videos }) {
  const [video, setVideo] = useState(videos);
  const [count, setCount] = useState(0);

  let currentVideo = video.length > 0 ? video[0] : "";

  let remainder = parseInt(currentVideo.description);

  useEffect(() => {
    if (currentVideo !== "" && currentVideo.duration === "Seconds") {
      setCount(remainder);

      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev === 1) {
            setVideo((state) => {
              let currState = [...state];
              currState.shift();
              return currState;
            });

            return remainder;
          } else {
            return prev - 1;
          }
        });
      }, 1000);
      
      return () => clearInterval(interval);
    }
  }, [video, currentVideo]);

  function videoHandler() {
    setVideo((state) => {
      let currState = [...state];
      currState.shift();
      return currState;
    });

    setCount(5);
  }

  return (
    <>
      <h1>Here</h1>
      {currentVideo !== "" && currentVideo.duration === "Seconds" && (
        <p>Time left: {count}</p>
      )}
      {currentVideo !== "" && currentVideo.duration !== "Seconds" && (
        <p>Times: {currentVideo.description}</p>
      )}
      {currentVideo !== "" ? (
        <video key={currentVideo.url} width="600" loop autoPlay>
          <source src={currentVideo.url} type="video/mp4" />
        </video>
      ) : (
        <p>Congratulation you already complete the exercises!</p>
      )}
      <button onClick={videoHandler}>Next</button>
    </>
  );
}
