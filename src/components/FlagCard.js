import React from "react";

const FlagCard = ({ flagImg, countryName }) => {
  return (
    <div>
      {countryName}
      <img src={flagImg} />
    </div>
  );
};

export default FlagCard;
