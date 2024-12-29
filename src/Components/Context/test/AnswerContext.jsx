import React, { createContext, useState } from "react";



// Create the context
export const AnswerContext = createContext();

// Provider component
export const AnswerProvider = ({ children }) => {
  const [answers, setAnswers] = useState([]);

  return (
    <AnswerContext.Provider value={{ answers, setAnswers }}>
      {children}
    </AnswerContext.Provider>
  );
};
