import PropTypes from "prop-types";

const Header = ({ currencies }) => {
  return (
    <>
      <p>1 USD = {currencies.usd.uah} UAH</p>
      <p>1 EUR = {currencies.eur.uah} UAH</p>
    </>
  );
};

Header.propTypes = {
  currencies: PropTypes.shape({
    usd: PropTypes.object.isRequired,
    eur: PropTypes.object.isRequired,
    uah: PropTypes.object.isRequired,
  }),
};

export default Header;
