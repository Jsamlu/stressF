import React, { useState } from 'react';

const FeedbackForm = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [username, setUsername] = useState('');
  const [ratings, setRatings] = useState(0);
  const [responses, setResponses] = useState({});
  const [overallExperience, setOverallExperience] = useState('');
  const [showTextbox, setShowTextbox] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Close-ended questions
  const questions = [
    {
      id: 1,
      question: "Does this platform helped you manage your stress?",
      options: ["Yes, it was useful.", "I disagree.", "Partially satisfied.", "This platform needs to improve"],
    },
    {
      id: 2,
      question: "Did you find the doctors and professional support useful?",
      options: ["Yes, it was useful.", "I disagree.", "Partially satisfied.", "The experience can be improved"],
    },
    {
      id: 3,
      question: "Did you enjoy the games of this platform?",
      options: ["Yes, I did.", "I disagree.", "Partially satisfied.", "The games could have been creative"],
    },
    {
      id: 4,
      question: "Was the chat-bot helpful to you?",
      options: ["Yes, Suki was great.", "I disagree.", "Partially satisfied.", "Needs to improve"],
    },
    {
      id: 5,
      question: "Were the activities a good recommendation?",
      options: ["Yes, I liked them.", "I disagree.", "Partially satisfied.", "Could have been better"],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      username,
      ratings,
      overallExperience,
    };
    setFeedbacks([newFeedback, ...feedbacks]);
    setFormSubmitted(true);
    setUsername('');
    setRatings(0);
    setResponses({});
    setOverallExperience('');
    setShowTextbox(false);
  };

  const handleRatingChange = (value) => {
    setRatings(value);
  };

  const handleResponseChange = (questionId, value) => {
    setResponses({ ...responses, [questionId]: value });
  };

  const handleTextboxClick = () => {
    setShowTextbox(true);
  };

  const handleExperienceChange = (e) => {
    setOverallExperience(e.target.value);
  };

  return (
    <div className="container p-6 max-w-full mx-auto bg-gradient-to-br from-blue-400 to-green-600">
      <h2 className="text-2xl font-semibold text-sky-100 text-center mb-6">Feedback Form</h2>

      {!formSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <label className="block font-medium text-gray-800 mb-2">Your Name:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
              placeholder="Enter your name"
            />
          </div>

          {/* Displaying each question inside a card */}
          {questions.map((q) => (
            <div key={q.id} className="bg-white p-6 rounded-lg shadow-md mb-6">
              <label className="block font-medium text-gray-800 mb-2">{q.question}</label>
              <div className="space-y-2">
                {q.options.map((option, index) => (
                  <label key={index} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      value={option}
                      checked={responses[q.id] === option}
                      onChange={() => handleResponseChange(q.id, option)}
                      className="h-5 w-5 text-indigo-500"
                      required
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <label className="block font-medium text-gray-800 mb-2">Rate the platform (1-5 stars)</label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleRatingChange(star)}
                  className={`cursor-pointer text-2xl ${star <= ratings ? 'text-yellow-500' : 'text-gray-300'}`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          {!showTextbox && (
            <button
              type="button"
              onClick={handleTextboxClick}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Tell us, what's on your mind?
            </button>
          )}

          {showTextbox && (
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <label className="block font-medium text-gray-800 mb-2">Overall Experience</label>
              <textarea
                value={overallExperience}
                onChange={handleExperienceChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                rows="4"
                placeholder="Describe your overall experience"
                required
              ></textarea>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
          >
            Submit Feedback
          </button>
        </form>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-semibold mb-4">Thank you for your feedback!</h3>
          <div className="space-y-4">
            <p className="font-semibold text-indigo-700">{username}</p>
            <div className="flex">
              {/* {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`text-xl ${star <= ratings ? 'text-yellow-500' : 'text-gray-300'}`}
                >
                  ★
                </span>
              ))} */}
            </div>
          </div>

          {showTextbox && (
            <div className="mt-4 text-gray-700">
              <p><strong>Overall Experience: </strong>{overallExperience}</p>
            </div>
          )}
        </div>
      )}

      {formSubmitted && feedbacks.length > 0 && (
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Recent Feedback</h3>
          {feedbacks.map((feedback, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md mb-6">
              <p className="font-semibold text-indigo-700">{feedback.username}</p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-xl ${star <= feedback.ratings ? 'text-yellow-500' : 'text-gray-300'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="mt-2 text-gray-600 italic">{feedback.overallExperience}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
