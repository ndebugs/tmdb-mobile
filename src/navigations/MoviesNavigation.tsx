import React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { TopRatedMoviesScreen, PopularMoviesScreen } from '../screens';

const plainRoutes = [
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

const MoviesNavigation = () => {
  const [index, setIndex] = React.useState(0);

  let scenes = {};
  const [routes] = React.useState(plainRoutes.map(value => {
    scenes = { ...scenes, [value.name]: value.component };
    return { key: value.name, title: value.label, icon: value.icon };
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

export default MoviesNavigation;
