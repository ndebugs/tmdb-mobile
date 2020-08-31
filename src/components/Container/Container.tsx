import React from 'react';
import { View } from 'react-native';
import styles from './styles';

type Props = {};

const Container: React.FunctionComponent<Props> = props => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
};

export default Container;

