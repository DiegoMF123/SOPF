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
          Constituir un equipo dentro de nuestra empresa con espíritu emprendedor, con actitud de servicio, ofreciendo servicios y productos   innovadores   con calidad y aun precio accesible, además de hacerle pasar al cliente en su estancia un ambiente seguro en compañía de la mejor música.

        </p>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Misiòn</h1>
        </header>
        <p className="App-intro">
          Ser reconocidos como una empresa innovadora, moderna y que satisface a una necesidad de nuestros clientes por el servicio que brindamos, además de la calidad en nuestros

        </p>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Objetivos</h1>
        </header>
        <p className="App-intro">
          <li>
            Mantener el liderazgo
          </li>
          <li>
            Ofrecer excelente servicio
          </li>
          <li>
            Ser rentable
          </li>
          <li>
            Contribuir con el desarrollo del país.
          </li>
          <li>
            Ampliar la red de distribución en un 35% durante el último mes del año.
          </li>


        </p>
        <button href="" >Siguiente pàgina</button >

      </div>
    );
  }
}

export default App;
