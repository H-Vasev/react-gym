import { configureStore } from "@reduxjs/toolkit";

import videoSlice from "./videos-slice";
import selectedVideos from "./selected-videos-slice";

const store = configureStore({
  reducer: { video: videoSlice.reducer, selectedVideos: selectedVideos.reducer },
});

export default store;
