import { useState } from "react";
import BreakTimer from "./BreakTimer";
import VideoTimer from "./VideoTimer";

export default function TrainingModal({ videos }) {
  const [videoIndex, setVideoIndex] = useState(0);
  const [isBreak, setIsBreak] = useState(false);

  let currentVideo = videos[videoIndex] || {};

  const breakTime = 10;

  function getBreakHandler() {
    setIsBreak((prev) => (prev = true));
    setVideoIndex((prev) => prev + 1);
  }

  console.log("Training model")

  return (
    <>
      <h1>Here</h1>
      {currentVideo.url ? (
        <>
          {isBreak ? (
            <BreakTimer isBreak={isBreak} handleBreak={setIsBreak} breakTime={breakTime}/>
          ) : currentVideo.duration === "Seconds" ? (
            <VideoTimer videoState={currentVideo} handleExerciseTime={setIsBreak} handleVideoIndex={setVideoIndex} />
          ) : (
            <p>Times: {currentVideo.description}</p>
          )}
          {!isBreak && (
            <video key={currentVideo.url} width="600" loop autoPlay>
              <source src={currentVideo.url} type="video/mp4" />
            </video>
          )}
          <button onClick={getBreakHandler}>Get Break</button>
        </>
      ) : (
        <p>Congratulations, you have completed the exercises!</p>
      )}
    </>
  );
}
