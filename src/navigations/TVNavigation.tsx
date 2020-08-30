import React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { TopRatedTVScreen, PopularTVScreen } from '../screens';

const plainRoutes = [
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

const TVNavigation = () => {
  const [index, setIndex] = React.useState(0);

  let scenes = {};
  const [routes] = React.useState(plainRoutes.map(value => {
    scenes = { ...scenes, [value.name]: value.component };
    return {key: value.name, title: value.label, icon: value.icon};
  }));

  const renderScene = BottomNavigation.SceneMap(scenes);

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default TVNavigation;
