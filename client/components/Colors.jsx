/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Color from './Color.jsx';

class Colors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { colors, updateColor, selectedColorID } = this.props;
    const ColorsHolder = styled.section`
    display: flex;
    justify-content: flex-start;
    `;

    if (colors) {
      return (
        <ColorsHolder>
          {colors.map((color, index) => <Color colorName={color.colorName} key={color._id} colorImage={color.colorImage} updateColor={updateColor} selectedColorID={selectedColorID} colorID={index} />)}
        </ColorsHolder>
      );
    }
    return <div>loading</div>;
  }
}

export default Colors;
