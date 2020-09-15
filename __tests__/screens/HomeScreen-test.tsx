import React from 'react';
import { shallow } from 'enzyme';
import HomeScreen from '../../src/screens/HomeScreen';

describe('<HomeScreen>', () => {
  it('should match snapshot', () => {
    const component = shallow(<HomeScreen />);
    expect(component).toMatchSnapshot();
  });
});
