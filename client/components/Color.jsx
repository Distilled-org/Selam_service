/* eslint-disable no-shadow */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

function Color(props) {
  const {
    colorImage, colorID, selectedColorID, updateColor,
  } = props;

  const Button = styled.button`
  background-image: url(${colorImage});
  height: 35px;
  width: 35px;
  margin: 2px;
  border: ${(props) => (props.selected ? '1px black solid' : 'none')};
  `;

  const updateWithThisColor = () => {
    updateColor(colorID);
  };

  if (colorID === selectedColorID) {
    return (
      <Button selected onClick={updateWithThisColor}>{props.color}</Button>
    );
  }
  return (
    <Button onClick={updateWithThisColor}>{props.color}</Button>
  );
}

export default Color;

// if color id === colorselected make it selected
// onclick, update state with color id
