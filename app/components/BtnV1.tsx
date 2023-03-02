import {
  TouchableOpacity,
  Text,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {COLORS} from '../helper/COLOR';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  onPress?: () => void;
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
};
const BtnV1 = ({onPress, containerStyle, children}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      <LinearGradient
        colors={['#c354ec', '#e43af5']}
        start={{x: 0, y: 0}}
        end={{x: 0.8, y: 0}}
        style={containerStyle}>
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default BtnV1;
