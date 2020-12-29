import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route
            path="/cohab"
            component={() => {
              window.location.href = "https://cohab-backend.herokuapp.com/";
              return null;
            }}
          />
          <Route
            path="/local-e"
            component={() => {
              window.location.href = "https://local-e-app.herokuapp.com/";
              return null;
            }}
          />
          <Route
            path="/office-space"
            component={() => {
              window.location.href = "https://kiwi3p.github.io/Ironhack-Game/";
              return null;
            }}
          />
          <Route
            path="/holiday1"
            component={() => {
              window.location.href =
                "https://kiwi3p.github.io/2020holiday_Presents_300x250/";
              return null;
            }}
          />
          <Route
            path="/holiday2"
            component={() => {
              window.location.href =
                "https://kiwi3p.github.io/2020holiday_Unwrappable_970x250/";
              return null;
            }}
          />
          <Route
            path="/linkedin"
            component={() => {
              window.location.href =
                "https://www.linkedin.com/in/jack-transue/";
              return null;
            }}
          />
          <Route
            path="/github"
            component={() => {
              window.location.href = "https://github.com/Kiwi3p";
              return null;
            }}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
