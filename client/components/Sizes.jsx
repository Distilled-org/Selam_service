/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Size from './Size.jsx';
import Guide from './Guide.jsx';

class Sizes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      sizes, selectedSizeID, updateSize, name, color, US, Int,
    } = this.props;

    if (sizes) {
      return (
        <div>
          <SizeTitle>Top Size</SizeTitle>
          <SizeButtons>
            {sizes.map((size, index) => (
              <Size
                size={size}
                key={index}
                sizeID={index}
                selectedSizeID={selectedSizeID}
                updateSize={updateSize}
              />
            ))}
            <GuideHolder>
              <Guide name={name} color={color} US={US} Int={Int} />
              <br />
              Model is 5&apos;8&apos; wearing size S
            </GuideHolder>
          </SizeButtons>
        </div>
      );
    }
    return <div>loading</div>;
  }
}

export default Sizes;

const GuideHolder = styled.div`
display: inline-block;
padding-left: 3px;
font-family: Helvetica;
font-size: 12px;
line-height: 18px;
letter-spacing: 0.5px;
font-weight: 300;
color: #0a0a0a;
`;

const SizeTitle = styled.h3`
font-family: Helvetica;
font-size: 12px;
color: #0a0a0a;
font-weight: 700;
letter-spacing: 0.5px;
`;

const SizeButtons = styled.div`
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
`;
