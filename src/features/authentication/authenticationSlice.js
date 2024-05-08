import { createSlice } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const initialState = {email:""};

const authenticationSlice = createSlice({
  name: "user",
  initialState:initialState,
  
  reducers: {
    loginUser: (state, { payload }) => {
      state.email = payload.email
    },
    logoutUser: (state) => {
      signOut(auth);
      state.email = "";
    },
  },
});

export const { loginUser, logoutUser } = authenticationSlice.actions;
export default authenticationSlice.reducer;
