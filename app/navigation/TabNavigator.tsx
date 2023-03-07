import { View, StyleSheet, Platform } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../helper/COLOR';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import GradientWrapper from '../components/GradientWrapper';
import TypeQuestionScreen from '../screens/TypeQuestionScreen';
import AudioQuestionScreen from '../screens/AudioQuestionScreen';
import { useSelector } from 'react-redux';
import { tabBarVisibilitySelector } from '../redux/features/theme/themeSlice';
import { TabNavigatorParams } from './types';

const Tab = createBottomTabNavigator<TabNavigatorParams>();


const TABBAR_HEIGHT = Platform.OS === 'ios' ? 90 : 75

const TabNavigator = () => {
  const tabVisible = useSelector(tabBarVisibilitySelector);
  return (
    <View style={{ flex: 1 }}>
      <GradientWrapper
        off={!tabVisible}
        containerStyle={{
          width: '100%',
          height: 5,
          position: 'absolute',
          bottom: TABBAR_HEIGHT,
          zIndex: 1,
          left: 0,
          right: 0,
        }}
        children={<></>}
      />
      <Tab.Navigator
        id="TabNavigator"
        initialRouteName="Scan"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: COLORS.accentOne,
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <FontAwesome
                  color={focused ? COLORS.accentOne : COLORS.textDark}
                  size={24}
                  name="keyboard-o"
                />
              );
            },
          }}
          name="Type"
          component={TypeQuestionScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Entypo
                  color={focused ? COLORS.accentOne : COLORS.textDark}
                  size={24}
                  name="camera"
                />
              );
            },
            tabBarStyle: tabVisible ? styles.tabBar : { display: 'none' },
          }}
          name="Scan"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused, color }) => {
              return (
                <FontAwesome5
                  color={focused ? COLORS.accentOne : COLORS.textDark}
                  size={24}
                  name="microphone"
                />
              );
            },
          }}
          name="Audio"
          component={AudioQuestionScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <FontAwesome
                  color={focused ? COLORS.accentOne : COLORS.textDark}
                  size={24}
                  name="history"
                />
              );
            },
          }}
          name="History"
          component={HistoryScreen}
        />
      </Tab.Navigator>
    </View>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  iconWrapper: {
    backgroundColor: 'rgba(0,0,0,0.08)',
    padding: 10,
    borderRadius: 50,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    paddingBottom: Platform.OS === 'ios' ? 25 : 12,
    paddingTop: 10,
    height: TABBAR_HEIGHT,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
