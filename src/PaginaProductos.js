import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Link, Route, Switch } from "react-router-dom";

class Apptres extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Curso de Sistemas Operativos Seccion del curso</h1>
        </header>
        <p className="App-intro">
          Seccion del curso

          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <br />
        <Link to="/PaginaDeConctacto"><button>
          Siguiente pàgina
        </button>
        </Link>
      </div>
    );
  }
}

export default Apptres;
