import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TopRatedTVScreen, PopularTVScreen } from '../screens';

const routes = [
  {
    name: "TopRatedTV",
    label: "Top Rated",
    component: TopRatedTVScreen
  },
  {
    name: "PopularTV",
    label: "Popular",
    component: PopularTVScreen
  }
];

const Tab = createBottomTabNavigator();

const TVNavigation = () => {
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

export default TVNavigation;
