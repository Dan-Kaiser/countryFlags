import React, { useState, useEffect } from "react";
import FlagCard from "./components/FlagCard";
import AnswerFeedback from "./components/AnswerFeedback";
import countriesJSON from "./assets/countryCodes.json";
import dan from "./userData/dan.json";

const App = () => {
  const [currentCountryName, setCurrentCountryName] = useState("");
  // const [currentCountryCode, setCurrentCountryCode] = useState("us");
  const [flagImage, setFlagImage] = useState("");
  const [answerField, setAnswerField] = useState("");
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [userData, setUserData] = useState({});

  const checkMatching = (input, reference) => {
    let lowerInput = input.toLowerCase();
    let lowerReference = reference.toLowerCase();
    if (lowerInput === lowerReference) {
      // Correct Answer
      setUserData((prevState) => {
        prevState[currentCountryName].correct =
          prevState[currentCountryName].correct + 1;
        return prevState;
      });
      setAnswerIsCorrect(true);
    } else {
      // Incorrect Answer
      setUserData((prevState) => {
        prevState[currentCountryName].incorrect =
          prevState[currentCountryName].incorrect + 1;
        return prevState;
      });
      setAnswerIsCorrect(false);
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
    if (event.key === "Enter" && hasAnswered === false) {
      handleOnClick(event);
    } else if (event.key === "Enter" && hasAnswered === true) {
      //used to go to the next flag when the answer feedback is showing
      getNewFlag();
    }
  };

  const countries = Object.keys(countriesJSON);

  //Done once on startup
  useEffect(() => {
    getNewFlag();
    //Sets data to localStorage or dan template if that doesn't work
    let danData = localStorage.getItem("dan");
    if (danData === null) {
      danData = dan;
    } else {
      danData = JSON.parse(danData);
    }
    setUserData(danData);
  }, []);

  useEffect(() => {
    //Use this to update local storage data
    localStorage.setItem("dan", JSON.stringify(userData));
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
        <AnswerFeedback
          answerIsCorrect={answerIsCorrect}
          answerField={answerField}
          countryName={currentCountryName}
        />
      ) : null}
    </div>
  );
};

export default App;
