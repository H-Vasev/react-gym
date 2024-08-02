import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSelectedVideos } from "../store/video-actions";
import classes from "./Training.module.css";
import TrainingModal from "../components/TrainingModal";
import TrainListItem from "../components/TrainListItem";

export default function Training() {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.selectedVideos.selectedVideos);

  const [data, setData] = useState({
    allVideos: videos,
    isStart: false,
    videoIndex: null,
    cssIndex: null,
  });

  useEffect(() => {
    dispatch(fetchSelectedVideos());
  }, [dispatch]);

  function handleStart() {
    setData((prev) => {
      return {
        ...prev,
        isStart: !prev.isStart,
      };
    });
  }

  function selectVideoHandler(index) {
    console.log(index);
    if (data.videoIndex === null) {
      setData((prev) => {
        return {
          ...prev,
          videoIndex: index,
          cssIndex: index,
        };
      });
    } else {
      const updatedVideos = [...data.allVideos];

      var currVideo = updatedVideos[data.videoIndex];
      updatedVideos.splice(data.videoIndex, 1);
      updatedVideos.splice(index, 0, currVideo);

      setData((prev) => {
        return {
          ...prev,
          allVideos: updatedVideos,
          videoIndex: null,
          cssIndex: null,
        };
      });
    }
  }

  console.log("here")

  return (
    <>
      <div className={classes.container}>
        {data.isStart && <TrainingModal videos={data.allVideos} />}
        <h1>Train</h1>
        {!data.isStart && <button onClick={handleStart}>Start</button>}
        {data.allVideos && data.allVideos.length > 0 ? (
          <ul className={classes.videos}>
            {data.allVideos.map((item, index) => (
              <TrainListItem
                key={item.fileName}
                item={item}
                index={index}
                selectVideo={selectVideoHandler}
                stateData={setData}
                cssIndex={data.cssIndex}
              />        
            ))}
          </ul>
        ) : (
          <h3>You have't select any exercise yet!</h3>
        )}
      </div>
    </>
  );
}
