import { useRef, useState } from "react";
import classes from "../pages/Training.module.css";
import ButtonPrimary from "./ButtonPrimary";

export default function TrainListItem({
  index,
  item,
  selectVideo,
  cssIndex,
  stateData,
}) {
  const [change, setChange] = useState(false);
  const inputRef = useRef();

  function selectVideoHandler(index) {
    selectVideo(index);
  }

  function handleChangeDuration() {
    if (inputRef.current) {
      stateData((prev) => {
        const updateVideos = [...prev.allVideos];
        let video = { ...updateVideos[index] };
        video.duration = inputRef.current.value;
        updateVideos[index] = video;

        return {
          ...prev,
          allVideos: updateVideos,
        };
      });
    }
    setChange((prev) => !prev);
  }

  return (
    <>
      <li className={cssIndex === index ? classes.selected : ""}>
        <div className={classes["description-container"]}>
          <h2>{item.fileName}</h2>
          <div className={classes.description}>
            <div>
              <span>{item.description}: </span>
              {change ? (
                <input ref={inputRef} defaultValue={item.duration}/>
              ) : (
                <span>
                  {inputRef.current ? inputRef.current.value : item.duration}
                </span>
              )}
            </div>
            <ButtonPrimary onClick={handleChangeDuration}>Change</ButtonPrimary>
          </div>
        </div>
        <video
          onClick={() => selectVideoHandler(index)}
          className={classes.video}
          width="600"
          loop
          autoPlay
        >
          <source src={`https://localhost:7010${item.url}`} type="video/mp4" />
        </video>
      </li>
    </>
  );
}
