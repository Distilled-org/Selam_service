import React from 'react';
import styled from 'styled-components';

function Size(props) {
  const { size } = props;

  const Button = styled.button`
  height: 35px;
  width: 35px;
  margin: 2px;
  `;

  return (
    <Button>{size}</Button>
  );
}

export default Size;
