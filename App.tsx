import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './app/navigation/RootNavigator';
import {SheetProvider} from 'react-native-actions-sheet';
import './app/sheets/sheets';
import {Provider} from 'react-redux';
import {store} from './app/redux/store';
import {StripeProvider} from '@stripe/stripe-react-native';
import {AlertNotificationRoot} from 'react-native-alert-notification';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']);
import {COLORS} from './app/helper/COLOR';
const STRIPE_PK =
  'pk_test_51M0L2VSFJgtn9Lb9roXIXnZekNjTrHMsY4fpXNp5h4QQDIWdkE4ZWRipXmKFd216tS213M9MGRT0vK07udT1FkKI00t1mHCVh3';

const alertThemeConfig = {
  label: COLORS.textDark,
  card: COLORS.primaryBg,
  overlay: COLORS.textDark,
  success: COLORS.greenDark,
  danger: 'red',
  warning: 'yellow',
};

const App = () => {
  return (
    <AlertNotificationRoot
      theme="light"
      colors={[alertThemeConfig, alertThemeConfig]}>
      <Provider store={store}>
        <StripeProvider publishableKey={STRIPE_PK}>
          <NavigationContainer>
            <SheetProvider>
              <RootNavigator />
            </SheetProvider>
          </NavigationContainer>
        </StripeProvider>
      </Provider>
    </AlertNotificationRoot>
  );
};

export default App;
