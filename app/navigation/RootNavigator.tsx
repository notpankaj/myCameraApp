import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyDrawer from './DrawerNavigator';
import Subscription from '../screens/settings/Subscription';
import AccountScreen from '../screens/settings/Accounts';
import LoginScreen from '../screens/settings/Accounts/LoginScreen';
import SignupScreen from '../screens/settings/Accounts/SignupScreen';
import FaqScreen from '../screens/settings/FaqScreen';
import InviteScreen from '../screens/settings/InviteScreen';
import HelpScreen from '../screens/settings/HelpScreen';
import ForgetPasswordScreen from '../screens/settings/Accounts/ForgetPasswordScreen';
import SplashScreen from '../screens/SplashScreen';
import {RootStackParams} from './types';

const Root = createNativeStackNavigator<RootStackParams>();
const RootNavigator = () => {
  const [slpashVisible, setSplashVisible] = React.useState(true);

  if (slpashVisible) {
    return <SplashScreen hideSplash={() => setSplashVisible(false)} />;
  }

  return (
    <Root.Navigator
      id="RootStack"
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Root.Screen name="Splash" component={SplashScreen} /> */}
      <Root.Screen name="Drawer" component={MyDrawer} />
      {/* account stack start*/}
      <Root.Screen name="Account" component={AccountScreen} />
      <Root.Screen name="LoginScreen" component={LoginScreen} />
      <Root.Screen name="SignupScreen" component={SignupScreen} />
      <Root.Screen
        name="ForgetPasswordScreen"
        component={ForgetPasswordScreen}
      />
      {/* account stack end */}
      <Root.Screen name="Subscription" component={Subscription} />
      <Root.Screen name="InviteScreen" component={InviteScreen} />
      <Root.Screen name="HelpScreen" component={HelpScreen} />
      <Root.Screen name="FaqScreen" component={FaqScreen} />
    </Root.Navigator>
  );
};

export default RootNavigator;
