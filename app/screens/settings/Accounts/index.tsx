import {View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import DrawerPageContainer from '../../../components/DrawerPageContainer';
import {useNavigation} from '@react-navigation/native';
import Input from '../../../components/Input';
import {COLORS} from '../../../helper/COLOR';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import GradientWrapper from '../../../components/GradientWrapper';
import {BoldText} from '../../../components/MyText';
import {RootStackParams} from '../../../navigation/types';

const AccountScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <DrawerPageContainer title="Accounts" onBack={navigation.goBack}>
      <View style={{paddingHorizontal: 20, flex: 0.9}}>
        <Input label="Email Addess" placeholder="Email" />
        <Input label="Password" placeholder="Password" />
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 10,
            marginBottom: 15,
            paddingHorizontal: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <GradientWrapper
              containerStyle={{
                borderRadius: 10,
                width: 150,
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <BoldText text={'LOGIN'} style={{color: COLORS.white}} />
            </GradientWrapper>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
            <GradientWrapper
              dark
              containerStyle={{
                borderRadius: 10,
                width: 170,
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <BoldText text={'SINGUP'} style={{color: COLORS.white}} />
            </GradientWrapper>
          </TouchableOpacity>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
              height: 2,
              backgroundColor: COLORS.textLight,
              position: 'absolute',
              top: 22,
            }}
          />
          <Text
            style={{
              color: COLORS.textLight,
              fontSize: 18,
              fontWeight: 'bold',
              margin: 10,
              backgroundColor: COLORS.primaryBg,
              textAlign: 'center',
              width: 250,
            }}>
            Signin with Google or Apple
          </Text>
        </View>
        <TouchableOpacity
          style={{marginBottom: 20}}
          onPress={() => navigation.navigate('ForgetPasswordScreen')}>
          <Text
            style={{
              color: COLORS.accentTwo,
              fontSize: 13,
              textAlign: 'center',
            }}>
            Forget Password ?
          </Text>
        </TouchableOpacity>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(0,0,0,0.1)',
              padding: 8,
              borderRadius: 25,
            }}>
            <Image
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
                borderRadius: 25,
              }}
              source={require('../../../../assets/icons/google.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(0,0,0,0.1)',
              padding: 8,
              borderRadius: 25,
            }}>
            <Image
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
                borderRadius: 25,
              }}
              source={require('../../../../assets/icons/apple.png')}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: COLORS.textDark,
            fontSize: 18,
            fontWeight: 'bold',
            margin: 10,
            textAlign: 'center',
          }}>
          Refer your friends to receive more attempts!
        </Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#fce3ff',
              borderRadius: 100,
              width: 150,
              height: 40,
              margin: 6,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: COLORS.accentOne,
            }}>
            <BoldText text="INVITE FRIEND" style={{fontSize: 14}} />
          </TouchableOpacity>
        </View>

        {/* <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
    
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue: boolean) => setToggleCheckBox(newValue)}
          />
          <Text
            style={{
              color: COLORS.textDark,
              fontSize: 13,
              fontWeight: 'bold',
              margin: 10,
            }}>
            By Continuing, you agree to the Terms of Services & Privacy Policy
          </Text>
        </View> */}
      </View>
    </DrawerPageContainer>
  );
};

export default AccountScreen;
