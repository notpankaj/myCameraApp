import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './app/navigation/RootNavigator';
import {SheetProvider} from 'react-native-actions-sheet';
import './app/sheets/sheets';
import {Provider} from 'react-redux';
import {store} from './app/redux/store';
import {StripeProvider} from '@stripe/stripe-react-native';
const App = () => {
  return (
    <Provider store={store}>
      <StripeProvider publishableKey="pk_test_51M0L2VSFJgtn9Lb9roXIXnZekNjTrHMsY4fpXNp5h4QQDIWdkE4ZWRipXmKFd216tS213M9MGRT0vK07udT1FkKI00t1mHCVh3">
        <NavigationContainer>
          <SheetProvider>
            <RootNavigator />
          </SheetProvider>
        </NavigationContainer>
      </StripeProvider>
    </Provider>
  );
};

export default App;
