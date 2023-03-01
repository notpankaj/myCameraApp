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
        <View style={{flexDirection: 'row'}}>
          <Input
            inputWrapperStyle={{
              flex: 1,
            }}
            label="Email Addess"
            placeholder="*First Name"
          />
          <Input
            inputWrapperStyle={{
              flex: 1,
            }}
            label="Email Addess"
            placeholder="*Last Name"
          />
        </View>
        <Input label="Email Addess" placeholder="*Email Address" />
        <Input label="Password" placeholder="*Password" />
        <Input label="Confirm Password" placeholder="*Confirm Password" />
        <Input label="Invitation Code" placeholder="Referrer Code" />
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
                borderRadius: 10,
                width: 150,
                height: 45,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <BoldText text={'CREATE'} style={{color: COLORS.white}} />
            </GradientWrapper>
          </TouchableOpacity>

          <TouchableOpacity>
            <GradientWrapper
              dark
              containerStyle={{
                borderRadius: 10,
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
              fontSize: 15,
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
            <GradientWrapper
              containerStyle={{
                width: 90,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                Login
              </Text>
            </GradientWrapper>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerPageContainer>
  );
};

export default SignupScreen;
