import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import Appdos from "./PaginaDeConctacto";

 const rootElement = document.getElementById("root");
 ReactDOM.render(
   <BrowserRouter>
    <Switch>
     <Route exact path="/" component={App} />
     <Route path="/PaginaDeConctacto" component={Appdos} />
   </Switch>
   </BrowserRouter>,
   rootElement
 );