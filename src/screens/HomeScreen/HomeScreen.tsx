import React from 'react';
import {
  View,
  Text,
} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text testID="blankLabel">This is Home screen.</Text>
    </View>
  );
};

export default HomeScreen;
