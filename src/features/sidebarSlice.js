import { createSlice } from "@reduxjs/toolkit";

let initialState = { state:true};

let sidebarSlice = createSlice({
    name:"sidebar",
    initialState: initialState,
    reducers: {
        togglesideBar: (state,{payload})=>{
            console.log(payload);
            if(payload != undefined){
                state.state = payload;
                return;
            }
            state.state = !state.state;
        }
    }
})

export const {togglesideBar} = sidebarSlice.actions;
export default sidebarSlice.reducer;