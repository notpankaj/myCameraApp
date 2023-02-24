import {View, Text, StyleProp, TextStyle} from 'react-native';
import React from 'react';

type TextProps = {
  text: string;
  style?: StyleProp<TextStyle>;
};

export const BoldText = ({text, style}: TextProps) => {
  return (
    <Text
      style={[
        {
          fontSize: 18,
          fontWeight: 'bold',
          padding: 5,
        },
        style,
      ]}>
      {text}
    </Text>
  );
};

export const RegularText = ({text, style}: TextProps) => {
  return (
    <Text
      style={[
        {
          fontSize: 15,
          padding: 5,
        },
        style,
      ]}>
      {text}
    </Text>
  );
};
export const SmallText = ({text, style}: TextProps) => {
  return (
    <Text
      style={[
        {
          fontSize: 11,
          padding: 5,
        },
        style,
      ]}>
      {text}
    </Text>
  );
};
