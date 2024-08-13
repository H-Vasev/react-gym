import { useState } from "react";
import BreakTimer from "./BreakTimer";
import VideoTimer from "./VideoTimer";
import ButtonPrimary from "./ButtonPrimary";

export default function TrainingModal({ videos }) {
  const [videoIndex, setVideoIndex] = useState(0);
  const [isBreak, setIsBreak] = useState(false);

  let currentVideo = videos[videoIndex] || {};

  const breakTime = 10;

  function getBreakHandler() {
    setIsBreak((prev) => (prev = true));
    setVideoIndex((prev) => prev + 1);
  }

  return (
    <>
      <h1>Here</h1>
      {currentVideo.url ? (
        <>
          {isBreak ? (
            <BreakTimer isBreak={isBreak} handleBreak={setIsBreak} breakTime={breakTime}/>
          ) : currentVideo.description === "Seconds" ? (
            <VideoTimer videoState={currentVideo} handleExerciseTime={setIsBreak} handleVideoIndex={setVideoIndex} />
          ) : (
            <p>Times: {currentVideo.duration}</p>
          )}
          {!isBreak && (
            <video key={currentVideo.url} width="600" loop autoPlay>
              <source src={`https://localhost:7010${currentVideo.url}`} type="video/mp4" />
            </video>
          )}
          <ButtonPrimary onClick={getBreakHandler}>Get Break</ButtonPrimary>
        </>
      ) : (
        <p>Congratulations, you have completed the exercises!</p>
      )}
    </>
  );
}
