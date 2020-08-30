import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TopRatedMoviesScreen, PopularMoviesScreen } from '../screens';

const routes = [
  {
    name: "TopRatedMovies",
    label: "Top Rated",
    icon: "star-circle",
    component: TopRatedMoviesScreen
  },
  {
    name: "PopularMovies",
    label: "Popular",
    icon: "octagram",
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
          options={{
            tabBarLabel: route.label,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name={route.icon} color={color} size={size} />
            )
          }} />
      )}
    </Tab.Navigator>
  );
};

export default MoviesNavigation;
