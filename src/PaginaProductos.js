import React, { Component } from 'react';
import logo from './logo.svg';
import img from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.png';
import img7 from './7.jpg';
import img8 from './8.png';
import img9 from './9.png';
import img10 from './10.png';
import './App.css';
import './style.css';




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
        <div className="Appdos">
          <div class="content-carrousel">
            <figure><img src={img} alt="logo" /></figure>
            <figure><img src={img2} alt="logo" /></figure>
            <figure><img src={img3} alt="logo" /></figure>
            <figure><img src={img5} alt="logo" /></figure>
            <figure><img src={img4} alt="logo" /></figure>
            <figure><img src={img6} alt="logo" /></figure>
            <figure><img src={img7} alt="logo" /></figure>
            <figure><img src={img8} alt="logo" /></figure>
            <figure><img src={img9} alt="logo" /></figure>
            <figure><img src={img10} alt="logo" /></figure>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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
