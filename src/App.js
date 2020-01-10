import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Ulogin from "./components/Users/Ulogin";
import Uregister from "./components/Users/Uregister";
import Fregister from "./components/Farmers/Fregister";
import Flogin from "./components/Farmers/Flogin";
import PrivateRoute from "./utils/PrivateRoute";
import FarmerProfile from "./components/Farmers/FarmerProfile";
import { FarmPage } from "./components/Users/FarmPage";
import { ProductPage } from "./components/Users/ProductPage";
import FarmerEditInventory from "./components/Farmers/FarmerEditInventory";
import FarmerHomePage from "./components/Farmers/FarmerHomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* Farmer Routes */}
          <Route path="/fregister" exact component={Fregister} />
          <Route path="/flogin" exact component={Flogin} />
          <Route path="/fprofile" component={FarmerProfile} />
          <PrivateRoute path="/farmer" component={FarmerEditInventory} />
          <PrivateRoute path="/fhome" component={FarmerHomePage} />
          {/* User Routes */}
          <Route path="/uregister" exact component={Uregister} />
          <Route path="/ulogin" exact component={Ulogin} />
          <PrivateRoute path="/farms" exact component={FarmPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
