import {
  TouchableOpacity,
  Text,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {COLORS} from '../helper/COLOR';

type Props = {
  onPress?: () => void;
  text: string;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};
const BtnV2 = ({onPress, text, containerStyle, textStyle}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          width: 100,
          backgroundColor: COLORS.white,
          borderRadius: 10,
          borderColor: COLORS.textDark,
          borderWidth: 0.4,
          paddingHorizontal: 12,
          paddingVertical: 15,
        },
        containerStyle,
      ]}>
      <Text
        style={[
          {
            textAlign: 'center',
            color: COLORS.textDark,
            fontWeight: 'bold',
            fontSize: 17,
            letterSpacing: 1,
          },
          textStyle,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default BtnV2;
