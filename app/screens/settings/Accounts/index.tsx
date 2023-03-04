import {View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import DrawerPageContainer from '../../../components/DrawerPageContainer';
import {useNavigation} from '@react-navigation/native';
import Input from '../../../components/Input';
import {COLORS} from '../../../helper/COLOR';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import GradientWrapper from '../../../components/GradientWrapper';
import {BoldText, RegularText} from '../../../components/MyText';
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
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 20,
            paddingHorizontal: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <GradientWrapper
              containerStyle={{
                borderRadius: 10,
                width: 120,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              reverse>
              <BoldText
                text={'LOGIN'}
                style={{color: COLORS.white, fontSize: 20}}
              />
            </GradientWrapper>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: 15}}
            onPress={() => navigation.navigate('ForgetPasswordScreen')}>
            <RegularText
              text="Forget Password?"
              bold
              style={{color: COLORS.accentOne}}
            />
          </TouchableOpacity>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
              height: 1.5,
              backgroundColor: 'rgba(0,0,0,0.1)',
              position: 'absolute',
              top: 17,
            }}
          />
          <RegularText
            text="Signin with Google or Apple"
            bold
            style={{
              fontSize: 17,
              color: COLORS.textLight,
              textAlign: 'center',
              backgroundColor: COLORS.primaryBg,
              paddingHorizontal: 10,
              marginBottom: 20,
            }}
          />
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(0,0,0,0.05)',
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
              backgroundColor: 'rgba(0,0,0,0.05)',
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
        <RegularText
          text="New User? Create an Account"
          bold
          style={{
            fontSize: 17,
            color: COLORS.textLight,
            textAlign: 'center',
            marginVertical: 20,
          }}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('SignupScreen')}
          style={{width: 120, alignSelf: 'center'}}>
          <BoldText
            text={'SINGUP'}
            style={{
              fontSize: 19,
              backgroundColor: 'rgba(0,0,0,0.1)',
              borderRadius: 5,
              textAlign: 'center',
            }}
          />
        </TouchableOpacity>
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
