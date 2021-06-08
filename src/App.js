import React, { useState, useEffect } from "react";
import FlagCard from "./components/FlagCard";
import countriesJSON from "./assets/countryCodes.json";

const correctStyle = {
  backgroundColor: "#03fc1c",
};
const incorrectStyle = {
  backgroundColor: "#de2814",
};

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
    // console.log(value);
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
    setHasAnswered(false);
    setAnswerIsCorrect(null);
    setAnswerField("");
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    checkMatching(answerField, currentCountryName);
    setHasAnswered(true);
  };

  const handleKeyPress = (event) => {
    //Triggers on enter keypress
    if (event.key === "Enter") {
      handleOnClick(event);
    }
  };

  const countries = Object.keys(countriesJSON);

  useEffect(() => {
    getNewFlag();
  }, []);
  useEffect(() => {
    //Use this to change background to green/red on correct/incorrect guesses
  }, [answerIsCorrect]);

  return (
    <div>
      <FlagCard
        flagImg={flagImage}
        countryName={currentCountryName}
        handleOnClick={handleOnClick}
        answerField={answerField}
        setAnswerField={updateAnswerField}
        getNewFlag={getNewFlag}
        handleKeyPress={handleKeyPress}
      />
      {hasAnswered ? (
        <footer style={answerIsCorrect ? correctStyle : incorrectStyle}>
          {answerIsCorrect ? <p>Correct!</p> : <p>Incorrect!</p>}
        </footer>
      ) : null}
    </div>
  );
};

export default App;
