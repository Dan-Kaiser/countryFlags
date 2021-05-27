import React from "react";

const FlagCard = ({
  flagImg,
  countryName,
  answerField,
  updateAnswerField,
  handleOnClick,
}) => {
  console.log("FlagCard Component Loaded");

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
          // value={answerField}
          // onChange={updateAnswerField}
        />
      </label>
      <button onClick={handleOnClick} type="button">
        Submit
      </button>
    </div>
  );
};

export default FlagCard;
