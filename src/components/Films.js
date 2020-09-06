import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  div {
    margin-bottom: 20px;
  }
`;

const NavigationLink = styled(Link)`
  color: ${(props) => props.theme.color};
  text-decoration: none;
  font-size: 1.5rem;
  &:hover {
    color: gold;
  }
`;

export function Films() {
  const [films, setFilms] = useState();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/films/`).then((res) => {
      setFilms(res.data.results);
    });
  }, [setFilms]);

  if (!films) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <Wrapper>
        {films.map((film) => (
          <div key={film.episode_id}>
            <NavigationLink to={`/films/${film.episode_id}`}>
              {film.title}
            </NavigationLink>
          </div>
        ))}
      </Wrapper>
    </div>
  );
}
