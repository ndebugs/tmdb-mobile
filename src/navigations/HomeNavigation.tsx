import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens';
import MoviesNavigation from './MoviesNavigation';
import TVNavigation from './TVNavigation';

const routes = [
  {
    name: "Home",
    component: HomeScreen
  },
  {
    name: "Movies",
    component: MoviesNavigation
  },
  {
    name: "TV",
    component: TVNavigation
  }
];

const Drawer = createDrawerNavigator();

const HomeNavigation = () => {
  return (
    <Drawer.Navigator
      backBehavior="initialRoute">
      {routes.map((route, index) =>
        <Drawer.Screen
          key={index}
          name={route.name}
          component={route.component} />
      )}
    </Drawer.Navigator>
  );
};

export default HomeNavigation;
