import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import loadingReducer from "./features/loading";
import homeVideosReducer from "./features/videos/homeVideosSlice"

let store = configureStore({
  reducer: {
    user: authReducer,
    loading: loadingReducer,
    homeVideos: homeVideosReducer,
  },
});

export default store;