import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Herohome from "./views/Herohome";
import Dictionary from "./views/Dictionary";
import Footer from "./components/Footer";
import Indexhome from "./views/indexhome";
import Aboutme from "./views/Aboutme";
import SpeakingPractice from "./views/SpeakingPractice";

const App = () => {
  return (
    <Router>
      <div className="biru bg-primary sm:p-16">
        <div className="putih bg-white">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Indexhome />
            </Route>
          </Switch>
          <Switch>
            <Route path="/course">
              <Herohome />
            </Route>
          </Switch>
          <Switch>
            <Route path="/speakingpractice">
              <SpeakingPractice />
            </Route>
          </Switch>
          <Switch>
            <Route path="/dictionary">
              <Dictionary />
            </Route>
          </Switch>
          <Switch>
            <Route path="/about">
              <Aboutme />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
