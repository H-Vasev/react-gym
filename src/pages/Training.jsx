import { useDispatch, useSelector } from "react-redux";

import { fetchSelectedVideos } from "../store/video-actions";
import classes from "./Training.module.css";
import { useEffect } from "react";

export default function Training() {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.selectedVideos.selectedVideos);

  useEffect(() => {
    dispatch(fetchSelectedVideos());
  }, [dispatch]);


  return (
    <>
      <div className={classes.container}>
        <h1>Train</h1>

        {videos && videos.length > 0 ? (
          <ul className={classes.videos}>
            {videos.map((item) => (
              <li key={item.fileName}>
                <div className={classes.description}>
                  <h2>{item.fileName}</h2>
                  <button onClick={() => removeItemHandler(item.fileName)}>Remove</button>
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
