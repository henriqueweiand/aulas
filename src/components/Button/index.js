import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return (
      <a onClick={this.props.onClick}>
        {this.props.children}
      </a>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element
}

Button.defaultProps = {
  children: <p>Sem valor</p>
}

export default Button;