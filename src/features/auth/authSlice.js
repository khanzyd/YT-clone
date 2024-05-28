import { createSlice } from "@reduxjs/toolkit";

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
      console.log("setting user");
      state.email = payload.email;
      state.name = payload.name;
      state.emailVerified = payload.emailVerified
    },
  },
});

export const { setUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
