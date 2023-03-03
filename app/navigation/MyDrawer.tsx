import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {ReactNode} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootNavigator';
import {COLORS} from '../helper/COLOR';
import {BoldText} from '../components/MyText';
import AppIcon from '../components/icons/AppIcon';

type ItemProps = {
  icon: () => ReactNode;
  title: string;
  des: string;
  onPress?: () => void;
  disbaleRightArrow?: boolean;
};
const Item = ({icon, title, des, onPress, disbaleRightArrow}: ItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: '90%',
        backgroundColor: COLORS.white,
        borderRadius: 10,
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
      }}>
      <View style={{marginRight: 10}}>{icon()}</View>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{title}</Text>
        <Text numberOfLines={1} style={{fontSize: 12}}>
          {des}
        </Text>
      </View>
      {disbaleRightArrow || (
        <View>
          <AntDesign name="right" size={24} color="black" />
        </View>
      )}
    </TouchableOpacity>
  );
};

type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'Drawer',
  'RootStack'
>;

const MyDrawer = () => {
  const navigation = useNavigation<NavigationProps>();
  const handleClose = () => {
    navigation?.dispatch(DrawerActions.closeDrawer());
  };
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      {/* header */}
      <TouchableOpacity
        style={{position: 'absolute', left: 10, top: 30}}
        onPress={handleClose}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingTop: 20,
        }}>
        <BoldText style={{fontSize: 30}} text="Settings" />
      </View>

      <Item
        icon={() => (
          <MaterialCommunityIcons
            name="face-man-profile"
            size={35}
            color={COLORS.accentTwo}
          />
        )}
        onPress={() => navigation.navigate('Account')}
        title="Account"
        des="Update username, password,etc"
      />
      <Item
        icon={() => (
          <MaterialCommunityIcons
            name="email-plus-outline"
            size={35}
            color={COLORS.accentTwo}
          />
        )}
        onPress={() => navigation.navigate('Subscription')}
        title="Subscripition"
        des="Subscripition renewal and cancellation"
      />
      <Item
        icon={() => (
          <Ionicons
            name="mail-open-outline"
            size={35}
            color={COLORS.accentTwo}
          />
        )}
        onPress={() => navigation.navigate('InviteScreen')}
        title="Invite Friends"
        des="invite friends and get a bonus for scan"
      />

      <Text
        style={{
          textAlign: 'left',
          alignSelf: 'flex-start',
          marginLeft: 25,
          marginBottom: 10,
        }}>
        Others
      </Text>

      {/* other */}
      <Item
        icon={() => (
          <FontAwesome
            name="question-circle-o"
            size={35}
            color={COLORS.accentTwo}
          />
        )}
        onPress={() => navigation.navigate('HelpScreen')}
        title="Help and Support"
        des="Tutorials and introduction"
      />
      <Item
        icon={() => (
          <FontAwesome
            name="question-circle-o"
            size={35}
            color={COLORS.accentTwo}
          />
          // <Image
          //   style={{width: 35, height: 35, resizeMode: 'contain'}}
          //   source={require('../../assets/nav/faq.png')}
          // />
        )}
        onPress={() => navigation.navigate('FaqScreen')}
        title="FAQ"
        des="Most Freqently asked Question"
      />
      <Item
        icon={() => (
          <AntDesign name="contacts" size={35} color={COLORS.accentTwo} />
          // <Image
          //   style={{width: 100, height: 100, resizeMode: 'center'}}
          //   source={require('../../assets/nav/contact.png')}
          // />
        )}
        title="Contact Us"
        des="Send an email to us: app@gamail.com"
        disbaleRightArrow
      />

      <AppIcon />
    </View>
  );
};

export default MyDrawer;
