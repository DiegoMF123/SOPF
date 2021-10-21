import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Link, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <p>
          This is the first page.
          <br />
          Click on the button below.
        </p>
        <Link to="/PaginaDeConctacto"><button>
          Go to Page 2 
        </button>
        </Link>
      </div>
    );
  }
}

export default App;
