import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Button = ({
  text,
  style,
  ...rest
}: {text: string} & TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={[styles.btnContainer, style]} {...rest}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
