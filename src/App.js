import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contador from './Contador.js'
import Cronometro from './Cronometro.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Contador</h1>
        </header>
        <Contador />
        <br />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cronometro</h1>
        </header>
        <Cronometro />
      </div>
    );
  }
}

export default App;
