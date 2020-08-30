import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Container, Header } from '../../components';

const TopRatedMoviesScreen = () => {
  return (
    <Container>
      <Header title="Movies" />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text testID="blankLabel">This is Top Rated Movies screen.</Text>
      </View>
    </Container>
  );
};

export default TopRatedMoviesScreen;
