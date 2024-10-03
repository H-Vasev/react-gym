import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {loggedUser: null},
    reducers:{
        registerUser(state, action){
            state.loggedUser = action.payload.username;
        },
        setLoggedIn(state, action){
            state.loggedUser = action.payload.username;
        },
        setLoggedOut(state){
            state.loggedUser = null;
        }
    }
})

export const userActions = userSlice.actions;
export default userSlice;