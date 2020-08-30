import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 20px;
  a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
  }

  a:hover {
    color: gold;
  }
`;

export function PersonListItem({ name, id }) {
  return (
    <Wrapper>
      <Link to={`/people/${id}`} key={id}>
        {name}
      </Link>
    </Wrapper>
  );
}
