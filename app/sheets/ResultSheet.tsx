import React from 'react';
import {Text, TouchableOpacity, View, FlatList, ScrollView} from 'react-native';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';
import {COLORS} from '../helper/COLOR';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RESULT_SHEET} from './types';
import {BoldText, RegularText} from '../components/MyText';
import RelatedResource from '../components/RelatedResource';

const DATA = {
  title: 'Answer:',
  des: 'Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus',
};

function ResultSheet(props: SheetProps) {
  const [bookmarked, setBookmarked] = React.useState(false);
  const handleClose = () => {
    SheetManager.hide(RESULT_SHEET);
  };
  return (
    <ActionSheet
      id={props.sheetId}
      containerStyle={{height: 550, backgroundColor: COLORS.primaryBg}}
      gestureEnabled={false}>
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
          zIndex: 1,
        }}>
        <FontAwesome name="close" color="white" size={20} />
      </TouchableOpacity>
      <ScrollView
        style={{flex: 1, paddingHorizontal: 30}}
        contentContainerStyle={{paddingVertical: 15}}>
        <BoldText text="Question Type" />
        <RegularText
          text="Question: consectetur adipiscing elit. Aenean euismod bibendum
          laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo
          commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus
          et magnis dis pa?"
        />

        <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 10,
            marginBottom: 10,
            marginTop: 20,
          }}>
          <TouchableOpacity
            onPress={() => setBookmarked(s => !s)}
            style={{
              position: 'absolute',
              top: 8,
              right: 8,
              padding: 5,
              zIndex: 1,
            }}>
            <Ionicons
              name={bookmarked ? 'bookmark' : 'bookmark-outline'}
              size={20}
              color="black"
            />
          </TouchableOpacity>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>{DATA.title}</Text>
          <Text style={{fontSize: 12}}>{DATA.des}</Text>
        </View>

        <RelatedResource />
      </ScrollView>
    </ActionSheet>
  );
}

export default ResultSheet;
