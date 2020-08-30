import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Container, Header } from '../../components';

const HomeScreen = () => {
  return (
    <Container>
      <Header title="Home" />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text testID="blankLabel">This is Home screen.</Text>
      </View>
    </Container>
  );
};

export default HomeScreen;
