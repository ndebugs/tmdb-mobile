import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TopRatedTVScreen, PopularTVScreen } from '../screens';

const routes = [
  {
    name: "TopRatedTV",
    label: "Top Rated",
    icon: "star-circle",
    component: TopRatedTVScreen
  },
  {
    name: "PopularTV",
    label: "Popular",
    icon: "octagram",
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

export default TVNavigation;
