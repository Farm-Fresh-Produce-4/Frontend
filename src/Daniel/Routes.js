import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";



const Routes = () => {
  return (
    <BrowserRouter>

        <Route path="/SignIn" exact component={SignIn} />
        <Route path="/Register" exact component={Register}/>
   
    </BrowserRouter>
  );
};

export default Routes;
