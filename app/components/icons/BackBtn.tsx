import React from 'react';
import {Image, StyleProp} from 'react-native';

import {ImageStyle} from 'react-native';
type Props = {
  iconStyle?: StyleProp<ImageStyle>;
};
const BackBtn = ({iconStyle}: Props) => {
  return (
    <Image
      style={[
        {
          height: 30,
          width: 30,
          resizeMode: 'contain',
          transform: [{rotate: '180deg'}],
        },
        iconStyle,
      ]}
      source={require('../../../assets/icons/arrowRight.png')}
    />
  );
};

export default BackBtn;
