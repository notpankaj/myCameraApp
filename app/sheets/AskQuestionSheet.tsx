import React from 'react';
import {TextInput, Text, TouchableOpacity, View} from 'react-native';
import ActionSheet, {SheetProps} from 'react-native-actions-sheet';

function AskQuestionSheet(props: SheetProps) {
  const [height, setHeight] = React.useState(250);

  return (
    <ActionSheet
      id={props.sheetId}
      containerStyle={{height: height, backgroundColor: 'white'}}
      gestureEnabled={true}>
      <View style={{flex: 1, paddingHorizontal: 30}}>
        <TextInput
          onFocus={() => setHeight(450)}
          onBlur={() => setHeight(250)}
          placeholder="Type a question"
          style={{
            borderRadius: 10,
            paddingHorizontal: 10,
            borderColor: 'gray',
            borderWidth: 0.4,
          }}
        />
        <TouchableOpacity
          style={{
            height: 40,
            width: '100%',
            backgroundColor: 'skyblue',
            borderRadius: 10,
            marginVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
            Ask Question
          </Text>
        </TouchableOpacity>
      </View>
    </ActionSheet>
  );
}

export default AskQuestionSheet;
