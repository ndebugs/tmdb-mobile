import React from 'react';
import * as redux from 'react-redux';
import { shallow } from 'enzyme';
import PopularMoviesScreen from '../../src/screens/PopularMoviesScreen';

jest.mock("react-redux", () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: () => jest.fn()
}));

const spy = jest.spyOn(redux, 'useSelector');
spy.mockReturnValue({});

describe('<PopularMoviesScreen>', () => {
  it('should match snapshot', () => {
    const component = shallow(<PopularMoviesScreen />);
    expect(component).toMatchSnapshot();
  });
});
