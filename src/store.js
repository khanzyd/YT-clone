import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import loadingReducer from "./features/loading";
import homeVideosReducer from "./features/videos/homeVideosSlice"
import sidebarReducer from "./features/sidebarSlice"

let store = configureStore({
  reducer: {
    user: authReducer,
    loading: loadingReducer,
    homeVideos: homeVideosReducer,
    sidebar: sidebarReducer,
  },
});

export default store;