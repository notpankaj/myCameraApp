import { View, Text, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SheetManager } from 'react-native-actions-sheet';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { GET_SUBSCRIPTION_SHEET } from '../sheets/types';
import { COLORS } from '../helper/COLOR';
import { SmallText } from './MyText';
import BtnV1 from './BtnV1';

const CommonHeader = ({ isLight }: { isLight?: boolean }) => {
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation?.dispatch(DrawerActions.openDrawer());
  };
  return (
    <SafeAreaView style={{
      backgroundColor: isLight ? COLORS.primaryBg : COLORS.transparentBlack,
    }}>
      <View
        style={[{
          padding: 15,
          paddingVertical: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }, Platform.OS === 'ios' ? {} : {
          backgroundColor: isLight ? COLORS.primaryBg : COLORS.transparentBlack,
        }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={openDrawer}>
            <Ionicons
              name="settings-sharp"
              size={24}
              color={isLight ? COLORS.textLight : COLORS.white}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              SheetManager.show(GET_SUBSCRIPTION_SHEET);
            }}>
            <Text
              style={{
                marginLeft: 10,
                borderColor: isLight ? COLORS.textLight : COLORS.white,
                borderWidth: 0.9,
                borderRadius: 5,
                color: isLight ? COLORS.textLight : COLORS.white,
                padding: 5,
                paddingHorizontal: 12,
              }}>
              3 Scans Left
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <BtnV1 containerStyle={{ padding: 1, borderRadius: 5 }}>
            <SmallText
              bold
              style={{ color: COLORS.white, fontSize: 11, paddingHorizontal: 12 }}
              text={'plus +'}
            />
          </BtnV1>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.white,
              width: 25,
              height: 25,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesome5 name="question" size={12} color={COLORS.textLight} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CommonHeader;
