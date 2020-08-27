import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, wide, color } = props;
  const buttonSize = wide === true ? '50%' : '25%';
  const buttonStyle = {
    fontWeight: 'bold',
    width: buttonSize,
    backgroundColor: color,
    border: 'solid 1px #C0C0C0',
    height: '100px',
  };
  return (
    <button type="button" style={buttonStyle}>{name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

Button.defaultProps = {
  name: '',
  color: 'light-grey',
  wide: false,
};

export default Button;
