import React from 'react';
import {
  View,
  Text,
} from 'react-native';

const PopularTVScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text testID="blankLabel">This is Popular TV screen.</Text>
    </View>
  );
};

export default PopularTVScreen;
