import { useState, useEffect } from "react";

import PropTypes from "prop-types";

const Converter = ({ currencies }) => {
  const [currencyFrom, setCurrencyFrom] = useState(1);
  const [currencyTo, setCurrencyTo] = useState(currencies.usd.uah);

  useEffect(() => {
    setCurrencyTo(currencyFrom * currencies.usd.uah);
  }, [currencyFrom, currencies]);

  useEffect(() => {
    setCurrencyFrom(currencyTo / currencies.usd.uah);
  }, [currencyTo, currencies]);

  const handleCurrencyFromChange = ({ target: { value } }) => {
    setCurrencyFrom(value);
  };

  const handleCurrencyToChange = ({ target: { value } }) => {
    setCurrencyTo(value);
  };
  return (
    <>
      <div>
        <input
          value={currencyFrom}
          type="text"
          onChange={handleCurrencyFromChange}
        />
        <select>
          <option selected>USD</option>
          <option>EUR</option>
          <option>UAH</option>
        </select>
      </div>
      <div>
        <input
          value={currencyTo}
          type="text"
          onChange={handleCurrencyToChange}
        />
        <select>
          <option>USD</option>
          <option>EUR</option>
          <option selected>UAH</option>
        </select>
      </div>
    </>
  );
};

Converter.propTypes = {
  currencies: PropTypes.shape({
    usd: PropTypes.object.isRequired,
    eur: PropTypes.object.isRequired,
    uah: PropTypes.object.isRequired,
  }),
};

export default Converter;
