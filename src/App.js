import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Ulogin from "./daniel/Ulogin";
import Uregister from "./daniel/Uregister";
import Fregister from "./kai/Fregister";
import Flogin from "./kai/Flogin";
import NavBar from "./daniel/NavBar";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route path="/uregister" exact component={Uregister} />
          <Route path="/ulogin" exact component={Ulogin} />
          <Route path="/fregister" exact component={Fregister} />
          <Route path="/flogin" exact component={Flogin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
