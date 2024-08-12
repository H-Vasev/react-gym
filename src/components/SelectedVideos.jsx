import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "../pages/SelectTraining.module.css";
import {
  fetchSelectedVideos,
  popUpIsVisible,
  removeVideo,
} from "../store/video-actions";
import { Link } from "react-router-dom";

export default function SelectedVideos() {
  const dispatch = useDispatch();
  const videosData = useSelector(
    (state) => state.selectedVideos.selectedVideos
  );

  useEffect(() => {
    dispatch(fetchSelectedVideos());
  }, [dispatch]);

  function removeItemHandler(fileName, id) {
    dispatch(removeVideo(id, fileName));

    const data = { name: fileName, isVisible: true, isSelected: false };
    dispatch(popUpIsVisible(data));
  }

  return (
    <>
      <div className={classes.container}>
        <h1>Selected videos</h1>

        {videosData && videosData.length > 0 ? (
          <>
            <Link className={classes.button} to="/start">
              Start training
            </Link>
            <ul className={classes.videos}>
              {videosData.map((item) => (
                <li key={item.fileName}>
                  <div className={classes.description}>
                    <h2>{item.fileName}</h2>
                    <button onClick={() => removeItemHandler(item.fileName, item.id)}>
                      Remove
                    </button>
                  </div>
                  <p><span>{item.duration}: </span>{item.description}</p>
                  <video className={classes.video} width="600" loop autoPlay>
                    <source src={`https://localhost:7010${item.url}`} type="video/mp4" />
                  </video>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <h3>You have't select any exercise yet!</h3>
        )}
      </div>
    </>
  );
}
