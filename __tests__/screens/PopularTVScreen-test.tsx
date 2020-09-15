import React from 'react';
import * as redux from 'react-redux';
import { shallow } from 'enzyme';
import PopularTVScreen from '../../src/screens/PopularTVScreen';

jest.mock("react-redux", () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: () => jest.fn()
}));

const spy = jest.spyOn(redux, 'useSelector');
spy.mockReturnValue({});

describe('<PopularTVScreen>', () => {
  it('should match snapshot', () => {
    const component = shallow(<PopularTVScreen />);
    expect(component).toMatchSnapshot();
  });
});
