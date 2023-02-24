import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './app/navigation/RootNavigator';
import {SheetProvider} from 'react-native-actions-sheet';
import './app/sheets/sheets';
const App = () => {
  return (
    <NavigationContainer>
      <SheetProvider>
        <RootNavigator />
      </SheetProvider>
    </NavigationContainer>
  );
};

export default App;
