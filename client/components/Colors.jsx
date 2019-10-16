import React from 'react';
import Color from './Color.jsx';
import styled from 'styled-components';

class Colors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { colors } = this.props;
    const ColorsHolder = styled.section`
    display: flex;
    justify-content: flex-start;
    `;

    if (colors) {
      return (
        <ColorsHolder>
          {colors.map((color) => <Color colorName={color.colorName} key={color._id} colorImage={color.colorImage} />)}
        </ColorsHolder>
      );
    }
    return <div>loading</div>;
  };
}

export default Colors;
