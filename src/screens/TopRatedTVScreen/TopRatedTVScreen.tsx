import React from 'react';
import {
  View,
  Text,
} from 'react-native';

const TopRatedTVScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text testID="blankLabel">This is Top Rated TV screen.</Text>
    </View>
  );
};

export default TopRatedTVScreen;
