import { useState } from "react";

export default function TrainingModal({ videos }) {
  const [video, setVideo] = useState(videos);

  let currentVideo = video.length > 0 ? video[0] : "";

  function videoHandler() {
    setVideo((state) => {
      let currState = [...state];
      currState.shift();
      return currState;
    });
  }

  return (
    <>
      <h1>Here</h1>
      <video key={currentVideo.url} width="600" controls loop autoPlay>
        <source src={currentVideo.url} type="video/mp4" />
      </video>
      <button onClick={videoHandler}>Next</button>
    </>
  );
}
