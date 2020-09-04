import React, { useState } from "react";
import "../styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

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

const Button = styled.button`
  color: ${(props) => props.theme.btnTextColor};
  background: ${(props) => props.theme.btnBg};
  border-radius: 10px;
  padding: 5px 10px;
`;

const themeDark = {
  bg: "black",
  color: "white",
  btnBg: "white",
  btnTextColor: "black",
};

const themeLight = {
  bg: "white",
  color: "black",
  btnBg: "black",
  btnTextColor: "white",
};

export default function App() {
  const [isBlack, setTheme] = useState(false);
  return (
    <>
      <Router basename="swapi-tm">
        <ThemeProvider theme={isBlack ? themeDark : themeLight}>
          <Wrapper className="container">
            <ul className="nav">
              <li className="nav-item">
                <Link to="/">People</Link>
              </li>
              <li className="nav-item">
                <Link to="/films/">Films</Link>
              </li>
            </ul>
            <Button
              onClick={() => {
                setTheme(!isBlack);
                document.body.style.background = isBlack ? "white" : "black";
              }}
            >
              {isBlack ? "Light" : "Dark"}
            </Button>
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
        </ThemeProvider>
      </Router>
    </>
  );
}
