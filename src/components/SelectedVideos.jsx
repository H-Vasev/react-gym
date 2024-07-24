import { useState } from "react";

import classes from "./Training.module.css";

export default function SelectedVideos() {
  const [selectedVideos, setSelectedVideos] = useState([]);

  return (
    <>
      <div className={classes.container}>
        <h1>Selected videos</h1>
        
          {selectedVideos.length < 1 ? <h3>You have't select any exercise yet!</h3> : <ul className={classes.videos}>
            {selectedVideos.map((item, index) => (
              <li key={index}>
                <div className={classes.description}>
                  <h2>Some name</h2>
                  <button>Select</button>
                </div>
                <video className={classes.video} width="600" controls loop>
                  <source src={item.url} type="video/mp4" />
                </video>
              </li>
            ))}
          </ul>}
        
      </div>
    </>
  );
}
