import { useRef, useState } from "react";
import classes from "../pages/Training.module.css";

export default function TrainListItem({ index, item, selectVideo, cssIndex }) {
  const [change, setChange] = useState(false);
  const inputRef = useRef();

  if (inputRef.current) {
    console.log(inputRef.current.value);
  }
  function selectVideoHandler(index) {
    selectVideo(index);
  }

  function handleChangeDuration() {
    setChange((prev) => !prev);
  }

  return (
    <>
      <li className={cssIndex === index ? classes.selected : ""}>
        <div className={classes["description-container"]}>
          <h2>{item.fileName}</h2>
          <div className={classes.description}>
            <div>
              <span>{item.duration}: </span>
              {change ? (
                <input ref={inputRef} />
              ) : (
                <span>
                  {inputRef.current ? inputRef.current.value : item.description}
                </span>
              )}
            </div>
            <button onClick={handleChangeDuration}>Change</button>
          </div>
        </div>
        <video
          onClick={() => selectVideoHandler(index)}
          className={classes.video}
          width="600"
          loop
          autoPlay
        >
          <source src={item.url} type="video/mp4" />
        </video>
      </li>
    </>
  );
}
