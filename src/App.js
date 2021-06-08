import React, { useState, useEffect } from "react";
import FlagCard from "./components/FlagCard";
import countriesJSON from "./assets/countryCodes.json";

const App = () => {
  const [currentCountryName, setCurrentCountryName] = useState("");
  // const [currentCountryCode, setCurrentCountryCode] = useState("us");
  const [flagImage, setFlagImage] = useState("");
  const [answerField, setAnswerField] = useState("");
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);

  const checkMatching = (input, reference) => {
    let lowerInput = input.toLowerCase();
    let lowerReference = reference.toLowerCase();
    if (lowerInput === lowerReference) {
      setAnswerIsCorrect(true);
      // console.log(
      //   `Correct! You entered ${input}, and the answer was ${reference}`
      // );
    } else {
      setAnswerIsCorrect(false);
      // console.log(
      //   `Incorrect! You entered ${input}, and the answer was ${reference}`
      // );
    }
  };

  const updateAnswerField = (event) => {
    const { value } = event.target;
    console.log(value);
    setAnswerField(value);
  };

  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const newRandomCountry = (countries) => {
    const randomCountry =
      countries[randomIntFromInterval(0, countries.length - 1)];
    // setCurrentCountryCode(randomCountry);

    return {
      countryName: countriesJSON[randomCountry],
      flagImage: `https://flagcdn.com/h240/${randomCountry}.png`,
    };
  };

  const getNewFlag = () => {
    const { countryName, flagImage } = newRandomCountry(countries);
    setCurrentCountryName(countryName);
    setFlagImage(flagImage);
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    console.log("handleOnClick Function Called");
    checkMatching(answerField, currentCountryName);
    setHasAnswered(true);
  };

  const countries = Object.keys(countriesJSON);

  useEffect(() => {
    getNewFlag();
  }, []);

  return (
    <div>
      <FlagCard
        flagImg={flagImage}
        countryName={currentCountryName}
        handleOnClick={handleOnClick}
        answerField={answerField}
        setAnswerField={updateAnswerField}
        getNewFlag={getNewFlag}
      />
      {hasAnswered ? (
        answerIsCorrect ? (
          <p>Correct!</p>
        ) : (
          <p>Incorrect!</p>
        )
      ) : null}
    </div>
  );
};

export default App;
