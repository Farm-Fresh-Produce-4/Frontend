<<<<<<< HEAD
import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Ulogin from './Daniel/Ulogin';
import Uregister from './Daniel/Uregister';
import Fregister from './kai/Fregister';
import Flogin from './kai/Flogin';
import NavBar from './Daniel/NavBar';
import FNavbar from './Daniel/FNavBar';
import PrivateRoute from './utils/PrivateRoute';
import FarmerProfile from './components/Farmers/FarmerProfile';
import { FarmPage } from './Daniel/FarmPage';
import { ProductPage } from './Daniel/ProductPage';
import FarmerEditInventory from './components/Farmers/FarmerEditInventory';
import FarmerHomePage from './components/Farmers/FarmerHomePage';
import { Footer } from "./daniel/Footer";
=======
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
>>>>>>> kai-haskell

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
<<<<<<< HEAD
          <Route path='/' exact component={Home} />
          <PrivateRoute path='/uregister' exact component={Uregister} />
          <PrivateRoute path='/ulogin' exact component={Ulogin} />
          <PrivateRoute path='/fregister' exact component={Fregister} />
          <PrivateRoute path='/flogin' exact component={Flogin} />
          <PrivateRoute path='/fhome' component={FarmerHomePage} />
          <PrivateRoute path='/fprofile' component={FarmerProfile} />
          <PrivateRoute path='/fedit' component={FarmerEditInventory} />
=======
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
>>>>>>> kai-haskell
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
