import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

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
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <Link to="/">Back</Link>
      <div>name: {person.name}</div>
      <div>gender: {person.gender}</div>
      <div>height: {person.height}</div>
      <div>hair: {person.hair_color}</div>
      <div>
        <p>films:</p>
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
    </div>
  );
}
