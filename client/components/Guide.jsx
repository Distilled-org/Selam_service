import React from 'react';
import styled from 'styled-components';
import Modal from './Modal.jsx';

class Guide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  showModal = () => {
    this.setState({
      show: true,
    });
  };

  hideModal = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <span>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal innerds</p>
        </Modal>
        <button onClick={this.showModal}>Fit Guide</button>
      </span>
    );
  }
}

export default Guide;
