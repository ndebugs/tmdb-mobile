import React from 'react';
import {
  View,
  Text,
} from 'react-native';

const PopularMoviesScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text testID="blankLabel">This is Popular Movies screen.</Text>
    </View>
  );
};

export default PopularMoviesScreen;
