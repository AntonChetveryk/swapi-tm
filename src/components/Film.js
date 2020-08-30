import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 1.2rem;
  a {
    text-decoration: none;
  }

  i {
    color: darkgrey;
  }
`;

export function Film() {
  const [film, setFilm] = useState();
  let { filmId } = useParams();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/films/${filmId}/`).then((res) => {
      console.log(res);
      setFilm(res.data);
    });
  }, [setFilm, filmId]);

  if (!film) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <Wrapper>
        <Link to="/">Back</Link>
        <div>
          <i>producer:</i> {film.producer}
        </div>
        <div>
          <i>title:</i> {film.title}
        </div>
        <div>
          <i>episode:</i> {film.episode_id}
        </div>
        <div>
          <i>release date:</i> {film.release_date}
        </div>
      </Wrapper>
    </div>
  );
}
