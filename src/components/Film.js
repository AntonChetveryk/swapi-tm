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
  span {
    color: ${(props) => props.theme.color};
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
          <span>
            <i>producer:</i> {film.producer}
          </span>
        </div>
        <div>
          <span>
            <i>title:</i> {film.title}
          </span>
        </div>
        <div>
          <span>
            <i>episode:</i> {film.episode_id}
          </span>
        </div>
        <div>
          <span>
            <i>release date:</i> {film.release_date}
          </span>
        </div>
      </Wrapper>
    </div>
  );
}
