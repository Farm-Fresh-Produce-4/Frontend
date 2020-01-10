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

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <PrivateRoute path='/uregister' exact component={Uregister} />
          <PrivateRoute path='/ulogin' exact component={Ulogin} />
          <PrivateRoute path='/fregister' exact component={Fregister} />
          <PrivateRoute path='/flogin' exact component={Flogin} />
          <PrivateRoute path='/fhome' component={FarmerHomePage} />
          <PrivateRoute path='/fprofile' component={FarmerProfile} />
          <PrivateRoute path='/fedit' component={FarmerEditInventory} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
