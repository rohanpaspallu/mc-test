import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

const MyButtons = (props: any) => {
  const {
    style = null,
    labelStyle,
    onPress = () => {},
    disabled = false,
    text,
    mode = '',
  } = props;
  return (
    <Button
      mode={mode}
      onPress={onPress}
      style={[styles.defaultButtonStyle, style]}
      labelStyle={[styles.defaultLabelStyle, labelStyle]}>
      {text}
    </Button>
  );
};

const styles = StyleSheet.create({
  defaultButtonStyle: {
    width: '90%',
    paddingHorizontal: 24,
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom: 16,
  },
  defaultLabelStyle: {fontSize: 18},
});

export default MyButtons;
