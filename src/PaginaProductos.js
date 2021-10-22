import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import './style2.css';
import './bootstrap.css';
import './menu.css';
import './jquery-2.2.3.min.js';
import './font-awesome.css';
import './owl.carousel.css';
import './animate.min.css';
import './ken-burns.css';
import './owl.carousel.js';
import './jquery-scrolltofixed-min.js';
import './move-top.js';
import './bootstrap.js';
import './easing.js';
import './minicart.js';
import './jquery.knob.js';
import './time.js';
import './jquery.throttle.js';
import './main.js';
import './jquery.menu-aim.js';
import './jquery.classycountdown.js';



import { BrowserRouter as Router, Redirect, Link, Route, Switch } from "react-router-dom";

class Apptres extends Component {
  render() {
    return (
      <div className="App">
        <nav class="page__menu page__custom-settings menu">
          <ul class="menu__list r-list">
            <li class="menu__group"><Link to="/" class="menu__link r-link text-underlined">Página principal</Link></li>
            <li class="menu__group"><Link to="/PaginaProductos" class="menu__link r-link text-underlined">Información de productos</Link></li>
            <li class="menu__group"><Link to="/PaginaDeConctacto" class="menu__link r-link text-underlined">Contacto</Link></li>
          </ul>
        </nav>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Informaciòn de productos</h1>
        </header>
        <p className="App-intro">
          Seccion del curso

          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <br />
        <Link to="/PaginaDeConctacto"><button class="btn btn-info">
          Siguiente pàgina
        </button>
        </Link>
      </div>
    );
  }
}

export default Apptres;
