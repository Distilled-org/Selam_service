/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Modal = ({ handleClose, show, children }) => {
  if (show) {
    return (
      <ModalWrapper display="true">
        <Background onClick={handleClose} />
        <ModalCard display="true">
          {children}
          <CloseButton onClick={handleClose}>X</CloseButton>
        </ModalCard>
      </ModalWrapper>
    );
  }
  return (
    <div />
  );
};

export default Modal;

const ModalWrapper = styled.div`
  width: 100%;  
  height: 100%;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${(props) => (props.display ? 'block' : 'none')};
`;
const ModalCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  position: fixed;
  width: 750px;
  height: 520px;
  z-index: 99;
  background: white;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;
const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
  padding: 20px;
  font-size: 21px;
  font-family: Arial;
  font-weight: 300;
  &:hover {
    cursor: pointer;
  }`;
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.5;
`;
