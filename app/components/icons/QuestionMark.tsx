import React from 'react';
import {Image, ImageStyle} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {StyleSheet, StyleProp, ViewStyle, TouchableOpacity} from 'react-native';
import {COLORS} from '../../helper/COLOR';
type Props = {
  iconStyle?: StyleProp<ImageStyle>;
  isDark?: boolean;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
};
const QuestionMark = ({iconStyle, isDark, onPress, containerStyle}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.iconContainer,
        containerStyle,
        {backgroundColor: isDark ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.9)'},
      ]}>
      <FontAwesome5
        name="question"
        size={14}
        color={isDark ? COLORS.white : COLORS.textDark}
      />
    </TouchableOpacity>
  );
};

export default QuestionMark;

const CONTAINER_SIZE = 25;
const styles = StyleSheet.create({
  iconContainer: {
    width: CONTAINER_SIZE,
    height: CONTAINER_SIZE,

    borderRadius: CONTAINER_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {},
});
