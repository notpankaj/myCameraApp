import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import DrawerPageContainer from '../../../components/DrawerPageContainer';
import {useNavigation} from '@react-navigation/native';
import Input from '../../../components/Input';
import BtnV1 from '../../../components/BtnV1';
import {COLORS} from '../../../helper/COLOR';
import GradientWrapper from '../../../components/GradientWrapper';
import {BoldText} from '../../../components/MyText';
import CheckBox from '@react-native-community/checkbox';

const SignupScreen = () => {
  const navigation = useNavigation();

  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  return (
    <DrawerPageContainer title="Sign Up" onBack={navigation.goBack}>
      <View style={{paddingHorizontal: 20, flex: 0.9}}>
        <Input label="Email Addess" placeholder="*Email Address" />
        <Input label="Password" placeholder="*Password" />
        <Input label="Confirm Password" placeholder="*Confirm Password" />
        <Input label="Invitation Code" placeholder="Invitation Code" />
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 10,
          }}>
          {/* <BtnV1 text="Create" containerStyle={{marginLeft: 10, width: 100}} />
          <BtnV1 text="Cancel" containerStyle={{marginLeft: 10, width: 100}} /> */}

          <TouchableOpacity>
            <GradientWrapper
              containerStyle={{
                borderRadius: 60,
                width: 150,
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <BoldText text={'SIGNUP'} style={{color: COLORS.white}} />
            </GradientWrapper>
          </TouchableOpacity>

          <TouchableOpacity>
            <GradientWrapper
              dark
              containerStyle={{
                borderRadius: 60,
                width: 150,
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <BoldText text={'CANCEL'} style={{color: COLORS.white}} />
            </GradientWrapper>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {/* @ts-ignore */}
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
            By Continuing, you agree to the
            <Text style={{color: COLORS.accentOne}}>Terms of Services </Text> &
            <Text style={{color: COLORS.accentOne}}>Privacy Policy</Text>
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            margin: 10,
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: COLORS.textDark,
              fontSize: 15,
              fontWeight: 'bold',
              marginRight: 10,
            }}>
            Already have an Account ?
          </Text>

          <TouchableOpacity>
            <Text
              style={{
                color: COLORS.accentOne,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerPageContainer>
  );
};

export default SignupScreen;
