import React from 'react';
import * as redux from 'react-redux';
import { shallow } from 'enzyme';
import TopRatedTVScreen from '../../src/screens/TopRatedTVScreen';

jest.mock("react-redux", () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: () => jest.fn()
}));

const spy = jest.spyOn(redux, 'useSelector');
spy.mockReturnValue({});

describe('<TopRatedTVScreen>', () => {
  it('should match snapshot', () => {
    const component = shallow(<TopRatedTVScreen />);
    expect(component).toMatchSnapshot();
  });
});
