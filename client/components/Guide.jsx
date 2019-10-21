/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import FitGuide from './FitGuide';

class Guide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      location: 'US',
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

  updateLocation = (location) => {
    this.setState({
      location,
    });
  }

  render() {
    const {
      name, color, US, Int,
    } = this.props;

    const { location, show } = this.state;

    const ViewableGuide = location === 'US' ? <FitGuide chart={US} /> : <FitGuide chart={Int} />;

    const USSelected = location === 'US';
    const IntSelected = location === 'Int';

    return (
      <span>
        <Modal
          show={show}
          handleClose={this.hideModal}
          location={location}
        >
          <Header>Fit Guide</Header>
          <SmallerHeader>{`${name} in ${color}`}</SmallerHeader>
          <TabsBar>
            <Tab Selected={USSelected} onClick={() => this.updateLocation('US')}>US</Tab>
            <Tab Selected={IntSelected} onClick={() => this.updateLocation('Int')}>International</Tab>
          </TabsBar>
          <div>
            {ViewableGuide}
          </div>
          <Header footer>Try Multiple Sizes</Header>
          <SmallerHeader footer>
            Unsure about your perfect fit in DSTLD?
            Audition our denim in the comfort of your home with free shipping and returns.
          </SmallerHeader>
        </Modal>
        <Popout onClick={this.showModal}>Fit Guide</Popout>
      </span>
    );
  }
}

export default Guide;

const Header = styled.div`
font-family: Helvetica;
font-size: 18px;
font-weight: 400;
margin-bottom: 18px;
margin-top: ${(props) => (props.footer ? '5px' : '0px')}
`;

const SmallerHeader = styled.span`
font-family: Helvetica;
font-size: ${(props) => (props.footer ? '12px' : '14px')};
font-weight: ${(props) => (props.footer ? '300' : '700')};
padding-bottom: 10px;
`;

const TabsBar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
background-color: lightgrey;
`;

const Tab = styled.div`
width: 50%;
display: flex;
justify-content: center;
font-size: 11px;
font-family: Helvetica;
font-weight: 700;
text-decoration: ${(props) => (props.Selected === true ? 'underline' : 'none')};
`;

const Popout = styled.span`
  text-decoration: underline;
`;
