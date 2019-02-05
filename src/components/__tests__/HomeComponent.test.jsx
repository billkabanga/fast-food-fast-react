import React from 'react';
import { shallow } from 'enzyme';
import Home from '../HomeComponent';


describe('Home Page', () => {
  const wrapper = shallow(<Home/>);

  it('renders home page successfully', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
