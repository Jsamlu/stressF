import { Link } from "react-router-dom";
import QList from "./QList";
import { useState } from "react";
import { useContext } from "react";
import { AnswerContext } from "../Context/test/AnswerContext";

const valArr = [0];

const Forum = () => {
  

  let [Index, setIndex] = useState(0);
  let [Question, setQuestion] = useState(QList[Index]);
  const { answers, setAnswers } = useContext(AnswerContext); // Access context // Array to store numeric answers

  
  // Update answer when user selects an option
  const handleAnswerChange = (value) => {
    const newAnswers = [...answers];
    newAnswers[Index] = value; // Update the current question's answer
    setAnswers(newAnswers);
  };
  
  //previous & next button hande function
  function handelNext() {
    if (Index < QList.length - 1) {
      setIndex(Index + 1);
      setQuestion(QList[Index]);
    }
    
  }

  const handlePrevious = () => {
    if (Index > 0) {
      setIndex(Index - 1);
      setQuestion(QList[Index]);
    }
  };

  

  return (
    <div className="min-h-screen bg-sky-200 ">
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
                        value={index+1}
                        onChange={() => handleAnswerChange(index+1)}
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
                className="bg-sky-600 text-white w-[30%] py-3 px-3"
                onClick={handlePrevious}
                type="button"
              >
                Previous
              </button>
              <button
                className="bg-sky-600 text-white w-[30%] py-3 px-3"
                onClick={() =>{
                  handelNext();
                  console.log(answers);
                } }
                type="button"
              >
                Next
              </button>
            </div>
            <p className="text-center text-xl py-3  text-sky-500">{`${
              Index + 1
            } out of 10`}</p>
          </form>
        </div>

        <div className="mt-5 mr-5 mb-5">
          <Link
            to="/result"
            className="p-2 hover:bg-sky-500 bg-sky-600 text-white rounded-xl text-2xl"
          >
            End test
          </Link>
        </div>
      </div>
    </div>
  );
};
export { Forum, valArr };
