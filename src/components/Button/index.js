import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children }) => <a onClick={onClick}>{children}</a>;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element,
};

Button.defaultProps = {
  children: <p>Sem valor</p>,
};

export default Button;
