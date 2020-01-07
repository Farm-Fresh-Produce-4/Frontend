import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/uregister" exact component={Uregister} />
      <Route path="/ulogin" exact component={uLogin} />
    </BrowserRouter>
  );
};

export default Routes;
