import { useEffect, useState } from "react";

export default function TrainingModal({ videos }) {
  const [videoIndex, setVideoIndex] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isBreak, setIsBreak] = useState(false);

  let currentVideo = videos[videoIndex] || {};

  useEffect(() => {
    if (!currentVideo.url || isBreak) {
      return;
    }

    const isVideoInSeconds = currentVideo.duration === "Seconds";
    const initialTimer = isVideoInSeconds
      ? parseInt(currentVideo.description)
      : 0;
    setTimer(initialTimer);

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);

          if (isVideoInSeconds) {
            setIsBreak((prev) => (prev = true));

            return 10;
          } else {
            setVideoIndex((prev) => prev + 1);
          }

          return initialTimer;
        } else {
          return prev - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [videoIndex, isBreak, currentVideo]);

  useEffect(() => {
    if (!isBreak) {
      return;
    }

    const breakInterval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(breakInterval);
          setVideoIndex((prev) => prev + 1);

          setIsBreak((prev) => (prev = false));
        } else {
          return prev - 1;
        }
      });
    }, 1000);

    return () => clearInterval(breakInterval);
  }, [isBreak]);

  function videoHandler() {
    setIsBreak((prev) => (prev = false));
    setVideoIndex((prev) => prev + 1);
  }

  return (
    <>
      <h1>Here</h1>
      {currentVideo.url ? (
        <>
          {isBreak ? (
            <p>Break time: {timer}s</p>
          ) : currentVideo.duration === "Seconds" ? (
            <p>Time left: {timer}s</p>
          ) : (
            <p>Times: {currentVideo.description}</p>
          )}
          {!isBreak && (
            <video key={currentVideo.url} width="600" loop autoPlay>
              <source src={currentVideo.url} type="video/mp4" />
            </video>
          )}
          <button onClick={videoHandler}>Next</button>
        </>
      ) : (
        <p>Congratulations, you have completed the exercises!</p>
      )}
    </>
  );
}
