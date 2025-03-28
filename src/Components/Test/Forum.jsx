import QList from "./QList";
import { useState } from "react";
import { Result } from ".";

const valArr = [0];

const Forum = () => {
  let [Index, setIndex] = useState(0);
  let [Question, setQuestion] = useState(QList[Index]);
  const [answers, setAnswers] = useState([]);
  const [showRes, setShowRes] = useState(false);

  // Update answer when user selects an option
  const handleAnswerChange = (value) => {
    const newAnswers = [...answers];
    newAnswers[Index] = value;
    setAnswers(newAnswers);
  };

  //previous & next button hande function
  function handelNext() {
    if (Index === QList.length - 1) {
      setShowRes(true);
    }

    if (Index < QList.length - 1) {
      setIndex(Index + 1);
      setQuestion(QList[Index + 1]); // Fix to load the next question correctly
    }
  }

  const handlePrevious = () => {
    if (Index > 0) {
      setIndex(Index - 1);
      setQuestion(QList[Index]);
    }
  };

  const getSumOfAnswers = () => {
    return answers.reduce((sum, value) => sum + Number(value), 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 via-cyan-500 to-indigo-400 ">
      <div className="p-10 md:pt-3  pt-[80px]">
        <div className=" bg-white my-10 w-[95%] mx-auto px-[15%] py-[5%] rounded-xl">
          <h1 className="md:text-2xl text-lg font-bold text-blue-500">
            How the test works:
          </h1>
          <ul className="mt-5 list-decimal flex flex-col gap-4 text-gray-500  lg:text-xl md:2xl  text-lg">
            <li>
              <p className="">
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

      {/* Forum starting */}

      <div className=" px-[15%] py-[5%]">
        {!showRes ? (
          <div className="mb-5 p-10 bg-white rounded-xl">
            <form>
              <p className="md:text-2xl text-sm text-blue-500">
                {Index + 1}.&nbsp;
                {Question.question}
              </p>
              <div className="p-4 mt-5">
                <ul className="flex flex-col gap-y-3">
                  {Question.options.map((options, index) => {
                    return (
                      <li className="flex p-3 bg-sky-200 rounded-xl">
                        <input
                          className="w-[20px] h-[20px] self-center mr-5"
                          type="radio"
                          name="ans"
                          value={index + 1}
                          checked={answers[Index] === index + 1} // ✅ Ensures only one selection per question
                          onChange={() => handleAnswerChange(index + 1)}
                        />
                        <p className="md:text-lg text-xs text-sky-800">
                          {options}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/*page handle buttons */}

              <div className="flex w-[70%] mx-auto py-5 justify-between ">
                <button
                  className="bg-cyan-500  hover:bg-cyan-400 hover:scale-105 font-semibold text-white w-[30%] py-3 px-3 rounded-full transition-all duration-100"
                  onClick={handlePrevious}
                  type="button"
                >
                  Previous
                </button>
                <button
                  id="next"
                  className="bg-cyan-500  hover:bg-cyan-400 hover:scale-105 font-semibold text-white w-[30%] py-3 px-3 rounded-full transition-all duration-100"
                  onClick={() => {
                    handelNext();
                    console.log(answers);
                  }}
                  type="button"
                >
                  {Index === QList.length - 1 ? "Submit" : "Next"}
                </button>
              </div>
              <p className="text-center text-xl py-3 font-bold text-sky-500">{`${
                Index + 1
              } out of 10`}</p>
            </form>
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
export { Forum, valArr };

// here while calling of Handle next Function at final Question handle next show store that data in DB
