import React, { useState, useEffect } from 'react';

const TakeTest = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState({});

  // Fetching questions along with their options
  useEffect(() => {
    fetch('http://localhost:8080/api/questionnaire/1/question') 
      .then(response => response.json())
      .then(data => {
        setQuestions(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching questions:', error));
  }, []);

  // Handle option selection
  const handleOptionChange = (questionId, optionId) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [questionId]: optionId
    }));
  };

  const handleSubmit = () => {
    console.log('Selected Options:', selectedOptions);
    //to send selected options to the backend
  };

  if (loading) {
    return <p>Loading... ( Maybe backend not connected!!! )</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Take the Test</h2>

      {questions.map((question, index) => (
        <div key={question.questionId} className="card bg-white p-4 rounded-lg shadow-lg mb-4">
          <h3 className="text-xl font-semibold mb-2">{index + 1}. {question.questionText}</h3>

          {/* Displaying options */}
          <div>
            {question.options.map((option) => (
              <label key={option.optionId} className="block p-2 border rounded mb-2 hover:bg-gray-100">
                <input 
                  type="radio" 
                  name={`question_${question.questionId}`} 
                  value={option.optionId} 
                  onChange={() => handleOptionChange(question.questionId, option.optionId)} 
                  checked={selectedOptions[question.questionId] === option.optionId}
                />
                {option.optionText}
              </label>
            ))}
          </div>
        </div>
      ))}

      <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
    </div>
  );
};

export default TakeTest;
