import {View, Text, Animated, Image} from 'react-native';
import React, {useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../helper/COLOR';
import {APP_NAME} from '../../helper/constants';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';

const LOGO_SIZE = 150;

type Props = {
  hideSplash: () => void;
};
const SplashScreen = ({hideSplash}: Props) => {
  // const navigation =
  //   useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const logoHeightValue = useRef(new Animated.Value(0)).current;
  const textHeightValue = useRef(new Animated.Value(0)).current;

  const revealStart = () => {
    Animated.parallel([
      Animated.timing(logoHeightValue, {
        toValue: LOGO_SIZE,
        duration: 1500,
        useNativeDriver: false,
      }),
      Animated.timing(textHeightValue, {
        toValue: 50,
        duration: 1500,
        useNativeDriver: false,
      }),
    ]).start(() => {
      setTimeout(() => {
        // navigation.navigate('Drawer');
        // hideSplash();
      }, 500);
    });
  };

  const hide = () => {
    Animated.parallel([
      Animated.timing(logoHeightValue, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: false,
      }),
      Animated.timing(textHeightValue, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: false,
      }),
    ]).start(() => {});
  };
  React.useEffect(() => {
    revealStart();
  }, []);
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={[COLORS.SPLASH_START, COLORS.SPLASH_END]}
        start={{x: 1, y: 1}}
        end={{x: 1, y: 0.5}}
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Animated.View
            style={{
              width: LOGO_SIZE,
              height: logoHeightValue,
              // backgroundColor: 'blue',
              position: 'absolute',
              // bottom: '50%',
              overflow: 'hidden',
            }}>
            <Image
              style={{width: LOGO_SIZE, height: LOGO_SIZE}}
              source={require('../../../assets/icons/applogo-one.png')}
            />
          </Animated.View>
          {/* <Animated.View
            style={{
              position: 'absolute',
              bottom: '50%',
              height: textHeightValue,
              justifyContent: 'center',
              alignItems: 'center',
              //   backgroundColor: 'red',
              transform: [{translateY: 50}],
            }}>
            <Text
              style={{
                fontSize: 40,
                color: COLORS.white,
                fontWeight: 'bold',
              }}>
              {APP_NAME}
            </Text>
          </Animated.View> */}
        </View>
      </LinearGradient>
    </View>
  );
};

export default SplashScreen;
