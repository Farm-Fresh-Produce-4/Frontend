import React from 'react';
import './App.css';
import Register from './Daniel/Register'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './Daniel/SignIn';
import { ProductData } from './Daniel/ProductData';



function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Switch>
  <Route path="/Register" exact component={Register}/>
  <Route path="/SignIn" exact component={SignIn}/>
  </Switch>
  </BrowserRouter>
  <ProductData/>
    </div>
    
  );
}

export default App;
