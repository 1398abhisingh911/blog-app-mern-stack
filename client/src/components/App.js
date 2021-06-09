import React from "react";
import Home from "../Pages/Home/Home.jsx";
import Topbar from "./topbar/topbar.jsx";
import Single from "../Pages/single/Single";
import Write from "../Pages/Write/Write";
import Settings from "../Pages/settings/Settings";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const user = false;
  return (
    <div>
      <Router>
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">{user ? <Home /> : <Register />}</Route>
          <Route path="/login">{user ? <Home /> : <Login />}</Route>
          <Route path="/write">{user ? <Write /> : <Register />}</Route>
          <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
