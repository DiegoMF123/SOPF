import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import Appdos from "./PaginaDeConctacto";
import Apptres from "./PaginaProductos";

 const rootElement = document.getElementById("root");
 ReactDOM.render(
   <BrowserRouter>
    <Switch>
     <Route exact path="/" component={App} />
     <Route path="/PaginaDeConctacto" component={Appdos} />
     <Route path="/PaginaProductos" component={Apptres} />
   </Switch>
   </BrowserRouter>,
   rootElement
 );