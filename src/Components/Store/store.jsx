import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./Features/Login/logSclice" 
import ActivityReducer from "./Features/Activitiy/actSlice";


export const store = configureStore({
    reducer:{
        Lstate:LoginReducer,
        ActivityState: ActivityReducer,
        }
    
});
