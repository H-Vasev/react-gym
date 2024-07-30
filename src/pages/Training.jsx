import { useDispatch, useSelector } from "react-redux";

import { fetchSelectedVideos } from "../store/video-actions";
import classes from "./Training.module.css";
import { useEffect, useState } from "react";
import TrainingModal from "../components/TrainingModal";

export default function Training() {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.selectedVideos.selectedVideos);

  useEffect(() => {
    dispatch(fetchSelectedVideos());
  }, [dispatch]);

  function startTrainingHandler() {
    console.log("yes");
  }

  return (
    <>
      <div className={classes.container}>
        <TrainingModal videos={videos}/>
        <h1>Train</h1>
        <button onClick={startTrainingHandler}>Start</button>
        {videos && videos.length > 0 ? (
          <ul className={classes.videos}>
            {videos.map((item) => (
              <li key={item.fileName}>
                <div className={classes.description}>
                  <h2>{item.fileName}</h2>
                </div>
                <video className={classes.video} width="600" controls loop>
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
