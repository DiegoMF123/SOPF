import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Appdos extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Curso de Sistemas Operativos</h1>
        </header>
        <p className="App-intro">
          Seccion de que trata el curso

          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Appdos;
