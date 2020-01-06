import React from 'react';
import './App.css';
import Register from './Daniel/Register'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './Daniel/SignIn';



function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Switch>
  <Route path="/Register" exact component={Register}/>
  <Route path="/SignIn" exact component={SignIn}/>
  </Switch>
  </BrowserRouter>
    </div>
    
  );
}

export default App;
