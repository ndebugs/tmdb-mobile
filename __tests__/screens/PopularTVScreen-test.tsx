import React from 'react';
import { render } from '@testing-library/react-native';
import PopularTVScreen from '../../src/screens/PopularTVScreen';

describe('<PopularTVScreen>', () => {
  it('has text', () => {
    const { getByTestId } = render(<PopularTVScreen />);
    const text = getByTestId('blankLabel');
    expect(text).not.toBeEmpty();
  });
});
