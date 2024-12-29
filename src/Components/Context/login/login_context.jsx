import { createContext, useState } from "react";

export const login_context = createContext(); 


// Provider component
export const LoginProvider = ({ children }) => {
  
    const [ showProfile, setShowProfile ] = useState(true);

  return (
    <login_context.Provider value={{ showProfile, setShowProfile }}>
      {children}
    </login_context.Provider>
  );
};
