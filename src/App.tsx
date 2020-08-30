import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './navigations/HomeNavigation';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <HomeNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
