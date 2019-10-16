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
padding-left: 3%;
display: inline;
`;

const BigDiv = styled.div`
display: flex;
flex-direction: row;
`;

const ImageHolder = styled.div`
width: 50%;
height: 100%;
display: inline;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:7000/item/7')
      .then((obj) => {
        this.setState({ item: obj.data });
        // eslint-disable-next-line no-console
        console.log(this.state.item);
      })
      .catch((err) => { console(err); });
  }

  render() {
    return (
      <BigDiv>
        <ImageHolder>
          <img src="https://d4zpg1jklewne.cloudfront.net/steak/spree-variant/ds-wkn-08-000-022-hgr-1552358116873/womens-french-terry-cropped-crew-in-heather-grey-product.jpg?1552358117" style={{ width: '100%' }} alt="" />
        </ImageHolder>
        <Wrapper>
          <Name name={this.state.item.itemName} />
          <Price
            price={this.state.item.itemPrice}
            afterpay={this.state.item.afterpayImage}
            retail={this.state.item.itemPrice * 3}
          />
          <Colors colors={this.state.item.itemColors} />
          <Sizes
            sizes={this.state.item.sizes}
            USA={this.state.item.sizeGuideUSA}
            INT={this.state.item.sizeGuideInt}
          />
          <Add />
          100% Guaranteed Fit. Free US Shipping + Returns.
        </Wrapper>
      </BigDiv>
    );
  }
}

export default App;
