import { createSlice } from "@reduxjs/toolkit";

const selectedVideos = createSlice({
  name: "selectedVideos",
  initialState: { selectedVideos: [] },
  reducers: {
    selectedVideos(state, action) {
      state.selectedVideos = action.payload.selectedVideos;
    },
    addVideo(state, action) {
      const newItem = action.payload;
      state.selectedVideos.push(newItem);
    },
    removeVideo(state, action){
        const fileName = action.payload;
        state.selectedVideos = state.selectedVideos.filter(id => id.fileName !== fileName)
    }
  },
});

export const selectedVideoActions = selectedVideos.actions;

export default selectedVideos;
