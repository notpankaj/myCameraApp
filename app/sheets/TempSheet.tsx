import React from 'react';
import {Text, TouchableOpacity, View, FlatList, Dimensions} from 'react-native';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import {COLORS} from '../helper/COLOR';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TEMP_SHEET} from './types';

const {width: WIDTH} = Dimensions.get('window');
function TempSheet(props: SheetProps<{value: string}>) {
  const handleClose = () => {
    SheetManager.hide(TEMP_SHEET);
  };
  return (
    <ActionSheet
      id={props.sheetId}
      containerStyle={{height: WIDTH * 1.7, backgroundColor: COLORS.primaryBg}}
      gestureEnabled={false}>
      <View style={{flex: 1, paddingHorizontal: 30}}>
        <Text
          style={{
            marginTop: 20,
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          RESULT
        </Text>
        <TouchableOpacity
          onPress={handleClose}
          style={{
            width: 30,
            height: 30,
            backgroundColor: 'tomato',
            borderRadius: 30,
            position: 'absolute',
            top: 10,
            right: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome name="close" color="white" size={20} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 10,
            marginTop: 40,
            marginBottom: 10,
          }}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>
            {props?.payload?.value}
          </Text>
        </TouchableOpacity>
      </View>
    </ActionSheet>
  );
}

export default TempSheet;
