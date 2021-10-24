import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import sedes from './sedes.png';
import contacto from './contacto.png';
import videoinformtaivo from './videoinformtaivo.png';
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
          <img src={sedes} className="App-logodos" alt="sedes" />
          <h1 className="App-title">Sedes</h1>
        </header>
        <p className="App-intro">
          Ubicaciòn de nuestra sede

        </p>
        <br />
        <br />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.78728754968!2d-90.45828788531881!3d14.668009579353928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858999096fdbd161%3A0x170e7fbdd215149!2sGuatemala!5e0!3m2!1ses!2sgt!4v1634882041863!5m2!1ses!2sgt"
          width="1000" height="450" allowfullscreen="" loading="lazy">

        </iframe>
        <p className="App-intro">
          Nos encontramos en la 6ta avenida 8-60 Zona 1 de la Ciudad de Guatemala.

        </p>
        <br />
        <br />
        <header className="App-header">
          <img src={contacto} className="App-logodos" alt="contacto" />
          <h1 className="App-title">Datos de contacto</h1>
        </header>
        <p className="App-intro">
          Datos de contacto
        </p>

        <form class='contacto'>
            <div><label>Tu Nombre:</label><input type='text' value=''/></div>
            <div><label>Tu Email:</label><input type='text' value=''/></div>
            <div><label>Asunto:</label><input type='text' value=''/></div>
            <div><label>Mensaje:</label><textarea rows='6'></textarea></div>
            <div><input type='submit' value='Envia Mensaje'/></div>
        </form>

        <header className="App-header">
          <img src={videoinformtaivo} className="App-logodos" alt="videoinformtaivo" />
          <h1 className="App-title">Video informativo</h1>
        </header>
        <p className="App-intro">
          <iframe width="1000" height="600" src="https://www.youtube.com/embed/tN6-KziOBzg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



        </p>
        <br />

      </div>
    );
  }
}

export default Appdos;
