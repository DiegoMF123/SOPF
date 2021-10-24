import React, { Component } from 'react';
import logo from './logo.svg';
import img from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.png';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.png';
import img7 from './7.png';
import img8 from './8.png';
import img9 from './9.png';
import img10 from './10.png';
import catalogo from './catalogo.png';
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
          <img src={catalogo} className="App-logodos" alt="catalogo" />
          <h1 className="App-title">Informaciòn de productos</h1>
        </header>
        <p className="App-intro">
          En esta secciòn podremos encontrar los productos relacionados.
        </p>

        <section class="NovidadesSection">
          <main class="mainDestacados">
            <h2>Catalogo de Productos</h2>
            <section class="containerProdutos">
              <div class="produto">
                <img src={img} alt="logo" />
                <div class="productDescription">
                  <h3 class="produto__title">Producto 1</h3>
                  <spam class="produto__price">Q90.00</spam>
                </div>
                <a href=""><i class="produto__icon fas fa-cart-plus"></i></a>
              </div>
              <div class="produto">
                <img src={img2} alt="logo" />
                <div class="productDescription">
                  <h3 class="produto__title">Producto 2</h3>
                  <spam class="produto__price">Q90.00</spam>
                </div>
                <a href=""><i class="produto__icon fas fa-cart-plus"></i></a>
              </div>
              <div class="produto">
                <img src={img3} alt="logo" />
                <div class="productDescription">
                  <h3 class="produto__title">Producto 3</h3>
                  <spam class="produto__price">Q90.00</spam>
                </div>
                <a href=""><i class="produto__icon fas fa-cart-plus"></i></a>
              </div>
              <div class="produto">
                <img src={img4} alt="logo" />
                <div class="productDescription">
                  <h3 class="produto__title">Producto 4</h3>
                  <spam class="produto__price">Q90.00</spam>
                </div>
                <a href=""><i class="produto__icon fas fa-cart-plus"></i></a>
              </div>
              <div class="produto">
                <img src={img5} alt="logo" />
                <div class="productDescription">
                  <h3 class="produto__title">Producto 5</h3>
                  <spam class="produto__price">Q90.00</spam>
                </div>
                <a href=""><i class="produto__icon fas fa-cart-plus"></i></a>
              </div>
              <div class="produto">
                <img src={img6} alt="logo" />
                <div class="productDescription">
                  <h3 class="produto__title">Producto 6</h3>
                  <spam class="produto__price">Q90.00</spam>
                </div>
                <a href=""><i class="produto__icon fas fa-cart-plus"></i></a>
              </div>
              <div class="produto">
                <img src={img7} alt="logo" />
                <div class="productDescription">
                  <h3 class="produto__title">Producto 7</h3>
                  <spam class="produto__price">Q90.00</spam>
                </div>
                <a href=""><i class="produto__icon fas fa-cart-plus"></i></a>
              </div>
              <div class="produto">
                <img src={img8} alt="logo" />
                <div class="productDescription">
                  <h3 class="produto__title">Producto 8</h3>
                  <spam class="produto__price">Q90.00</spam>
                </div>
                <a href=""><i class="produto__icon fas fa-cart-plus"></i></a>
              </div>
            </section>
          </main>
        </section>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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
