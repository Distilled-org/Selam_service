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
    Axios.get(`http://localhost:7000/item/${(Math.floor(Math.random() * Math.floor(99))) + 1}`)
      .then((obj) => {
        this.setState({ item: obj.data, selectedColor: obj.data.itemColors[0].colorName, selectedColorID: 0 });
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
          US={this.state.item.sizeGuideUSA}
          Int={this.state.item.sizeGuideInt}
          selectedSizeID={this.state.selectedSizeID}
          updateSize={this.updateSize}
          name={this.state.item.itemName}
          color={this.state.selectedColor}
        />
        <Add />
        <ClosingText>100% Guaranteed Fit. Free US Shipping + Returns.</ClosingText>
      </Wrapper>
    );
  }
}

export default App;

const Wrapper = styled.div`
display: inline;
width: 100%;
`;

const ClosingText = styled.span`
font-family: Helvetica;
color: #0a0a0a;
font-weight: 300;
font-size: 12px;
letter-spacing: .5px;
`;
