import React from 'react';
import {Text, TouchableOpacity, View, FlatList, Dimensions} from 'react-native';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import {COLORS} from '../../helper/COLOR';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {BoldText, RegularText} from '../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {RESULT_SHEET} from '../../sheets/types';

const DATA = [
  {
    title: 'Why recently young people do not want to get married?',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.',
  },
  {
    title: 'How to write an essay?',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.',
  },
];

const {width: WIDTH} = Dimensions.get('window');
function HistoryScreen() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor: COLORS.primaryBg,
      }}>
      <BoldText
        text="History"
        style={{fontSize: 33, textAlign: 'center', paddingTop: 10}}
      />
      <TouchableOpacity
        onPress={navigation.goBack}
        style={{
          width: 30,
          height: 30,
          backgroundColor: COLORS.textLight,
          borderRadius: 30,
          position: 'absolute',
          top: 10,
          right: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FontAwesome name="close" color="white" size={20} />
      </TouchableOpacity>
      <FlatList
        data={DATA}
        contentContainerStyle={{paddingVertical: 50}}
        keyExtractor={item => item.title}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                SheetManager.show(RESULT_SHEET);
              }}
              style={{
                backgroundColor: COLORS.white,
                padding: 10,
                borderRadius: 10,
                marginBottom: 10,
              }}>
              <BoldText text={item.title} />
              <RegularText text={item.des} style={{fontSize: 14}} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

export default HistoryScreen;
