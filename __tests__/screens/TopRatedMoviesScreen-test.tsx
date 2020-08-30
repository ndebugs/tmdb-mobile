import React from 'react';
import { render } from '@testing-library/react-native';
import TopRatedMoviesScreen from '../../src/screens/TopRatedMoviesScreen';

describe('<TopRatedMoviesScreen>', () => {
  it('has text', () => {
    const { getByTestId } = render(<TopRatedMoviesScreen />);
    const text = getByTestId('blankLabel');
    expect(text).not.toBeEmpty();
  });
});
