import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../../src/screens/HomeScreen';

describe('<HomeScreen>', () => {
  it('has text', () => {
    const { getByTestId } = render(<HomeScreen />);
    const text = getByTestId('blankLabel');
    expect(text).not.toBeEmpty();
  });
});
