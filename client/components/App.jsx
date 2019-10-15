/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import Name from './Name.jsx';
import Price from './Price.jsx';


const Wrapper = styled.section`
width: 50%;
padding-left: 50%;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:7000/item/3')
      .then((obj) => {
        this.setState({ item: obj.data });
        // eslint-disable-next-line no-console
        console.log(this.state.item);
      })
      .catch((err) => { console(err); });
  }

  render() {
    return (
      <Wrapper>
        <Name name={this.state.item.itemName} />
        <Price
          price={this.state.item.itemPrice}
          afterpay={this.state.item.afterpayImage}
          retail={this.state.item.itemPrice * 3}
        />
        {/* <div>{this.state.item.itemColors}</div> */}
        <div>{this.state.item.sizes}</div>
        <div>{this.state.item.sizeGuideUSA}</div>
      </Wrapper>
    );
  }
}

export default App;
