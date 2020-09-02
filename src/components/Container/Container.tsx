import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Snackbar } from 'react-native-paper';
import styles from './styles';

type Props = {
  error?: string
};

const Container: React.FunctionComponent<Props> = props => {
  const [hasError, setHasError] = useState(false);
  const onDismissSnackBar = () => {
    setHasError(false);
  };

  const { error } = props;
  useEffect(() => {
    if (error) {
      setHasError(true);
    }
  }, [error]);

  return (
    <View style={styles.container}>
      {props.children}
      <Snackbar
        style={styles.error}
        visible={hasError}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'OK',
          onPress: () => {
            setHasError(false);
          },
        }}>
        {error}
      </Snackbar>
    </View>
  );
};

export default Container;

