import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../helper/COLOR';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GradientWrapper from '../components/GradientWrapper';
import TypeQuestionScreen from '../screens/TypeQuestionScreen';
import {BoldText} from '../components/MyText';
import AudioQuestionScreen from '../screens/AudioQuestionScreen';

const Tab = createBottomTabNavigator();

const Dummy = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: COLORS.primaryBg,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <BoldText text="Comming soon" />
  </View>
);

const TabNavigator = () => {
  return (
    <View style={{flex: 1}}>
      <GradientWrapper
        containerStyle={{
          width: '100%',
          height: 5,
          position: 'absolute',
          bottom: 70,
          zIndex: 1,
          left: 0,
          right: 0,
        }}
        children={<></>}
      />
      <Tab.Navigator
        initialRouteName="Scan"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            paddingBottom: 12,
            paddingTop: 10,
            height: 75,
            paddingLeft: 40,
            paddingRight: 40,
          },
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <GradientWrapper
                  containerStyle={styles.iconWrapper}
                  off={!focused}>
                  <FontAwesome
                    color={focused ? COLORS.white : COLORS.textDark}
                    size={24}
                    name="keyboard-o"
                  />
                </GradientWrapper>
              );
            },
          }}
          name="Type"
          component={TypeQuestionScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <GradientWrapper
                  containerStyle={styles.iconWrapper}
                  off={!focused}>
                  <Entypo
                    color={focused ? COLORS.white : COLORS.textDark}
                    size={24}
                    name="camera"
                  />
                </GradientWrapper>
              );
            },
          }}
          name="Scan"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused, color}) => {
              return (
                <GradientWrapper
                  containerStyle={styles.iconWrapper}
                  off={!focused}>
                  <FontAwesome5
                    color={focused ? COLORS.white : COLORS.textDark}
                    size={24}
                    name="microphone"
                  />
                </GradientWrapper>
              );
            },
          }}
          name="Audio"
          component={AudioQuestionScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <GradientWrapper
                  containerStyle={styles.iconWrapper}
                  off={!focused}>
                  <FontAwesome
                    color={focused ? COLORS.white : COLORS.textDark}
                    size={24}
                    name="history"
                  />
                </GradientWrapper>
              );
            },
          }}
          name="Past Answer"
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
});
