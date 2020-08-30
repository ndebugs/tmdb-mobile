import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './navigations/HomeNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <HomeNavigation />
    </NavigationContainer>
  );
};

export default App;
