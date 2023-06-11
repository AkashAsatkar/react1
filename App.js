import React, { useState } from "react";
import "./App.css";
import { findAllByTestId } from "@testing-library/react";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the capital of India?",
      options: [
        { id: 0, text: "Mumbai", isCorrect: false },
        { id: 1, text: "Banglore", isCorrect: false },
        { id: 2, text: "Hyderabad", isCorrect: false },
        { id: 3, text: "Delhi", isCorrect: true },
      ],
    },
    {
      text: "Which function is used to serialize an object into a JSON string in Javascript?",
      options: [
        { id: 0, text: "stringify()", isCorrect: true },
        { id: 1, text: "parse()", isCorrect: false },
        { id: 2, text: "convert()", isCorrect: false },
        { id: 3, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "Which of the following keywords is used to define a variable in Javascript?",
      options: [
        { id: 0, text: "var", isCorrect: false },
        { id: 1, text: "let", isCorrect: false },
        { id: 2, text: "var and let", isCorrect: true },
        { id: 3, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the India?",
      options: [
        { id: 0, text: "Maharashtra", isCorrect: false },
        { id: 1, text: "Rajasthan", isCorrect: true },
        { id: 2, text: "Uttar Pradesh", isCorrect: false },
        { id: 3, text: "Andhra Pradesh", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: false },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
    {
      text: "Which of the following methods can be used to display data in some form using Javascript?",
      options: [
        { id: 0, text: "document.write()", isCorrect: false },
        { id: 1, text: "console.log()", isCorrect: false },
        { id: 2, text: "window.alert", isCorrect: false },
        { id: 3, text: "All of the above", isCorrect: true },
      ],
    },
    {
      text: "How can a datatype be declared to be a constant type?",
      options: [
        { id: 0, text: "const", isCorrect: true },
        { id: 1, text: "var", isCorrect: false },
        { id: 2, text: "let", isCorrect: false },
        { id: 3, text: "constant", isCorrect: false },
      ],
    },
    {
      text: "Which Language is used in frontend?",
      options: [
        { id: 0, text: "Java", isCorrect: false },
        { id: 1, text: "C++", isCorrect: false },
        { id: 2, text: "Javascript", isCorrect: true },
        { id: 3, text: "Php", isCorrect: false },
      ],
    },
    {
      text: "Javascript is an _______ language?",
      options: [
        { id: 0, text: "Object-Oriented", isCorrect: true },
        { id: 1, text: "Object-based", isCorrect: false },
        { id: 2, text: "Procedural", isCorrect: false },
        { id: 3, text: "None of above", isCorrect: false },
      ],
    },
    {
      text: "Which of the following methods is used to access HTML elements using Javascript?",
      options: [
        { id: 0, text: "documentElementById()", isCorrect: false },
        { id: 1, text: "documentElementByClassName()", isCorrect: false },
        { id: 2, text: "Both", isCorrect: true },
        { id: 3, text: "None", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>QUIZ </h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;