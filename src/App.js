import React, { Component } from 'react';
import logo from './logo.svg';
import vision from './vision.png';
import mision from './mision.png';
import Objetivos from './Objetivos.png';
import './App.css';
import './style.css';
import { BrowserRouter as Router, Redirect, Link, Route, Switch } from "react-router-dom";

class App extends Component {
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
          <img src={vision} className="App-logodos" alt="VISION" />
          <h1 className="App-title">Visiòn</h1>
        </header>
        <br />
        <br />
        <p className="App-intro">
          Constituir un equipo dentro de nuestra empresa con espíritu emprendedor, con actitud de servicio, ofreciendo servicios y productos   innovadores   con calidad y aun precio accesible, además de hacerle pasar al cliente en su estancia un ambiente seguro en compañía de la mejor música.

        </p>
        <br />
        <br />
        <br />

        <header className="App-header">
          <img src={mision} className="App-logodos" alt="mision" />
          <h1 className="App-title">Misiòn</h1>
        </header>
        <p className="App-intro">
          Ser reconocidos como una empresa innovadora, moderna y que satisface a una necesidad de nuestros clientes por el servicio que brindamos, además de la calidad en nuestros

        </p>
        <br />
        <br />
        <div className="Appdos">
        <header className="App-header">
          <img src={Objetivos} className="App-logodos" alt="Objetivos" />
          <h1 className="App-title">Objetivos</h1>
        </header>
        <p className="App-intro">
          <li>
            Mantener el liderazgo
          </li>
          <br />
          <li>
            Ofrecer excelente servicio
          </li>
          <br />
          <li>
            Ser rentable
          </li>
          <br />
          <li>
            Contribuir con el desarrollo del país.
          </li>
          <br />
          <li>
            Ampliar la red de distribución en un 35% durante el último mes del año.
          </li>


        </p>
        <br />
        <Link to="/PaginaProductos"><button>
          Siguiente pàgina
        </button>
        </Link>
        </div>

      </div>
      


    );
  }
}

export default App;