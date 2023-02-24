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
const BtnV1 = ({onPress, text, containerStyle, textStyle}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: COLORS.skyblue,
          borderRadius: 10,
          paddingHorizontal: 12,
          paddingVertical: 15,
        },
        containerStyle,
      ]}>
      <Text
        style={[
          {
            textAlign: 'center',
            color: COLORS.white,
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

export default BtnV1;
