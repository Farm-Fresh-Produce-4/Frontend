import React from "react";
import "./App.css";
import Register from "./Daniel/Register";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Daniel/Login";
import NavBar from "./Daniel/NavBar";




function App() {
  return (
    <div className="App">
       <NavBar/>
      <BrowserRouter>
        <Switch>
          <Route path="/Register" exact component={Register} />
          <Route path="/Login" exact component={Login} />
        </Switch>
      </BrowserRouter>
    
  
    
    </div>
  );
}

export default App;
