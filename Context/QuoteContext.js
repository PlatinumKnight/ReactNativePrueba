import React, { createContext, useState, useEffect } from "react";
export const QuoteContext = createContext();

export const QuoteProvider = (props) => {
  const [Day, setDay] = useState([]);
  const [Random, setRandom] = useState([]);
  const [Quote, setQuote] = useState([]);

  const QuoteDay = async (today = "today") => {
    fetch(`https://zenquotes.io/api/${today}`)
      .then((response) => response.json())
      .then((json) => setDay(json))
      .catch((error) => console.error(error));
  };

  const QuoteRandom = async (random = "random") => {
    fetch(`https://zenquotes.io/api/${random}`)
      .then((response) => response.json())
      .then((json) => setRandom(json))
      .catch((error) => console.error(error));
  };

  const QuoteAll = async (quotes = "quotes") => {
    fetch(`https://zenquotes.io/api/${quotes}`)
      .then((response) => response.json())
      .then((json) => setQuote(json))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    QuoteDay();
    QuoteRandom();
    QuoteAll();
  }, []);

  return (
    <QuoteContext.Provider
      value={{
        QuoteRandom,
        Random,
        QuoteDay,
        Day,
        QuoteAll,
        Quote,
      }}
    >
      {props.children}
    </QuoteContext.Provider>
  );
};
