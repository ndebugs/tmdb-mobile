import React from 'react';
import { render } from '@testing-library/react-native';
import PopularMoviesScreen from '../../src/screens/PopularMoviesScreen';

describe('<PopularMoviesScreen>', () => {
  it('has text', () => {
    const { getByTestId } = render(<PopularMoviesScreen />);
    const text = getByTestId('blankLabel');
    expect(text).not.toBeEmpty();
  });
});
