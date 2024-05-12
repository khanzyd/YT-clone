import { createSlice } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const initialState = { 
  email: null,
  name: null,
  emailVerified: false
};

const authSlice = createSlice({
  name: "user",
  initialState: initialState,

  reducers: {
    setUser:(state,{payload}) => {
      state.email = payload.email;
      state.name = payload.name;
      state.emailVerified = payload.emailVerified
    },
  },
});

export const { setUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
