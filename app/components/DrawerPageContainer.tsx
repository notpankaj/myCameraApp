import {View, Text, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  children: ReactNode;
  onBack?: () => void;
  title: string;
}

const DrawerPageContainer = ({children, onBack, title}: Props) => {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{position: 'absolute', left: 10, top: 10}}
        onPress={onBack}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={{fontSize: 26, fontWeight: 'bold', marginVertical: 5}}>
          {title}
        </Text>
      </View>
      {children}
      <Text style={{textAlign: 'center', opacity: 0.6}}>App Verison 1.2.1</Text>
    </View>
  );
};

export default DrawerPageContainer;
