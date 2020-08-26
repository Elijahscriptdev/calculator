import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name }) => (
  <button
    type="button"
    className="buttonSquare"
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: '',
};

export default Button;
