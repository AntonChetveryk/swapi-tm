import React from "react";
import "../styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { People } from "./People";
import { Person } from "./Person";
import { Film } from "./Film";

export default function App() {
  return (
    <Router basename="swapi-tm">
      <Switch>
        <Route path="/" exact>
          <People />
        </Route>
        <Route path="/people/:personId">
          <Person />
        </Route>
        <Route path="/films/:filmId">
          <Film />
        </Route>
      </Switch>
    </Router>
  );
}
