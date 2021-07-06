import React from "react";
import AnswerArea from "./AnswerArea";

const FlagCard = ({
  flagImg,
  countryName,
  answerField,
  setAnswerField,
  handleOnClick,
  getNewFlag,
  handleKeyPress,
}) => {
  return (
    <div className="flag-card">
      <img
        className="flag-card--image"
        src={flagImg}
        alt={`The flag of ${countryName}`}
      />
      {/* <p>{countryName}</p> */}
      <br></br>
      <AnswerArea
        answerField={answerField}
        setAnswerField={setAnswerField}
        handleKeyPress={handleKeyPress}
        handleOnClick={handleOnClick}
        getNewFlag={getNewFlag}
      />
    </div>
  );
};

export default FlagCard;
