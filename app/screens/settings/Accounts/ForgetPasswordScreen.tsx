import {View, Alert, TouchableOpacity} from 'react-native';
import React from 'react';
import DrawerPageContainer from '../../../components/DrawerPageContainer';
import {useNavigation} from '@react-navigation/native';
import Input from '../../../components/Input';

import {COLORS} from '../../../helper/COLOR';
import GradientWrapper from '../../../components/GradientWrapper';
import {BoldText, RegularText} from '../../../components/MyText';
import CheckBox from '@react-native-community/checkbox';
import AppIcon from '../../../components/icons/AppIcon';
import {ScrollView} from 'react-native-gesture-handler';

const ForgetPasswordScreen = () => {
  const navigation = useNavigation();

  const onBack = () => {
    navigation.goBack();
  };
  return (
    <DrawerPageContainer title="" onBack={onBack}>
      <View style={{paddingHorizontal: 20, flex: 0.9, marginTop: 50}}>
        <BoldText
          text="Change Password"
          style={{fontSize: 30, textAlign: 'center'}}
        />
        <Input label="Email Addess" placeholder="Old Password" />
        <Input label="Password" placeholder="New Password" />
        <Input label="Confirm Password" placeholder="Confirm New Password" />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            flexDirection: 'row',
            gap: 10,
          }}>
          <TouchableOpacity>
            <GradientWrapper
              containerStyle={{
                borderRadius: 10,
                width: 120,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              reverse>
              <RegularText
                text={'UPDATE'}
                style={{color: COLORS.white, fontSize: 20}}
              />
            </GradientWrapper>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerPageContainer>
  );
};

export default ForgetPasswordScreen;
