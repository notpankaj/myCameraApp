import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import DrawerPageContainer from '../../../components/DrawerPageContainer';
import {useNavigation} from '@react-navigation/native';
import Input from '../../../components/Input';
import {COLORS} from '../../../helper/COLOR';
import GradientWrapper from '../../../components/GradientWrapper';
import {BoldText} from '../../../components/MyText';
import CheckBox from '@react-native-community/checkbox';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <DrawerPageContainer title="Account" onBack={navigation.goBack}>
      <View style={{paddingHorizontal: 20, flex: 0.9}}>
        <Input label="Email Addess" placeholder="Old Password" />
        <Input label="Password" placeholder="New Password" />
        <Input label="Confirm Password" placeholder="Confirm New Password" />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <TouchableOpacity>
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
        </View>
      </View>
    </DrawerPageContainer>
  );
};

export default LoginScreen;
