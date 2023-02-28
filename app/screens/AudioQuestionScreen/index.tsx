import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../helper/COLOR';
import {BoldText, RegularText, SmallText} from '../../components/MyText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SheetManager} from 'react-native-actions-sheet';
import {GET_SUBSCRIPTION_SHEET} from '../../sheets/types';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import GradientWrapper from '../../components/GradientWrapper';
const CommonHeader = ({isDark}: {isDark?: boolean}) => {
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation?.dispatch(DrawerActions.openDrawer());
  };
  return (
    <View
      style={{
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={openDrawer}>
          <Ionicons name="settings-sharp" size={24} color={COLORS.textLight} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            SheetManager.show(GET_SUBSCRIPTION_SHEET);
          }}>
          <Text
            style={{
              marginLeft: 10,
              borderColor: COLORS.textLight,
              borderWidth: 0.9,
              borderRadius: 20,
              padding: 5,
              color: COLORS.textLight,
            }}>
            3 Scans Left
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', gap: 10}}>
        <GradientWrapper
          containerStyle={{
            borderRadius: 20,
            width: 45,
            height: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <SmallText
            style={{color: COLORS.white, fontSize: 9}}
            text={'PLUS +'}
          />
        </GradientWrapper>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.textLight,
            width: 25,
            height: 25,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome5 name="question" size={12} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const AudioQuestionScreen = () => {
  const [listening, setListening] = React.useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primaryBg,
        paddingHorizontal: 40,
      }}>
      <CommonHeader />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <BoldText
          text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, aut sequi velit quisquam blanditiis quaerat maxime consequuntur veniam facilis? Quia ab perspiciatis labore est modi maxime unde sint nisi magni.`}
        />
      </View>

      <Pressable
        onPressIn={() => setListening(true)}
        onPressOut={() => setListening(false)}
        style={{
          width: 75,
          height: 75,
          borderRadius: 75,
          borderWidth: listening ? 2 : 6,
          borderColor: COLORS.pinkBorder,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          alignSelf: 'center',
          marginBottom: 20,
        }}>
        {({pressed}) => {
          if (pressed) {
            return (
              <FontAwesome
                name="microphone-slash"
                size={35}
                color={COLORS.textDark}
              />
            );
          }
          return (
            <FontAwesome name="microphone" size={35} color={COLORS.textDark} />
          );
        }}
      </Pressable>

      <RegularText
        style={{textAlign: 'center'}}
        text={listening ? 'Let go when done!' : 'Hold when speek!'}
      />
    </View>
  );
};

export default AudioQuestionScreen;
