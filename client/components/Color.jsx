/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

function Color(props) {
  const { colorImage } = props;

  const Button = styled.button`
  background-image: url(${colorImage});
  height: 35px;
  width: 35px;
  margin: 2px;
  `;

  return (
    <Button>{props.color}</Button>
  );
}

export default Color;
