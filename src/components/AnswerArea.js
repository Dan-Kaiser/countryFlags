import React from "react";

const AnswerArea = ({
  answerField,
  setAnswerField,
  handleKeyPress,
  handleOnClick,
  getNewFlag,
  hasAnswered
}) => {
  return (
    <div className="answer-area">
      <label>
        Answer:
        <input
          type="text"
          name="answer"
          id="answer"
          value={answerField}
          onChange={setAnswerField}
          onKeyPress={handleKeyPress}
          autoFocus
          // disabled={hasAnswered}
        />
      </label>
      <button disabled={hasAnswered} onClick={handleOnClick} type="button">
        Submit
      </button>
      <button disabled={!hasAnswered} onClick={getNewFlag} type="button">
        Next
      </button>
    </div>
  );
};

export default AnswerArea;
