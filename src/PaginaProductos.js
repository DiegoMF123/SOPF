import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import { BrowserRouter as Router, Redirect, Link, Route, Switch } from "react-router-dom";

class Apptres extends Component {
  render() {
    return (
      <div className="App">
        <nav class="page__menu page__custom-settings menu">
          <ul class="menu__list r-list">
            <li class="menu__group"><Link to="/" class="menu__link r-link text-underlined">Pagina 1</Link></li>
            <li class="menu__group"><Link to="/PaginaProductos" class="menu__link r-link text-underlined">Pagina 2</Link></li>
            <li class="menu__group"><Link to="/PaginaDeConctacto" class="menu__link r-link text-underlined">Pagina 3</Link></li>
          </ul>
        </nav>
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
