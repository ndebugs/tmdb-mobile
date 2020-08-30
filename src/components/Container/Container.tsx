import React from 'react';
import { View } from 'react-native';

type Props = {};

const Container: React.FunctionComponent<Props> = props => {
  return (
    <View style={{ flex: 1 }}>
      {props.children}
    </View>
  );
};

export default Container;

