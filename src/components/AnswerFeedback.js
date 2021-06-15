import React from "react";

const AnswerFeedback = ({ answerIsCorrect, answerField, countryName }) => {
  let correctPhrase = `Correct! You wrote ${answerField}, and the answer was ${countryName}`;
  let incorrectPhrase = `Incorrect! You wrote ${answerField}, but the answer is ${countryName}.`;
  return (
    <footer className={answerIsCorrect ? "correctAnswer" : "incorrectAnswer"}>
      {answerIsCorrect ? <p>{correctPhrase}</p> : <p>{incorrectPhrase}</p>}
    </footer>
  );
};

export default AnswerFeedback;
