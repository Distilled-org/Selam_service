import React from 'react';
import styled from 'styled-components';

function Add() {
  const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: black;
  color: white;
  margin-top: 15px;
  margin-bottom: 15px;
  `;

  return (
    <Button>ADD TO CART</Button>
  );
}

export default Add;
