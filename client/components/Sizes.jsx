/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Size from './Size.jsx';

class Sizes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { sizes } = this.props;

    const GuideHolder = styled.div`
    display: inline-block;
    padding-left: 3px;
    `;

    const SizeTitle = styled.h3``;

    const SizeButtons = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    `;

    if (sizes) {
      return (
        <div>
          <SizeTitle>Top Sizes</SizeTitle>
          <SizeButtons>
            {sizes.map((size, id) => <Size size={size} key={id} />)}
            <GuideHolder>
              Fit Guide
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
