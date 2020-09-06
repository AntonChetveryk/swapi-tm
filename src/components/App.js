import React, { useState } from "react";
import "../styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import { People } from "./People";
import { Person } from "./Person";
import { Film } from "./Film";
import { Films } from "./Films";

const GlobalStyle = createGlobalStyle`
  body {
   background: ${(props) => props.theme.bg};
  }
`;

const Wrapper = styled.div`
  padding: 10px;
`;

const NavigationLink = styled(Link)`
  color: gold;
  font-size: 2rem;
  text-decoration: none;

  &:hover {
    color: orange;
  }
`;

const NavigationItem = styled.li`
  margin: 0 20px;
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
          <GlobalStyle />
          <Wrapper className="container">
            <ul className="nav">
              <NavigationItem className="nav-item">
                <NavigationLink to="/">People</NavigationLink>
              </NavigationItem>
              <NavigationItem className="nav-item">
                <NavigationLink to="/films/">Films</NavigationLink>
              </NavigationItem>
            </ul>
            <Button
              onClick={() => {
                setTheme(!isBlack);
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
