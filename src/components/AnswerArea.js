import React from "react";

const AnswerArea = ({
  answerField,
  setAnswerField,
  handleKeyPress,
  handleOnClick,
  getNewFlag,
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
        />
      </label>
      <button onClick={handleOnClick} type="button">
        Submit
      </button>
      <button onClick={getNewFlag} type="button">
        Next
      </button>
    </div>
  );
};

export default AnswerArea;
