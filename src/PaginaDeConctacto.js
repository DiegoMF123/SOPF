import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import { BrowserRouter as Router, Redirect, Link, Route, Switch } from "react-router-dom";

class Appdos extends Component {
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
          <h1 className="App-title">Sedes</h1>
        </header>
        <p className="App-intro">
          Estas son las sedes

        </p>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Datos de contacto</h1>
        </header>
        <p className="App-intro">
          Datos de contacto

        </p>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Video informativo</h1>
        </header>
        <p className="App-intro">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/tN6-KziOBzg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



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

export default Appdos;
