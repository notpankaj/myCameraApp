import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './app/navigation/RootNavigator';
import {SheetProvider} from 'react-native-actions-sheet';
import './app/sheets/sheets';
import {Provider} from 'react-redux';
import {store} from './app/redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SheetProvider>
          <RootNavigator />
        </SheetProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
