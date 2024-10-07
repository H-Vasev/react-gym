import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {loggedUser: null},
    reducers:{
        registerUser(state, action){
            state.loggedUser = action.payload.username;
        },
        setLoggedIn(state, action){
            console.log(action.payload)
            if(action.payload.username){
                state.loggedUser = action.payload.username;
            }else {
                state.loggedUser = action.payload.status;
            }
        },
        setLoggedOut(state){
            state.loggedUser = null;
        }
    }
})

export const userActions = userSlice.actions;
export default userSlice;