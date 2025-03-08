import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    role: "NA",
}

export const logSlice = createSlice({
    name :'Lstate',
    initialState,
    reducers:{
        setLogin:(state, action) =>{
            state.role = action.payload; 
        },
        removeLogin:(state, action) =>{
            state.role = action.payload == "NU" ? action.payload : "NU";
        }   
        
    }
})

export const {setLogin, removeLogin} = logSlice.actions;
const LogReducer = logSlice.reducer;
export default  LogReducer;