import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Container, Header } from '../../components';

const PopularTVScreen = () => {
  return (
    <Container>
      <Header title="TV" />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text testID="blankLabel">This is Popular TV screen.</Text>
      </View>
    </Container>
  );
};

export default PopularTVScreen;
