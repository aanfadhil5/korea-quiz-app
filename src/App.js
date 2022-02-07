import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Herohome from "./views/Herohome";
import Dictionary from "./views/Dictionary";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/course">
            <Herohome />
          </Route>
        </Switch>
        <Switch>
          <Route path="/dictionary">
            <Dictionary />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
