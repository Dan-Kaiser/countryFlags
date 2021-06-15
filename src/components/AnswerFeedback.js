import React from "react";

const AnswerFeedback = ({ answerIsCorrect, answerField, countryName }) => {
  let correctPhrase = `You wrote ${answerField}, which is Correct!`;
  let incorrectPhrase = `Incorrect! You wrote ${answerField}, but the answer is ${countryName}.`;
  return (
    <footer className={answerIsCorrect ? "correctAnswer" : "incorrectAnswer"}>
      {answerIsCorrect ? <p>{correctPhrase}</p> : <p>{incorrectPhrase}</p>}
    </footer>
  );
};

export default AnswerFeedback;
