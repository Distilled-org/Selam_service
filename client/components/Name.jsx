/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
font-size: 18px;
text-align: left;
font-family: Helvetica;
font-weight: 400;
color: #0a0a0a;
text-transform: capitalize;
`;

// eslint-disable-next-line react/prop-types
const Name = ({ name, color }) => (
  <Title>
    {name} in {color}
  </Title>
);

export default Name;
