import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import DrawerPageContainer from '../../../components/DrawerPageContainer';
import {useNavigation} from '@react-navigation/native';
import Input from '../../../components/Input';

import {COLORS} from '../../../helper/COLOR';
import GradientWrapper from '../../../components/GradientWrapper';
import {BoldText, RegularText} from '../../../components/MyText';
import CheckBox from '@react-native-community/checkbox';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../../navigation/types';
import {FONTS} from '../../../../assets/fonts';

const SignupScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  return (
    <DrawerPageContainer titleStyle={{fontWeight:'normal'}}  title="Sign Up" onBack={navigation.goBack} containerStyle={{backgroundColor:COLORS.white}}>
      <View style={{paddingHorizontal: 20, flex: 0.9}}>
        <View style={{flexDirection: 'row'}}>
          <Input inputStyle={styles.input}
            inputWrapperStyle={{
              flex: 1,
            }}
            label="Email Addess"
            placeholder="*First Name"
          />
          <Input inputStyle={styles.input}
            inputWrapperStyle={{
              flex: 1,
            }}
            label="Email Addess"
            placeholder="*Last Name"
          />
        </View>
        <Input inputStyle={styles.input} label="Email Addess" placeholder="*Email Address" />
        <Input inputStyle={styles.input} label="Password" placeholder="*Password" />
        <Input inputStyle={styles.input} label="Confirm Password" placeholder="*Confirm Password" />
        <Input inputStyle={styles.input} label="Invitation Code" placeholder="Referrer Code" />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {/* @ts-ignore */}
          <CheckBox
            tintColors={{true: COLORS.accentTwo, false: COLORS.textLight}}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue: boolean) => setToggleCheckBox(newValue)}
          />
          <Text
            style={{
              color: COLORS.textDark,
              fontSize: 15,
              margin: 10,
              marginRight: 30,
              fontFamily: FONTS.Poppins,
            }}>
            By Continuing, you agree to the
            <Text style={{color: COLORS.accentOne}}>Terms of Services </Text> &
            <Text style={{color: COLORS.accentOne}}> Privacy Policy</Text>
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 10,
            gap: 20,
          }}>
          <TouchableOpacity onPress={navigation.goBack}>
            <GradientWrapper
              containerStyle={{
                borderRadius: 10,
                width: 110,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              reverse>
              <RegularText
                text={'CREATE'}
                style={{color: COLORS.white, fontSize: 18}}
              />
            </GradientWrapper>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigation.goBack}>
            <View
              style={{
                borderRadius: 10,
                width: 110,
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.12)',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <RegularText
                text={'CANCEL'}
                style={{color: COLORS.textDark, fontSize: 18}}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            margin: 10,
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <RegularText text="Already have an Account ?" />
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <RegularText
              text={'Login'}
              style={{color: COLORS.accentOne, textDecorationLine: 'underline'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </DrawerPageContainer>
  );
};

export default SignupScreen;


const styles = StyleSheet.create({
  input :{
    height: 55
  }
})