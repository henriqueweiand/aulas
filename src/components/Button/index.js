import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <a onClick={this.props.onClick}>
        {this.props.children}
      </a>
    );
  }
}

export default Button;
