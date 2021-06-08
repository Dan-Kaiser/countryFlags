import React from "react";

const FlagCard = ({
  flagImg,
  countryName,
  answerField,
  setAnswerField,
  handleOnClick,
  getNewFlag,
}) => {
  return (
    <div>
      <img src={flagImg} alt={`The flag of ${countryName}`} />
      <p>{countryName}</p>
      <label>
        Answer
        <input
          type="text"
          name="answer"
          id="answer"
          value={answerField}
          onChange={setAnswerField}
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

export default FlagCard;
