import { videoActions } from "./videos-slice";
import { selectedVideoActions } from "./selected-videos-slice";

export const popUpIsVisible = (data) => {
  return (dispatch) => {
    //console.log(data)
    dispatch(videoActions.isVisible(data))
  }
}

export const fetchVideoData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://localhost:7010/exercise/allExercises");

      const data = await response.json();
      return data;
    };
    
    const videoData = await fetchData();
    //console.log(videoData)
    dispatch(videoActions.allVideos(videoData));
  };
};

export const fetchSelectedVideos = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://localhost:7010/exercise/getSelectedVideos");

      const data = await response.json();
      return data;
    };

    const videoData = await fetchData();
    dispatch(selectedVideoActions.selectedVideos(videoData));
  };
};

export const sendVideo = (id, fileName, url, description, duration) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://localhost:7010/exercise/addSelectedExercise", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, fileName, url, description, duration }),
      });

      const data = await response.json();
      return data;
    };

    const resData = await fetchData();
    if (!resData.message) {
      dispatch(selectedVideoActions.addVideo(resData));
    }
  };
};

export const removeVideo = (id, currentFileName) => {
  return async (dispatch) => {
    const response = await fetch("https://localhost:7010/exercise/removeSelectedVideo", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(id)
    });

    const resData = await response.json();
    const fileName = resData.message;

    if(fileName === currentFileName){
      dispatch(selectedVideoActions.removeVideo(fileName))
    }
  };
};
