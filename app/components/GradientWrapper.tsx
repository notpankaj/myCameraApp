import {View, Text, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../helper/COLOR';

interface Props {
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  off?: boolean;
  dark?: boolean;
}
const GradientWrapper = ({children, containerStyle, off, dark}: Props) => {
  if (off) {
    return <View style={containerStyle}>{children}</View>;
  }
  return (
    <LinearGradient
      colors={
        dark
          ? [COLORS.textDark, COLORS.textLight]
          : [COLORS.accentOne, COLORS.accentTwo]
      }
      start={{x: 0, y: 0}}
      end={{x: dark ? 2 : 0.8, y: 0}}
      style={containerStyle}>
      {children}
    </LinearGradient>
  );
};

export default GradientWrapper;
