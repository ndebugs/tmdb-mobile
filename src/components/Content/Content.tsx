import React from 'react';
import { View } from 'react-native';
import styles from './styles';

type Props = {};

const Content: React.FunctionComponent<Props> = props => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
};

export default Content;

