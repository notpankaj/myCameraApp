import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLORS} from '../helper/COLOR';
import {StyleSheet} from 'react-native';

interface Props {
  visible: boolean;
  onHide: () => void;
}
const WelcomePopup = ({visible, onHide}: Props) => {
  return (
    <View
      style={{
        display: visible ? 'flex' : 'none',
        flex: 1,
        backgroundColor: COLORS.primaryBg,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        height: '100%',
      }}>
      <View
        style={{
          backgroundColor: COLORS.white,
          borderRadius: 10,
          elevation: 1,
          width: '90%',
          height: 250,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 10}}>
          Welcome !
        </Text>
        <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 20}}>
          What would like to know ?
        </Text>

        <TouchableOpacity
          onPress={onHide}
          style={{
            // backgroundColor: COLORS.skyBlue,
            backgroundColor: COLORS.accent,
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            borderRadius: 10,
          }}>
          <Entypo color={COLORS.iconDark} name="camera" size={24} />
          <Text
            style={{
              marginLeft: 10,
              letterSpacing: 1,
              color: COLORS.white,
              fontSize: 16,
            }}>
            SCAN TO SOLVE{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomePopup;
