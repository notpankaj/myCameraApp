import {Image} from 'react-native';
import React from 'react';

const AppIcon = ({size}: {size?: number}) => {
  const width = size ? size : 50;
  const height = size ? size : 50;
  return (
    <Image
      style={{width, height, resizeMode: 'contain'}}
      source={require('../../../assets/icons/applogo-two.png')}
    />
  );
};

export default AppIcon;
