import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Customer from "./components/Customers";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Customer />
          </Route>
          <Route path="/customers">
            <Customer />
          </Route>
          <Route path="*">
            <div>Ops! Página não encontrada.</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
