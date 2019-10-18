/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

function Size(props) {
  const {
    size, selectedSizeID, updateSize, sizeID,
  } = props;

  const Button = styled.button`
  height: 35px;
  width: 35px;
  margin: 2px;
  border: 1px solid lightgrey;
  text-transform: uppercase;
  font-size: 12px;
  padding: 0px;
  background-color: ${(props) => (props.selected ? 'black' : 'white')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
  font-weight: ${(props) => (props.selected ? '700' : '300')}
  `;

  const updateWithThisSize = () => {
    updateSize(sizeID);
  };

  if (sizeID === selectedSizeID) {
    return (
      <Button selected onClick={updateWithThisSize}>{size}</Button>
    );
  }
  return (
    <Button onClick={updateWithThisSize}>{size}</Button>
  );
}

export default Size;
