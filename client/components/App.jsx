/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import Name from './Name.jsx';
import Price from './Price.jsx';
import Colors from './Colors.jsx';
import Sizes from './Sizes.jsx';
import Add from './Add.jsx';

const Wrapper = styled.div`
padding-left: 2%;
padding-right: 20%;
display: inline;
`;

const BigDiv = styled.div`
display: flex;
flex-direction: row;
`;

const ImageHolder = styled.div`
width: 50%;
padding-left: 10%;
padding-right: 2%;
height: 100%;
display: inline;
`;

const ClosingText = styled.span`
font-family: Helvetica;
color: #0a0a0a;
font-weight: 300;
font-size: 12px;
letter-spacing: .5px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      selectedColor: null,
      selectedColorID: null,
      selectedSizeID: null,
    };
    this.updateColor = this.updateColor.bind(this);
    this.updateSize = this.updateSize.bind(this);
  }

  componentDidMount() {
    Axios.get('http://localhost:7000/item/77')
      .then((obj) => {
        this.setState({ item: obj.data, selectedColor: obj.data.itemColors[0].colorName, selectedColorID: 0 });
        // eslint-disable-next-line no-console
        console.log(this.state.item);
      })
      .catch((err) => { console(err); });
  }

  updateColor(id) {
    const { itemColors } = this.state.item;
    const newColor = itemColors[id];
    this.setState({
      selectedColor: newColor.colorName,
      selectedColorID: id,
    });
  }

  updateSize(id) {
    this.setState({ selectedSizeID: id });
  }

  render() {
    return (
      <BigDiv>
        <ImageHolder>
          <img src="https://d4zpg1jklewne.cloudfront.net/steak/spree-variant/ds-wkn-08-000-022-hgr-1552358116873/womens-french-terry-cropped-crew-in-heather-grey-product.jpg?1552358117" style={{ width: '100%' }} alt="" />
        </ImageHolder>
        <Wrapper>
          <Name name={this.state.item.itemName} color={this.state.selectedColor} />
          <Price
            price={this.state.item.itemPrice}
            afterpay={this.state.item.afterpayImage}
            retail={this.state.item.itemPrice * 3}
          />
          <Colors
            colors={this.state.item.itemColors}
            selectedColorID={this.state.selectedColorID}
            updateColor={this.updateColor}
          />
          <Sizes
            sizes={this.state.item.sizes}
            USA={this.state.item.sizeGuideUSA}
            INT={this.state.item.sizeGuideInt}
            selectedSizeID={this.state.selectedSizeID}
            updateSize={this.updateSize}
          />
          <Add />
          <ClosingText>100% Guaranteed Fit. Free US Shipping + Returns.</ClosingText>
        </Wrapper>
      </BigDiv>
    );
  }
}

export default App;
