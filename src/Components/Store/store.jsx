import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./Features/Login/logSclice" 


export const store = configureStore({
    reducer: LoginReducer
});
