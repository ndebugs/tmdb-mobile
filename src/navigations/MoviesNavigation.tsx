import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TopRatedMoviesScreen, PopularMoviesScreen } from '../screens';

const routes = [
  {
    name: "TopRatedMovies",
    label: "Top Rated",
    component: TopRatedMoviesScreen
  },
  {
    name: "PopularMovies",
    label: "Popular",
    component: PopularMoviesScreen
  }
];

const Tab = createBottomTabNavigator();

const MoviesNavigation = () => {
  return (
    <Tab.Navigator>
      {routes.map((route, index) =>
        <Tab.Screen
          key={index}
          name={route.name}
          component={route.component}
          options={{ tabBarLabel: route.label }} />
      )}
    </Tab.Navigator>
  );
};

export default MoviesNavigation;
