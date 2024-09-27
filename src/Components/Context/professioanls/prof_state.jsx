import { useReducer } from "react";
import prof_context from "./prof_context";
import prof_reducer from "./prof_reducer"
import {} from "../type";
import { SHOW_HIDE_PROFESSIONAL, ADD_PROFESSIONAL, REMOVE_PROFESSIONAL } from "../type";


const prof_state = ({children}) =>{
    const init_state = {
        show_prof : false,
        prof_info : [],
    }
    const [state, dispatch] = useReducer(prof_reducer, init_state);

    const add_prof = item = >{
        dispatch({type: ADD_PROFESSIONAL, payload:item});
    }

    return(
        <prof_context.Provider value={{
            show_prof : state.show_prof,
            prof_info : state.prof_info,
        }}>

        </prof_context.Provider>
    );
}
export default prof_state;