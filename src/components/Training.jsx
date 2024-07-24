import { useEffect, useState } from "react";
import { useActionData, useLoaderData, useSubmit } from "react-router-dom";

import classes from "./Training.module.css";
import SelectedVideos from "./SelectedVideos";

export default function Training() {
  const [selectedVideos, setSelectedVideos] = useState([]);
  const submit = useSubmit();

  const loader = useLoaderData();

  useEffect(() => {
    setSelectedVideos(loader);
  }, []);
  
  function handleSelectVideo(id, url) {
    const form = new FormData();
    form.append("id", id);
    form.append("url", url);
    submit(form, {method: "POST"});
  }

  return (
    <>
      <SelectedVideos />
      <div className={classes.container}>
        <h1>All videos</h1>
        <ul className={classes.videos}>
          {selectedVideos.map((item) => (
            <li key={item.fileName}>
              <div className={classes.description}>
                <h2>Some name</h2>
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

export async function loader() {
  const response = await fetch("https://localhost:7010/training");
  const resData = await response.json();

  return resData;
}

export async function action({ request, params }) {
  console.log(request);
}
