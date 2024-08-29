import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  watchVideoInfo: {
    title : undefined,
    channelId: undefined,
    channelImg: undefined,
    channelTitle : undefined,
    channelSubscribers : undefined,
    videoId : undefined,
    description : undefined,
    descriptionTags : undefined,
    viewCount : undefined,
    likeCount : undefined,
    commentCount : undefined,
    publishedAt : undefined,
    comments : [],
  },
};

const watchVideoSlice = createSlice({
    name:"watchVideo",
    initialState,
    reducers:{

      setWatchVideoInfo: (state,{payload}) => {
        state.watchVideoInfo = { ...state.watchVideoInfo, ...payload.data };
        console.log(state.watchVideoInfo);
        
      },

      setComments : (state,{payload}) => {
        state.watchVideoInfo = {...state.watchVideoInfo , comments:payload}
      }
    }
})

export const {setWatchVideoInfo,setComments} = watchVideoSlice.actions;
export default watchVideoSlice.reducer;
