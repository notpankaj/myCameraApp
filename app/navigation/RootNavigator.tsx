import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MyDrawer from './DrawerNavigator';
import Subscription from '../screens/settings/Subscription';
import AccountScreen from '../screens/settings/Accounts';
import LoginScreen from '../screens/settings/Accounts/LoginScreen';
import SignupScreen from '../screens/settings/Accounts/SignupScreen';
import FaqScreen from '../screens/settings/FaqScreen';
import InviteScreen from '../screens/settings/InviteScreen';
import HelpScreen from '../screens/settings/HelpScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ForgetPasswordScreen from '../screens/settings/Accounts/ForgetPasswordScreen';

export type RootStackParamList = {
  Drawer: undefined;
  Home: undefined;
  Subscription: undefined;
  Account: undefined;
  LoginScreen: undefined;
  SignupScreen: undefined;
  FaqScreen: undefined;
  HelpScreen: undefined;
  InviteScreen: undefined;
  HistoryScreen: undefined;
  ForgetPasswordScreen: undefined;
};

const Root = createNativeStackNavigator<RootStackParamList>();
const RootNavigator = () => {
  return (
    <Root.Navigator
      id="RootStack"
      screenOptions={{
        headerShown: false,
      }}>
      <Root.Screen name="Drawer" component={MyDrawer} />
      <Root.Screen name="Home" component={HomeScreen} />
      <Root.Screen name="Subscription" component={Subscription} />
      <Root.Screen name="Account" component={AccountScreen} />
      <Root.Screen name="LoginScreen" component={LoginScreen} />
      <Root.Screen name="SignupScreen" component={SignupScreen} />
      <Root.Screen name="FaqScreen" component={FaqScreen} />
      <Root.Screen name="HelpScreen" component={HelpScreen} />
      <Root.Screen
        name="ForgetPasswordScreen"
        component={ForgetPasswordScreen}
      />
      <Root.Screen name="InviteScreen" component={InviteScreen} />
      <Root.Screen name="HistoryScreen" component={HistoryScreen} />
    </Root.Navigator>
  );
};

export default RootNavigator;
