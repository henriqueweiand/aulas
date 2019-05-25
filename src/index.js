import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Button from './components/Button'

class App extends Component {
  
  handleSalvar() {
    alert('Atualizamos!')
  }

  render() {
    return (
      <Fragment>
        <h1>
          Hello React!!
        </h1>
        <Button onClick={this.handleSalvar}>
          <h4>Salvar</h4>
        </Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
