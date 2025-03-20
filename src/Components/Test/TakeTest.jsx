import React, { useState, useEffect } from "react";
import Result from "./Result.jsx"; // Ensure Result component exists

const TakeTest = () => {
  const [questions, setQuestions] = useState([]); // Stores questions
  const [loading, setLoading] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [Index, setIndex] = useState(0);
  const [showRes, setShowRes] = useState(false);

  // Fetching questions from backend
  useEffect(() => {
    fetch("http://localhost:8080/api/questionnaire/1/question")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  // Handle option selection
  const handleOptionChange = (questionId, optionId) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [questionId]: optionId,
    }));
  };

  // Handle navigation between questions
  const handleNext = () => {
    if (Index === questions.length - 1) {
      setShowRes(true); // Show result at the last question
    }
    if (Index < questions.length - 1) {
      setIndex(Index + 1);
    }
  };

  const handlePrevious = () => {
    if (Index > 0) {
      setIndex(Index - 1);
    }
  };

  // Function to calculate sum of selected answers
  const getSumOfAnswers = () => {
    return Object.values(selectedOptions).reduce(
      (sum, value) => sum + Number(value),
      0
    );
  };

  // Handle submission of answers
  const handleSubmit = () => {
    console.log("Selected Answers:", selectedOptions);
    setShowRes(true);
  };

  if (loading) {
    return <p>Loading... (Maybe backend not connected!!!)</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 via-cyan-500 to-indigo-400">
      <div className="p-10 md:pt-3 pt-[80px]">
        <div className="bg-white my-10 w-[95%] mx-auto px-[15%] py-[5%] rounded-xl">
          <h1 className="md:text-2xl text-lg font-bold text-blue-500">
            How the test works:
          </h1>
          <ul className="mt-5 list-decimal flex flex-col gap-4 text-gray-500 lg:text-xl md:2xl text-lg">
            <li>
              <p>
                You’ll answer questions based on your daily activities and how
                you’re feeling.
              </p>
            </li>
            <li>
              <p>
                For each question, you’ll have 5 answer choices ranging from
                "Strongly Disagree" to "Strongly Agree."
              </p>
            </li>
            <li>
              <p>
                Based on your answers, we’ll assess your stress levels and
                recommend some activities tailored just for you!
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Question Section */}
      <div className="px-[15%] py-[5%]">
        {!showRes ? (
          <div className="mb-5 p-10 bg-white rounded-xl">
            <p className="md:text-2xl text-sm text-blue-500">
              {Index + 1}. {questions[Index].questionText}
            </p>

            {/* Displaying options */}
            <div className="p-4 mt-5">
              <ul className="flex flex-col gap-y-3">
                {questions[Index].options.map((option) => (
                  <li key={option.optionId} className="flex p-3 bg-sky-200 rounded-xl">
                    <input
                      className="w-[20px] h-[20px] self-center mr-5"
                      type="radio"
                      name={`question_${questions[Index].questionId}`}
                      value={option.optionId}
                      onChange={() =>
                        handleOptionChange(questions[Index].questionId, option.optionId)
                      }
                      checked={selectedOptions[questions[Index].questionId] === option.optionId}
                    />
                    <p className="md:text-lg text-xs text-sky-800">{option.optionText}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation Buttons */}
            <div className="flex w-[70%] mx-auto py-5 justify-between">
              <button
                className="bg-cyan-500 hover:bg-cyan-400 hover:scale-105 font-semibold text-white w-[30%] py-3 px-3 rounded-full transition-all duration-100"
                onClick={handlePrevious}
                type="button"
              >
                Previous
              </button>
              <button
                className="bg-cyan-500 hover:bg-cyan-400 hover:scale-105 font-semibold text-white w-[30%] py-3 px-3 rounded-full transition-all duration-100"
                onClick={handleNext}
                type="button"
              >
                {Index === questions.length - 1 ? "Submit" : "Next"}
              </button>
            </div>

            <p className="text-center text-xl py-3 font-bold text-sky-500">{`${Index + 1} out of ${questions.length}`}</p>
          </div>
        ) : (
          <div>
            <Result n={getSumOfAnswers()} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TakeTest;
