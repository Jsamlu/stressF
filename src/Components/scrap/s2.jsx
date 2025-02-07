import React, { useState } from "react";
// import SummaryPage from "./SummaryPage";

const Questionnaire = () => {
  const questions = [
    {
      id: 1,
      text: "How satisfied are you with our service?",
      options: [1, 2, 3, 4, 5], // Numeric answers
    },
    {
      id: 2,
      text: "How would you rate the product quality?",
      options: [1, 2, 3, 4, 5],
    },
    {
      id: 3,
      text: "How likely are you to recommend us?",
      options: [1, 2, 3, 4, 5],
    },
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(null)); // Array to store numeric answers
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Update answer when user selects an option
  const handleAnswerChange = (value) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = value; // Update the current question's answer
    setAnswers(newAnswers);
  };

  // Move to the next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("Questionnaire complete!");
    }
  };

  return (
    <div>
      <h2>Questionnaire</h2>
      <p>{questions[currentQuestionIndex].text}</p>

      {/* Render input options */}
      <div>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name={`question-${questions[currentQuestionIndex].id}`}
              value={option}
              checked={answers[currentQuestionIndex] === option}
              onChange={() => handleAnswerChange(option)}
            />
            {option}
          </label>
        ))}
      </div>

      {/* Navigation */}
      <button
        type="button"
        onClick={handleNextQuestion}
        disabled={answers[currentQuestionIndex] === null} // Ensure user selects an answer
      >
        {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
      </button>

      {/* Show summary on last question */}
      {currentQuestionIndex === questions.length - 1 && (
        <SummaryPage answers={answers} />
      )}
    </div>
  );
};

export default Questionnaire;
