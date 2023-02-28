import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SheetManager} from 'react-native-actions-sheet';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {GET_SUBSCRIPTION_SHEET} from '../sheets/types';
import {COLORS} from '../helper/COLOR';
import GradientWrapper from './GradientWrapper';
import {SmallText} from './MyText';

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

export default CommonHeader;
