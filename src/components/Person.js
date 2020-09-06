import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 1.2rem;
  span {
    color: ${(props) => props.theme.color};
  }
  a.back {
    color: blue;
  }
  i {
    color: darkgrey;
  }
  li {
    list-style-type: none;
  }
`;

const NavigationLink = styled(Link)`
  color: ${(props) => props.theme.color};
  font-size: 1.5rem;
  &:hover {
    color: gold;
  }
`;

export function Person(props) {
  const [person, setPerson] = useState();
  let { personId } = useParams();
  console.log(props);
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${personId}/`).then((res) => {
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
          <span>
            <i>name:</i> {person.name}
          </span>
        </div>
        <div>
          <span>
            <i>gender:</i> {person.gender}
          </span>
        </div>
        <div>
          <span>
            <i>height:</i> {person.height}
          </span>
        </div>
        <div>
          <span>
            <i>hair:</i> {person.hair_color}
          </span>
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
                  <NavigationLink to={`/films/${numberOfFilm}`}>
                    {film}
                  </NavigationLink>
                </li>
              );
            })}
          </ul>
        </div>
      </Wrapper>
    </div>
  );
}
