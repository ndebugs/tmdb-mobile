import React from 'react';
import { Appbar } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';

type Props = {
  title?: string
};

const Header: React.FunctionComponent<Props> = props => {
  const navigation = useNavigation();
  return (
    <Appbar.Header>
      {typeof navigation.toggleDrawer === 'function' &&
        <Appbar.Action
          icon="menu"
          onPress={() => navigation.toggleDrawer()}
        />
      }
      {props.title && <Appbar.Content title={props.title} />}
    </Appbar.Header>
  );
};

export default Header;

