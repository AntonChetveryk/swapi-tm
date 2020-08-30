import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  div {
    margin-bottom: 20px;
  }
  a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
  }

  a:hover {
    color: gold;
  }
`;

export function Films() {
  const [films, setFilms] = useState();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/films/`).then((res) => {
      console.log(res);
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
            <Link to={`/films/${film.episode_id}`}>{film.title}</Link>
          </div>
        ))}
      </Wrapper>
    </div>
  );
}
