import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import DrawerPageContainer from '../../../components/DrawerPageContainer';
import {useNavigation} from '@react-navigation/native';
import Input from '../../../components/Input';
import BtnV1 from '../../../components/BtnV1';
import BtnV2 from '../../../components/BtnV2';
import {COLORS} from '../../../helper/COLOR';
import CheckBox from '@react-native-community/checkbox';
import {RootStackParamList} from '../../../navigation/RootNavigator';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Account'>;

const AccountScreen = () => {
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  const navigation = useNavigation<NavigationProps>();
  return (
    <DrawerPageContainer title="Accounts" onBack={navigation.goBack}>
      <View style={{paddingHorizontal: 20, flex: 0.9}}>
        <Input label="Email Addess" placeholder="abc@gmail.com" />
        <Input label="Password" placeholder="********" />
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <BtnV1 text="Login" containerStyle={{marginLeft: 10, width: 100}} />
          <BtnV2
            text="Sign Up"
            containerStyle={{marginRight: 10}}
            onPress={() => navigation.navigate('SignupScreen')}
          />
        </View>
        <TouchableOpacity style={{margin: 10, marginTop: 15}}>
          <Text style={{color: COLORS.accentTwo, fontSize: 13}}>
            Forget Password ?
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: COLORS.textDark,
            fontSize: 18,
            fontWeight: 'bold',
            margin: 10,
          }}>
          Refer your friends to receive more attempts!
        </Text>
        <BtnV1
          text="invite Frined"
          containerStyle={{
            padding: 5,
            width: 150,
            marginLeft: -5,
            transform: [{scale: 0.8}],
          }}
        />

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
            By Continuing, you agree to the Terms of Services & Privacy Policy
          </Text>
        </View>
      </View>
    </DrawerPageContainer>
  );
};

export default AccountScreen;
