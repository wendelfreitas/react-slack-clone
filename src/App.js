import React from "react";
import Routes from "./routes";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => (
  <Router>
    <Routes />
  </Router>
);
export default App;
