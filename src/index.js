import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Button from './components/Button'

class App extends Component {

  state = {
    contador: 0,
    nome: ''
  }
  
  handleSalvar = () => {
    this.setState({
      contador: this.state.contador+1
    })
  }

  changeText = (element) => {
    this.setState({
      nome: element.target.value
    });
  }

  render() {
    console.log('executou o render()');
    
    return (
      <Fragment>
        <h1>
          Hello {this.state.nome}!! {this.state.contador}
        </h1>
        <Button onClick={this.handleSalvar}>
          <h4>Adicionar</h4>
        </Button>
        <input onChange={this.changeText} value={this.state.nome} />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
