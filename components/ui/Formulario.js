import React from "react";
import styled from "@emotion/styled";

export const Formulario = styled.button`
  max-width: 600px;
  width: 95%;
  margin: 5rem auto 0 auto;
  background:transparent;
  border:none;

`;

export const Campo = styled.div`
margin-bottom:2rem;
display:flex;
align-items:center;
label{
 flex:0 0 150px;
 font-size:1.8rem;

}
input{
   flex:1;
   padding:1rem;
}
`;

export const InputSubmit = styled.input`
  background:var(--naranja);
  width:100%;
  padding:1.5rem;
  text-align:center;
  font-size:1.8rem;
  color:#fff;
  text-transform:uppercase;
  border:none;
  font-family:'PT-Sans',sans-serif;
  font-weight:700;
  cursor: pointer;
`;

export const Error = styled.p`
background-color:red;
padding:1rem;
font-family:"PT Sans",sans-serif;
font-weight:700;
font-size:1.4rem;
color:#fff;
text-align:center;
text-transform:uppercase;
margin:2rem auto;


`;