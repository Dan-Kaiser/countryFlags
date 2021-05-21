import React from "react";
import FlagCard from "./components/FlagCard";
import countries from "./assets/countries.json";

const App = () => {
  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const randomCountry =
    countries[randomIntFromInterval(0, countries.length - 1)];
  console.log(randomCountry);
  const countryCode = randomCountry.countryCode.toLowerCase();
  const { name } = randomCountry;
  console.log(countryCode, name);

  return (
    <div>
      <h1>This should be teal</h1>
      <h2>Welcome to the React App boilerplate</h2>
      <h3>Date : {new Date().toDateString()}</h3>
      <FlagCard
        flagImg={`https://flagcdn.com/h240/${countryCode}.png`}
        // flagImg={`https://www.countryflags.io/${countryCode}/flat/64.png`}
        countryName={name}
      />
    </div>
  );
};

export default App;
