import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSelectedVideos } from "../store/video-actions";
import classes from "./Training.module.css";
import TrainingModal from "../components/TrainingModal";

export default function Training() {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.selectedVideos.selectedVideos);

  const [isStart, setIsStart] = useState(false);

  const [allVideos, setAllVideos] = useState(videos);
  const [videoIndex, setVideoIndex] = useState(null);


  useEffect(() => {
    dispatch(fetchSelectedVideos());
  }, [dispatch]);

  function handleStart(){
    setIsStart((prev) => !prev);
  }

  function selectVideoHandler(index){
    console.log(index)
    if(videoIndex === null){
      setVideoIndex(index);
    }else {
      const updatedVideos = [...allVideos]
      const currVideo = updatedVideos[index];

      const temp = updatedVideos[videoIndex];

      updatedVideos[videoIndex] = currVideo
      updatedVideos[index] = temp

      setAllVideos(updatedVideos)
      setVideoIndex(null)
    }
  }

  return (
    <>
      <div className={classes.container}>
        {isStart && <TrainingModal videos={allVideos}/>}
        <h1>Train</h1>
        {!isStart && <button onClick={handleStart}>Start</button>}
        {allVideos && allVideos.length > 0 ? (
          <ul className={classes.videos}>
            {allVideos.map((item, index) => (
              <li key={item.fileName} onClick={() => selectVideoHandler(index)}>
                <div className={classes.description}>
                  <h2>{item.fileName}</h2>
                </div>
                <video className={classes.video} width="600" loop autoPlay>
                  <source src={item.url} type="video/mp4" />
                </video>
              </li>
            ))}
          </ul>
        ) : (
          <h3>You have't select any exercise yet!</h3>
        )}
      </div>
    </>
  );
}
