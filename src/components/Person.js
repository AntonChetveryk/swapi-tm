import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 1.2rem;
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: gold;
  }
  a.back {
    color: blue;
  }
  i {
    color: darkgrey;
  }
`;

export function Person(props) {
  const [person, setPerson] = useState();
  let { personId } = useParams();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${personId}/`).then((res) => {
      console.log(res);
      setPerson(res.data);
    });
  }, [setPerson, personId]);

  if (!person) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <Wrapper>
        <Link to="/" className="back">
          Back
        </Link>
        <div>
          <i>name:</i> {person.name}
        </div>
        <div>
          <i>gender:</i> {person.gender}
        </div>
        <div>
          <i>height:</i> {person.height}
        </div>
        <div>
          <i>hair:</i> {person.hair_color}
        </div>
        <div>
          <p>
            <i>films:</i>
          </p>
          <ul>
            {person.films.map((film) => {
              const numberOfFilm = film[film.length - 2];
              return (
                <li key={film}>
                  <Link to={`/films/${numberOfFilm}`}>{film}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Wrapper>
    </div>
  );
}
