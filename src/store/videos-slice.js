import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video",
    initialState: {videos: []},
    reducers: {
        allVideos(state, action){
            state.videos = action.payload
        }
    }
})

export const videoActions = videoSlice.actions;

export default videoSlice;