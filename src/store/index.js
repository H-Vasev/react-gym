import { configureStore } from "@reduxjs/toolkit";

import videoSlice from "./videos-slice";
import selectedVideos from "./selected-videos-slice";
import userSlice from "./user-slice";

const store = configureStore({
  reducer: { video: videoSlice.reducer, selectedVideos: selectedVideos.reducer, user: userSlice.reducer},
});

export default store;
