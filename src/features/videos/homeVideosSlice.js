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
      console.log(payload.videos);
      state.videos = payload.videos;
      state.nextPageToken = payload.nextPageToken;
      console.log(state.videos);
    }
  },
});

export const {setHomeVideos} = homeVideosSlice.actions;
export default homeVideosSlice.reducer;

