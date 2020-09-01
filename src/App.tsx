import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './navigations/HomeNavigation';
import { PRIMARY_COLOR, SECONDARY_COLOR } from './constants/theme';
import SplashScreen from 'react-native-splash-screen';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: PRIMARY_COLOR,
    accent: SECONDARY_COLOR,
  }
};

const App = () => {
  useEffect(() => SplashScreen.hide(), []);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <HomeNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
