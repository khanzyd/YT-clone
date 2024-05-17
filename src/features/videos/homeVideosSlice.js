import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  videos:[],
  nextPageToken:""
};

const homeVideosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setHomeVideos:(state,{payload})=>{
      console.log('setting videos');
      state.videos = payload.videos;
      state.nextPageToken = payload.nextPageToken;
    }
  },
});

export const {setHomeVideos} = homeVideosSlice.actions;
export default homeVideosSlice.reducer;

