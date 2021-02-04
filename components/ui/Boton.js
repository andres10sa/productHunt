import React from "react";
import styled from "@emotion/styled";

const Boton = styled.button`
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid #d1d1d1;
  padding: 0.8rem 2rem;
  margin-right: 1rem;
  background-color: ${(props) => (props.bgColor ? "#DA552F" : "white")};
  color: ${(props) => (props.bgColor ? "#fff" : "#000")};
  &:last-of-type {
    margin-right: 0;
  }
    cursor:pointer;
  
`;

export default Boton;
