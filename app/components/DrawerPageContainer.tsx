import {View, Keyboard, TouchableOpacity, Animated, SafeAreaView,StyleProp,ViewStyle} from 'react-native';
import React, {ReactNode, useRef, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BoldText} from './MyText';
import {COLORS} from '../helper/COLOR';
import AppIcon from './icons/AppIcon';
import BackBtn from './icons/BackBtn';

interface Props {
  children: ReactNode;
  onBack?: () => void;
  title: string;
  containerStyle? : StyleProp<ViewStyle>
}

const DrawerPageContainer = ({children, onBack, title,containerStyle}: Props) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  let keyboardDidShowListener = useRef<any>().current;
  let keyboardDidHideListener = useRef<any>().current;
  const opacityValue = useRef(new Animated.Value(1)).current;
  React.useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return (

    <SafeAreaView style={[{flex: 1, backgroundColor: COLORS.primaryBg},containerStyle]}>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(0,0,0,0.12)',
            width: 25,
            height: 25,
            borderRadius: 25,
            position: 'absolute',
            top: 35,
            left: 25,
            zIndex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={onBack}>
          <BackBtn iconStyle={{width: 25, height: 25}} />
          {/* <Ionicons name="chevron-back" size={24} color={COLORS.textLight} /> */}
        </TouchableOpacity>
        <View style={{paddingVertical: 20, alignItems: 'center'}}>
          <BoldText style={{fontSize: 30}} text={title} />
        </View>
      </View>
      {children}
      {/* <Text style={{textAlign: 'center', opacity: 0.6}}>App Verison 1.2.1</Text> */}
      <View style={{alignItems: 'center'}}>
        <AppIcon />
      </View>
    </SafeAreaView>
  );
};

export default DrawerPageContainer;
