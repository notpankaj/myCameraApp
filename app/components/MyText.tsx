import {Text, StyleProp, TextStyle} from 'react-native';
import React from 'react';
import {FONTS} from '../../assets/fonts';
import {COLORS} from '../helper/COLOR';

type TextProps = {
  text: string;
  style?: StyleProp<TextStyle>;
  bold?: boolean;
};


const FONT_FAMILY = FONTS.Ubuntu
export const BoldText = ({text, style}: TextProps) => {
  return (
    <Text
      style={[
        {
          fontSize: 18,
          fontWeight: 'bold',
          padding: 5,
          color: COLORS.textDark,
          fontFamily: FONT_FAMILY,
        },
        style,
      ]}>
      {text}
    </Text>
  );
};

export const RegularText = ({text, style, bold}: TextProps) => {
  return (
    <Text
      style={[
        {
          fontSize: 15,
          padding: 5,
          color: COLORS.textDark,
          fontFamily: FONT_FAMILY,
          fontWeight: bold ? 'bold' : 'normal',
        },
        
        style,
      ]}>
      {text}
    </Text>
  );
};
export const SmallText = ({text, style, bold}: TextProps) => {
  return (
    <Text
      style={[
        {
          color: COLORS.textLight,
          fontSize: 11,
          padding: 5,
          fontFamily: FONT_FAMILY,
          fontWeight: bold ? 'bold' : 'normal',
        },
        style,
      ]}>
      {text}
    </Text>
  );
};
