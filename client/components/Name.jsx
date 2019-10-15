import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
font-size: 2em;
text-align: left;
`;

// eslint-disable-next-line react/prop-types
const Name = ({ name }) => (<Title>{name}</Title>);

export default Name;
