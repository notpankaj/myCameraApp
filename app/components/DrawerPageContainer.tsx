import {View, Text, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BoldText} from './MyText';
import {COLORS} from '../helper/COLOR';
import AppIcon from './icons/AppIcon';

interface Props {
  children: ReactNode;
  onBack?: () => void;
  title: string;
}

const DrawerPageContainer = ({children, onBack, title}: Props) => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primaryBg}}>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(0,0,0,0.12)',
            width: 25,
            height: 25,
            borderRadius: 25,
            position: 'absolute',
            top: 35,
            left: 25,
          }}
          onPress={onBack}>
          <Ionicons name="chevron-back" size={24} color={COLORS.textLight} />
        </TouchableOpacity>
        <View style={{paddingVertical: 20, alignItems: 'center'}}>
          <BoldText style={{fontSize: 30}} text={title} />
        </View>
      </View>
      {children}
      {/* <Text style={{textAlign: 'center', opacity: 0.6}}>App Verison 1.2.1</Text> */}
      <View style={{alignItems: 'center'}}>
        <AppIcon />
      </View>
    </View>
  );
};

export default DrawerPageContainer;
