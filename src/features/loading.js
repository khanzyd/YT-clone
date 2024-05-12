import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    loading: true
}

const loadingSlice = createSlice({
    name:"loading",
    initialState:initialState,
    reducers:{
        setLoading: (state)=> {
            state.loading = !state.loading
        }
    }
})

export const {setLoading} = loadingSlice.actions;
export default loadingSlice.reducer;