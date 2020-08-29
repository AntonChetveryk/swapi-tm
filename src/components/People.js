import React, { useState, useEffect } from "react";
import { PersonListItem } from "./PersonListItem";
import axios from "axios";

export function People() {
  const [people, setPeople] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/").then((res) => {
      console.log(res.data.results);
      setPeople(res.data.results);
    });
  }, [setPeople]);

  const onChange = ({ target: { value } }) => {
    setValue(value);
  };

  const renderList = () => {
    const arr = people
      .filter(({ name }) => name.toUpperCase().includes(value.toUpperCase()))
      .map((person, index) => (
        <PersonListItem name={person.name} id={index + 1} key={index} />
      ));
    return arr.length ? arr : <h2 className="text-center">List is empty</h2>;
  };

  // const toPerson = useCallback((person, index) => (
  //   <PersonListItem name={person.name} id={index + 1} key={index} />
  // ));

  // return <div>{people.map(toPerson)}</div>;
  return (
    <div className="container">
      <input type="text" value={value} onChange={onChange} />
      {renderList()}
    </div>
  );
}
