/* eslint-disable react/jsx-filename-extension */
/* eslint-disable func-names */
/* eslint-disable no-undef */

import React from 'react';
import { shallow, mount } from 'enzyme';
import Name from '../client/components/Name';
import App from '../client/components/App';
import Sizes from '../client/components/Sizes';
import Size from '../client/components/Size';

describe('Component: App', () => {
  const wrap = mount(<App />);
  it('should start with an empty state', () => {
    expect(wrap.state('selectedSizeID')).toEqual(null);
  });

  wrap.setState({ item: { sizes: ['xs', 's'] } });
  const sizes = wrap.find(Sizes);

  it('should pass correct props to children', () => {
    expect(sizes.props().sizes).toEqual(['xs', 's']);
  });

  const sizeButton = sizes.find(Size).first();
  sizeButton.simulate('click');
  it('sizes component should update Apps state when clicked', () => {
    expect(wrap.state('selectedSizeID')).toEqual(sizeButton.props().sizeID);
  });
});

describe('Component: Name', () => {
  it('should display the passed in name and color', () => {
    const wrapper = shallow(<Name name="Selam" color="Yellow" />);
    expect(wrapper.text()).toEqual('Selam in Yellow');
  });
});
