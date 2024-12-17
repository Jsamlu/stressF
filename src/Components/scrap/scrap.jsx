import React, { useState } from "react";

const Questionnaire = () => {
  // List of questions
  const questions = [
    "What is your name?",
    "How old are you?",
    "What is your favorite color?",
    "What is your favorite hobby?",
  ];

  // State to keep track of the current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Function to go to the next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("You have completed the questionnaire!");
    }
  };

  // Function to go to the previous question (optional)
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div>
      <h2>Questionnaire</h2>
      <p>{questions[currentQuestionIndex]}</p>
      <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
        Previous
      </button>
      <button onClick={handleNextQuestion}>
        {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
      </button>
    </div>
  );
};

export default Questionnaire;
