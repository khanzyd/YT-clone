import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  watchVideoInfo: {
    title : undefined,
    channelId: undefined,
    channelImg: undefined,
    channelTitle : undefined,
    channelSubscribers : undefined,
    description : undefined,
    descriptionTags : undefined,
    viewCount : undefined,
    likeCount : undefined,
    commentCount : undefined,
    publishedAt : undefined,
  },
};

const watchVideoSlice = createSlice({
    name:"watchVideo",
    initialState,
    reducers:{
        setWatchVideoInfo: (state,{payload}) => {
            state.watchVideoInfo = payload.data;
        }
    }
})

export const {setWatchVideoInfo} = watchVideoSlice.actions;
export default watchVideoSlice.reducer;
