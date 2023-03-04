import {View, Text, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../helper/COLOR';

interface Props {
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  off?: boolean;
  dark?: boolean;
  reverse?: boolean;
}
const GradientWrapper = ({
  children,
  containerStyle,
  off,
  dark,
  reverse,
}: Props) => {
  if (off) {
    return <View style={containerStyle}>{children}</View>;
  }

  const colors = dark
    ? reverse
      ? [COLORS.textLight, COLORS.textDark]
      : [COLORS.textDark, COLORS.textLight]
    : reverse
    ? [COLORS.accentTwo, COLORS.accentOne]
    : [COLORS.accentOne, COLORS.accentTwo];
  return (
    <LinearGradient
      colors={colors}
      start={{x: 0, y: 0}}
      end={{x: dark ? 2 : 0.8, y: 0}}
      style={containerStyle}>
      {children}
    </LinearGradient>
  );
};

export default GradientWrapper;
