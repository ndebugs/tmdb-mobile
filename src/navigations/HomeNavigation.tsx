import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from '../components';
import { HomeScreen } from '../screens';
import MoviesNavigation from './MoviesNavigation';
import TVNavigation from './TVNavigation';

const routes = [
  {
    name: "Home",
    label: "Home",
    icon: "home",
    component: HomeScreen
  },
  {
    name: "Movies",
    label: "Movies",
    icon: "movie-open",
    component: MoviesNavigation
  },
  {
    name: "TV",
    label: "TV",
    icon: "television-classic",
    component: TVNavigation
  }
];

const Drawer = createDrawerNavigator();

const HomeNavigation = () => {
  return (
    <Drawer.Navigator
      backBehavior="initialRoute"
      drawerContent={(props) => <DrawerContent {...props} routes={routes} />}>
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
