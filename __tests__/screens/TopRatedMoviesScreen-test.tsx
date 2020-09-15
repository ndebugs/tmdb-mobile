import React from 'react';
import * as redux from 'react-redux';
import { shallow } from 'enzyme';
import TopRatedMoviesScreen from '../../src/screens/TopRatedMoviesScreen';

jest.mock("react-redux", () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: () => jest.fn()
}));

const spy = jest.spyOn(redux, 'useSelector');
spy.mockReturnValue({});

describe('<TopRatedMoviesScreen>', () => {
  it('should match snapshot', () => {
    const component = shallow(<TopRatedMoviesScreen />);
    expect(component).toMatchSnapshot();
  });
});
