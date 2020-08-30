import React from 'react';
import { render } from '@testing-library/react-native';
import TopRatedTVScreen from '../../src/screens/TopRatedTVScreen';

describe('<TopRatedTVScreen>', () => {
  it('has text', () => {
    const { getByTestId } = render(<TopRatedTVScreen />);
    const text = getByTestId('blankLabel');
    expect(text).not.toBeEmpty();
  });
});
