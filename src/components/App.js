import React from "react";
import "../styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import { People } from "./People";
import { Person } from "./Person";
import { Film } from "./Film";
import { Films } from "./Films";

const Wrapper = styled.div`
  padding: 10px;
  li {
    margin: 0 20px;
    a {
      color: gold;
      font-size: 2rem;
      text-decoration: none;
    }
    a:hover {
      color: orange;
    }
  }
`;

export default function App() {
  return (
    <>
      <Router basename="swapi-tm">
        <Wrapper className="container">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/">People</Link>
            </li>
            <li className="nav-item">
              <Link to="/films/">Films</Link>
            </li>
          </ul>
        </Wrapper>

        <Switch>
          <Route path="/" exact>
            <People />
          </Route>
          <Route path="/people/:personId">
            <Person />
          </Route>
          <Route path="/films/" exact>
            <Films />
          </Route>
          <Route path="/films/:filmId">
            <Film />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
