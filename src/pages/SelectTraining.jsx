import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchVideoData,
  popUpIsVisible,
  sendVideo,
} from "../store/video-actions";
import classes from "./SelectTraining.module.css";
import SelectedVideos from "../components/SelectedVideos";

export default function SelectTraining() {
  const dispatch = useDispatch();
  const allVideos = useSelector((state) => state.video.videos);

  useEffect(() => {
    dispatch(fetchVideoData());
  }, [dispatch]);

  function handleSelectVideo(fileName, url, description, duration) {
    dispatch(sendVideo(fileName, url, description, duration));

    const videoData = { name: fileName, isVisible: true, isSelected: true };
    dispatch(popUpIsVisible(videoData));
  }

  return (
    <>
      <SelectedVideos />
      <div className={classes.container}>
        <h1>All videos</h1>
        <ul className={classes.videos}>
          {allVideos &&
            allVideos.map((item) => (
              <li key={item.fileName}>
                <div className={classes.description}>
                  <h2>{item.fileName}</h2>
                  <button
                    onClick={() =>
                      handleSelectVideo(
                        item.fileName,
                        item.url,
                        item.description,
                        item.duration
                      )
                    }
                  >
                    Select
                  </button>
                </div>
                <p>
                  <span>{item.duration}: </span>
                  {item.description}
                </p>
                <video className={classes.video} width="600" loop autoPlay>
                  <source src={item.url} type="video/mp4" />
                </video>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
