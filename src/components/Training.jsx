import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchVideoData, sendVideo } from "../store/video-actions";
import classes from "./Training.module.css";
import SelectedVideos from "./SelectedVideos";

export default function Training() {

  const dispatch = useDispatch();
  const allVideos = useSelector((state) => state.video.videos);

  useEffect(() => {
    dispatch(fetchVideoData())
  }, [dispatch])

  function handleSelectVideo(fileName, url){
    dispatch(sendVideo(fileName, url))
  }

  return (
    <>
      <SelectedVideos />
      <div className={classes.container}>
        <h1>All videos</h1>
        <ul className={classes.videos}>
          { allVideos &&  allVideos.map((item) => (
            <li key={item.fileName}>
              <div className={classes.description}>
                <h2>{item.fileName}</h2>
                <button
                  onClick={() => handleSelectVideo(item.fileName, item.url)}
                >
                  Select
                </button>
              </div>
              <video className={classes.video} width="600" controls loop>
                <source src={item.url} type="video/mp4" />
              </video>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

// export async function loader() {
//   const response = await fetch("https://localhost:7010/training");
//   const resData = await response.json();

//   return resData;
// }

// export async function action({ request, params }) {
//   const form = await request.formData();

//   const videoData = {
//     fileName: form.get("fileName"),
//     url: form.get("url")
//   }

//   await fetch("https://localhost:7010/selectVideo",{
//     method: "POST",
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify(videoData)
//   })

//   return videoData.url;
// }
