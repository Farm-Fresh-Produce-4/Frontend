import React from "react";
import "./App.css";
import Register from "./daniel/Register";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./daniel/Login";
import { ProductData } from './Daniel/ProductData';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/Register" exact component={Register} />
          <Route path="/Login" exact component={Login} />
        </Switch>
      </BrowserRouter>
      <ProductData/>
    </div>
  );
}

export default App;
