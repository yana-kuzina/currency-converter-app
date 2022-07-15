import { useEffect, useState } from "react";

import Header from "./components/Header";
import Converter from "./components/Converter";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [currencies, setCurrencies] = useState({});

  useEffect(() => {
    Promise.all([
      fetch(
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json"
      ),
      fetch(
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json"
      ),
      fetch(
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/uah.json"
      ),
    ])
      .then((results) => Promise.all(results.map((r) => r.json())))
      .then(([{ eur }, { usd }, { uah }]) => {
        setCurrencies({ usd, eur, uah });
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header currencies={currencies} />
      <Converter currencies={currencies} />
    </>
  );
}

export default App;
