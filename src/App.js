import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Visiòn</h1>
        </header>
        <p className="App-intro">
          Seccion para la visiòn prueba commit

        </p>
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Misiòn</h1>
        </header>
        <p className="App-intro">
          Seccion para la misiòn

        </p>
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Objetivos</h1>
        </header>
        <p className="App-intro">
          Seccion para los objetivos

        </p>
      </div>
    );
  }
}

export default App;
