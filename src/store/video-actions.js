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
      const response = await fetch("https://localhost:7010/training");

      const data = await response.json();
      return data;
    };

    const videoData = await fetchData();
    dispatch(videoActions.allVideos(videoData));
  };
};

export const fetchSelectedVideos = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://localhost:7010/selectedVideos");

      const data = await response.json();
      return data;
    };

    const videoData = await fetchData();
    //console.log(videoData)
    dispatch(selectedVideoActions.selectedVideos(videoData));
  };
};

export const sendVideo = (fileName, url, description, duration) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://localhost:7010/selectVideo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileName, url, description, duration }),
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

export const removeVideo = (fileName) => {
  return async (dispatch) => {
    const response = await fetch("https://localhost:7010/removeSelectedVideo", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({fileName})
    });

    const resData = await response.json();
    if(resData.message === fileName){
      dispatch(selectedVideoActions.removeVideo(fileName))
    }
  };
};
