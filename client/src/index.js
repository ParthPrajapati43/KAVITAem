import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import App from "./App";
import Register from "./Screens/Register";
import Login from "./Screens/Login";
import ForgetPassword from "./Screens/ForgetPassword";
import ResetPassword from "./Screens/ResetPassword";
import Activate from "./Screens/Activate";

import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <App {...props} />} />
      <Route
        path="/register"
        exact
        render={(props) => <Register {...props} />}
      />
      <Route path="/login" exact render={(props) => <Login {...props} />} />
      <Route
        path="/users/password/forget"
        exact
        render={(props) => <ForgetPassword {...props} />}
      />
      <Route
        path="/users/password/reset/:token"
        exact
        render={(props) => <ResetPassword {...props} />}
      />
      <Route
        path="/users/activate/:token"
        exact
        render={(props) => <Activate {...props} />}
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
