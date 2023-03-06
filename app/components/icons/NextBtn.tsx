import {View, Text, StyleProp, StyleSheet} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {ImageStyle} from 'react-native';
type Props = {
  iconStyle?: StyleProp<ImageStyle>;
};
const NextBtn = ({iconStyle}: Props) => {
  return (
    <Image
      style={[{height: 30, width: 30, resizeMode: 'contain'}, iconStyle]}
      source={require('../../../assets/icons/arrowRight.png')}
    />
  );
};

export default NextBtn;
