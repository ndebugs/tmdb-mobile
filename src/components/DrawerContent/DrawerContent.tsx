import React from 'react';
import { ImageBackground, ScrollView, Text } from 'react-native';
import { Drawer } from 'react-native-paper';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { LOGO_SHORT } from '../../images';
import styles from './styles';

type Route = {
  name: string,
  label: string,
  icon: string
}

type Props = DrawerScreenProps<any, any> & {
  routes: Route[]
};

const DrawerContent: React.FunctionComponent<Props> = props => {
  const { navigation } = props;
  return (
    <ScrollView style={styles.container}>
      <ImageBackground resizeMode="contain" style={styles.image} source={LOGO_SHORT}></ImageBackground>
      {props.routes.map((route: Route, index: number) =>
        <Drawer.Item
          key={index}
          icon={route.icon}
          label={route.label}
          onPress={() => navigation.navigate(route.name)}
        />
      )}
    </ScrollView>
  );
};

export default DrawerContent;

