import React from "react";

const FlagCard = ({
  flagImg,
  countryName,
  answerField,
  updateAnswerField,
  handleSubmit,
}) => {
  console.log("FlagCard Component Loaded");

  return (
    <div>
      <img src={flagImg} alt={`The flag of ${countryName}`} />
      <p>{countryName}</p>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FlagCard;
