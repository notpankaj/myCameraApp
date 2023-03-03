import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MyDrawer from './MyDrawer';
import TabNavigator from './TabNavigator';
import {DrawerNavigatorParams} from './types';
const Drawer = createDrawerNavigator<DrawerNavigatorParams>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      id="DrawerNavigator"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#e5e6d8',
          width: '95%',
        },
      }}
      drawerContent={() => <MyDrawer />}>
      <Drawer.Screen name="Tabs" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
