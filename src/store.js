import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import loadingReducer from "./features/loading";

export default configureStore({
  reducer: {
    user: authReducer,
    loading: loadingReducer,
  },
});
