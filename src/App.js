import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Ulogin from "./Daniel/Ulogin";
import Uregister from "./Daniel/Uregister";
import Fregister from "./components/Farmers/Fregister";
import Flogin from "./components/Farmers/Flogin";
import NavBar from "./Daniel/NavBar";
import PrivateRoute from "./utils/PrivateRoute";
import FarmerProfile from "./components/Farmers/FarmerProfile";
import { FarmPage } from "./components/Users/FarmPage";
import { ProductPage } from "./Daniel/ProductPage";
import FarmerEditInventory from "./components/Farmers/FarmerEditInventory";
import FarmerHomePage from "./components/Farmers/FarmerHomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/uregister" exact component={Uregister} />
          <Route path="/ulogin" exact component={Ulogin} />
          <Route path="/fregister" exact component={Fregister} />
          <Route path="/flogin" exact component={Flogin} />
          <Route path="/fprofile" component={FarmerProfile} />
          <Route path="/farmer" component={FarmerEditInventory} />
          <PrivateRoute path="/fhome" component={FarmerHomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
