import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import DrawerPageContainer from '../../../components/DrawerPageContainer';
import {useNavigation} from '@react-navigation/native';
import Input from '../../../components/Input';
import BtnV1 from '../../../components/BtnV1';
import {COLORS} from '../../../helper/COLOR';

const SignupScreen = () => {
  const navigation = useNavigation();
  return (
    <DrawerPageContainer title="Sign Up" onBack={navigation.goBack}>
      <View style={{paddingHorizontal: 20, flex: 0.9}}>
        <Input label="Email Addess" placeholder="abc@gmail.com" />
        <Input label="Password" placeholder="********" />
        <Input label="Confirm Password" placeholder="********" />
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <BtnV1 text="Create" containerStyle={{marginLeft: 10, width: 100}} />
          <BtnV1 text="Cancel" containerStyle={{marginLeft: 10, width: 100}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            margin: 10,
            marginTop: 20,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: COLORS.text,
              fontSize: 15,
              fontWeight: 'bold',
              marginRight: 10,
            }}>
            Already have an Account ?
          </Text>

          <TouchableOpacity>
            <Text
              style={{color: COLORS.skyblue, fontSize: 18, fontWeight: 'bold'}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerPageContainer>
  );
};

export default SignupScreen;
