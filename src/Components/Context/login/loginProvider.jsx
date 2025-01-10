import { useState } from "react";
import { login_context } from "./login_context";

const LoginProvider = ({ children }) => {
  
    const [ user, setUser ] = useState(null);
  return (
    <login_context.Provider value={{  user, setUser}}>
     
      {children}
     
    </login_context.Provider>
  );
};

export default LoginProvider;