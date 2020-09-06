import React, { useState, useEffect, useMemo } from "react";
import { PersonListItem } from "./PersonListItem";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
  span {
    color: ${(props) => props.theme.color};
  }
`;

export function People() {
  const [people, setPeople] = useState([]);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://swapi.dev/api/people/").then((res) => {
      setPeople(res.data.results);
      setIsLoading(false);
    });
  }, [setPeople]);

  const onChange = ({ target: { value } }) => {
    setValue(value);
  };

  const peopleFiltered = useMemo(
    () =>
      people.filter(({ name }) =>
        name.toUpperCase().includes(value.toUpperCase())
      ),
    [people, value]
  );

  // const toPerson = useCallback((person, index) => (
  //   <PersonListItem name={person.name} id={index + 1} key={index} />
  // ));

  // return <div>{people.map(toPerson)}</div>;
  return (
    <Wrapper>
      <div className="container">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Choose a hero"
          className="my-4"
          style={{ fontSize: "1.5rem" }}
        />
        {isLoading ? (
          <h5 className="text-center">
            <span>Loading...</span>
          </h5>
        ) : peopleFiltered.length ? (
          peopleFiltered.map((person, index) => (
            <PersonListItem name={person.name} id={index + 1} key={index} />
          ))
        ) : (
          <h2 className="text-center">
            <span>List is empty</span>
          </h2>
        )}
      </div>
    </Wrapper>
  );
}
