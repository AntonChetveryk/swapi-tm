import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

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
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <Link to="/">Back</Link>
      <div>producer: {film.producer}</div>
      <div>title: {film.title}</div>
      <div>episode: {film.episode_id}</div>
      <div>release date: {film.release_date}</div>
    </div>
  );
}
