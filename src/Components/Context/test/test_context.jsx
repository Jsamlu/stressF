import { createContext } from "react";
import Forum from "@/Components/Test/Forum";

export const test_context = createContext();

const testcontextprovider= (props) =>{
    const value = {
        ValArray
    }
    return(
        <test_context.Provider value={value}>
            {props.children}
        </test_context.Provider>
    );
}

export default testcontextprovider;