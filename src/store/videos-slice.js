import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: { videos: [], popUpData: { name: "", isVisible: false, isSelected: false } },
  reducers: {
    allVideos(state, action) {
      state.videos = action.payload;
      state.popUpData = { name: "", isVisible: false, isSelected: false };
    },
    isVisible(state, action) {
      const data = action.payload
      state.popUpData = {name: data.name, isVisible: data.isVisible, isSelected: data.isSelected}

      state.videos = state.videos;
    },
  },
});

export const videoActions = videoSlice.actions;

export default videoSlice;
