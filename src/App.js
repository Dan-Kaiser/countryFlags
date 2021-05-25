import React, { useState, useEffect } from "react";
import FlagCard from "./components/FlagCard";
import countriesJSON from "./assets/countryCodes.json";

const App = () => {
  const [currentCountryName, setCurrentCountryName] = useState("United States");
  // const [currentCountryCode, setCurrentCountryCode] = useState("us");
  const [flagImage, setFlagImage] = useState(`https://flagcdn.com/h240/us.png`);

  const countries = Object.keys(countriesJSON);

  useEffect(() => {
    newRandomCountry();
  }, []);

  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const newRandomCountry = () => {
    const randomCountry =
      countries[randomIntFromInterval(0, countries.length - 1)];
    // setCurrentCountryCode(randomCountry);
    setCurrentCountryName(countriesJSON[randomCountry]);
    setFlagImage(`https://flagcdn.com/h240/${randomCountry}.png`);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("HandleSubmit Function Called");
  };

  return (
    <div>
      <FlagCard
        flagImg={flagImage}
        countryName={currentCountryName}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
