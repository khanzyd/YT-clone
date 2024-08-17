import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    watchVideoInfo : null
}

const watchVideoSlice = createSlice({
    name:"watchVideo",
    initialState,
    reducers:{
        setWatchVideoInfo: (state,{payload}) => {
            console.log("Payload");
            state.watchVideoInfo = payload.data;
            console.log(state.watchVideoInfo);            
            console.log(payload.data);
            
        }
    }
})

export const {setWatchVideoInfo} = watchVideoSlice.actions;
export default watchVideoSlice.reducer;
