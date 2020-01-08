import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Ulogin from "./Daniel/Ulogin";
import Uregister from "./Daniel/Uregister";
import Fregister from "./kai/Fregister";
import Flogin from "./kai/Flogin";
import NavBar from "./Daniel/NavBar";
import PrivateRoute from "./utils/PrivateRoute";
import FarmerProfile from "./components/Farmers/FarmerProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/uregister" exact component={Uregister} />
          <Route path="/ulogin" exact component={Ulogin} />
          <Route path="/fregister" exact component={Fregister} />
          <Route path="/flogin" exact component={Flogin} />
          <Route path="/farmerprofile" component={FarmerProfile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
