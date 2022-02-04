import logo from "./logo.svg";
import "./App.css";
import React from "react";

import Navbar from "./components/Navbar";
import Herohome from "./views/Herohome";
import Dictionary from "./views/Dictionary";

const App = () => {
  return (
    <div>
      <Navbar />
      <Herohome />
      <Dictionary />
    </div>
  );
};

export default App;
