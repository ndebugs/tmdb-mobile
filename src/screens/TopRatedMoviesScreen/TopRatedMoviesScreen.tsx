import React from 'react';
import {
  View,
  Text,
} from 'react-native';

const TopRatedMoviesScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text testID="blankLabel">This is Top Rated Movies screen.</Text>
    </View>
  );
};

export default TopRatedMoviesScreen;
