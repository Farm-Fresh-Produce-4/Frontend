import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Ulogin from "./Daniel/Ulogin";
import Uregister from "./Daniel/Uregister";
import Fregister from "./kai/Fregister";
import Flogin from "./kai/Flogin";
import NavBar from "./Daniel/NavBar";
import { FarmList } from "./kai/FarmList";

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
      <FarmList/>
    </div>
  );
}

export default App;
